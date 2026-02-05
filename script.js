const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbxLXMA8rwb8rzpJjEGqNweRHMOdi7NcifQoJlE_11_IYfuXYgrZJhX4BLrw7-pJaPPm/exec", {
    method: "POST",
    body: formData
  })
  .then(() => {
    alert("Form submitted successfully!");
    form.reset();
  })
  .catch(() => {
    alert("Submission failed");
  });
});
