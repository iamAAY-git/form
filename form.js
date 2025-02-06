function signUpUser(event) {
    event.preventDefault(); // Stop the form from submitting

    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    // Check if email is already registered
    if (localStorage.getItem(email)) {
        alert("User already exists! Please log in.");
        return;
    }

    // Save user details
    localStorage.setItem(email, password);
    alert("Signup successful! Now, log in.");

    // Switch to the login form
    document.getElementById("login").checked = true;
}

function loginUser(event) {
    event.preventDefault(); // Stop the form from submitting

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    // Get stored password
    let storedPassword = localStorage.getItem(email);

    // Check if credentials match
    if (storedPassword === password) {
       
        window.location.href = "welcome.html"; // Redirect to another page
    } else {
        alert("Invalid email or password! Try again.");
    }
}