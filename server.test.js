const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');

const port = 4321;

function request(pathname, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: '127.0.0.1',
      port,
      path: pathname,
      method: options.method || 'GET',
      headers: options.headers || {},
    }, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => resolve({ statusCode: res.statusCode, body }));
    });

    req.on('error', reject);

    if (options.body) {
      req.write(options.body);
    }

    req.end();
  });
}

test('backend exposes the expected donation and admin API routes', async () => {
  const email = `test-${Date.now()}@example.com`;

  const register = await request('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Test User',
      email,
      password: 'secret123',
      phone: '+1234567890',
    }),
  });

  assert.equal(register.statusCode, 201);
  const registerData = JSON.parse(register.body);
  assert.equal(registerData.user.email, email);

  const login = await request('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password: 'secret123',
    }),
  });

  assert.equal(login.statusCode, 200);
  const loginData = JSON.parse(login.body);
  assert.ok(loginData.token);

  const donation = await request('/api/donations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'Warm layers',
      quantity: 3,
      condition: 'Good',
      donorName: 'Test User',
      email,
      phone: '+1234567890',
    }),
  });

  assert.equal(donation.statusCode, 201);
  const donationData = JSON.parse(donation.body);
  assert.ok(donationData.donation.id);

  const admin = await request('/api/admin?token=' + encodeURIComponent(loginData.token));
  assert.equal(admin.statusCode, 200);
  const adminData = JSON.parse(admin.body);
  assert.ok(Array.isArray(adminData.donations));
});
