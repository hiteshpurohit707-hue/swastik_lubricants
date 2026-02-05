const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    company: document.getElementById("company").value,
    phone: document.getElementById("phone").value,
    requirement: document.getElementById("requirement").value,
    message: document.getElementById("message").value
  };

  fetch("https://script.google.com/macros/s/AKfycbxLXMA8rwb8rzpJjEGqNweRHMOdi7NcifQoJlE_11_IYfuXYgrZJhX4BLrw7-pJaPPm/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(() => {
    alert("Form submitted successfully!");
    form.reset();
  })
  .catch(() => {
    alert("Submission failed");
  });
});
