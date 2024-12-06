// script.js

// Predefined user credentials
let user = {
    email: "john@example.com",
    password: "password123"
};

// Function to login an existing user
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === user.email && password === user.password) {
        alert("User logged in successfully");
    } else {
        alert("Invalid email or password");
    }
}