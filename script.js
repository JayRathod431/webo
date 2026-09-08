// Register Form Validation

const registerForm = document.querySelector(".register-form");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        // Stop the form from submitting
        event.preventDefault();


        // Get values from the form

        const name = document.getElementById("register-name").value.trim();

        const email = document.getElementById("register-email").value.trim();

        const phone = document.getElementById("register-phone").value.trim();

        const password = document.getElementById("register-password").value;

        const confirmPassword = document.getElementById("confirm-password").value;

        const terms = document.querySelector(".terms input").checked;


        // Check name

        if (name === "") {
            alert("Please enter your full name.");
            return;
        }


        // Check email

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }


        // Check phone

        if (phone === "") {
            alert("Please enter your phone number.");
            return;
        }


        // Check password

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }


        // Check passwords

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }


        // Check terms

        if (!terms) {
            alert("Please agree to the Terms & Conditions.");
            return;
        }


        // Everything is valid

        alert("Registration successful! 🎉");

    });

}
// Login Form Validation

const loginForm = document.querySelector(".login-form");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("login-email").value.trim();

        const password = document.getElementById("login-password").value;


        // Check email

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }


        // Check password

        if (password === "") {
            alert("Please enter your password.");
            return;
        }


        // Check password length

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }


        // Everything is valid

        alert("Login successful! 🎉");

    });

}
// Donation Form Validation

const donationForm = document.querySelector(".donation-form");

if (donationForm) {

    donationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const email = document.getElementById("email").value.trim();

        const clothingType =
            document.getElementById("clothing-type").value;

        const quantity =
            document.getElementById("quantity").value;

        const condition =
            document.getElementById("condition").value;

        const description =
            document.getElementById("description").value.trim();

        const address =
            document.getElementById("address").value.trim();

        const method =
            document.querySelector(
                'input[name="method"]:checked'
            );


        // Check donor information

        if (name === "") {
            alert("Please enter your full name.");
            return;
        }

        if (phone === "") {
            alert("Please enter your phone number.");
            return;
        }

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }


        // Check clothing information

        if (clothingType === "") {
            alert("Please select a clothing type.");
            return;
        }

        if (quantity === "" || quantity < 1) {
            alert("Please enter a valid quantity.");
            return;
        }

        if (condition === "") {
            alert("Please select the clothing condition.");
            return;
        }

        if (description === "") {
            alert("Please describe the clothes.");
            return;
        }


        // Check donation method

        if (!method) {
            alert("Please select Pickup or Drop-off.");
            return;
        }


        // Check address

        if (address === "") {
            alert("Please enter your address.");
            return;
        }


        // Everything is valid

        alert("Donation submitted successfully! 👕❤️");

    });

}
