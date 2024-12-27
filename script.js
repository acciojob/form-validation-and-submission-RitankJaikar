//your JS code here. If required.
function validateForm() {
  const form = document.getElementById("myForm");
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const terms = document.getElementById("terms").checked;
  const submitButton = document.getElementById("submitBtn");

  // Check if all fields are valid
  const isFormValid = name && email && terms;

  // Enable or disable the submit button
  submitButton.disabled = !isFormValid;

  // Show error messages
  document.getElementById("nameError").innerText = name ? "" : "Name is required.";
  document.getElementById("emailError").innerText = email ? "" : "Email is required.";
}

function handleSubmit(event) {
  // Validate form again before submission
  validateForm();

  // Prevent default submission if any validation fails
  const submitButton = document.getElementById("submitBtn");
  if (submitButton.disabled) {
	event.preventDefault();
  }
}