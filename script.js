

document.addEventListener("DOMContentLoaded", function() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const agree = document.getElementById("agree");
  const form = document.querySelector("form");

  function validateForm(event) {
    event.preventDefault();
    
    let valid = true;

    // Validate first name
    if (firstName.value === "") {
      valid = false;
      firstName.classList.add("error");
      document.getElementById("firstNameError").textContent = "Name cannot be empty";
    } else {
      firstName.classList.remove("error");
      document.getElementById("firstNameError").textContent = "";
    }

    // Validate last name
    if (lastName.value === "") {
      valid = false;
      lastName.classList.add("error");
      document.getElementById("lastNameError").textContent = "Name cannot be empty";
    } else {
      lastName.classList.remove("error");
      document.getElementById("lastNameError").textContent = "";
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value)) {
      valid = false;
      phone.classList.add("error");
      document.getElementById("phoneError").textContent = "Please enter a valid phone number";
    } else {
      phone.classList.remove("error");
      document.getElementById("phoneError").textContent = "";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      valid = false;
      email.classList.add("error");
      document.getElementById("emailError").textContent         = "Please enter a valid email address";
} else {
  email.classList.remove("error");
  document.getElementById("emailError").textContent = "";
}

// Validate password
const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
if (!passwordRegex.test(password.value)) {
  valid = false;
  password.classList.add("error");
  document.getElementById("passwordError").textContent = "Password must be at least 8 characters long and contain at least one numeric and uppercase value";
} else {
  password.classList.remove("error");
  document.getElementById("passwordError").textContent = "";
}

// Validate terms and conditions
if (!agree.checked) {
  valid = false;
  document.getElementById("agreeError").textContent = "Please agree to the terms and conditions";
} else {
  document.getElementById("agreeError").textContent = "";
}

if (valid) {
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
    agree: agree.checked
  });

  alert("Form submitted successfully");
}
}

form.addEventListener("submit", validateForm);
});
