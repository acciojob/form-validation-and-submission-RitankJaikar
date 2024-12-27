const form = document.getElementById("myForm");
const submitButton = document.getElementById("submitBtn");

// Validate form fields on any input change
form.addEventListener("input", validateForm);

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const terms = document.getElementById("terms").checked;

  // Check if all fields are valid
  const isFormValid = name && email && password && terms;

  // Enable or disable the submit button
  submitButton.disabled = !isFormValid;

  // Show error messages
  document.getElementById("nameError").innerText = name ? "" : "Name is required.";
  document.getElementById("emailError").innerText = email ? "" : "Email is required.";
  document.getElementById("passwordError").innerText = password ? "" : "Password is required.";
}

function handleSubmit(event) {
  // Ensure the form is valid before submission
  if (submitButton.disabled) {
	event.preventDefault(); // Prevent form submission if validation fails
	return false;
  }
  return true;
}