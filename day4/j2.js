// Predefined user credentials
let user = {
    email: "john@example.com",
    password: "password123"
  };
  
  // Function to login an existing user
  function login() {
    let email = prompt("Enter your email:");
    let password = prompt("Enter your password:");
  
    if (email === user.email && password === user.password) {
      alert("User logged in successfully");
    } else {
      alert("Invalid email or password");
      login();
    }
  }
  
  // Main program
  console.log("Welcome! A user account has been created for you with the following credentials:");
  console.log(`Email: ${user.email}`);
  console.log(`Password: ${user.password}`);
  login();
  