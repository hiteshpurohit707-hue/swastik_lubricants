document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      company: document.getElementById("company").value,
      phone: document.getElementById("phone").value,
      requirement: document.getElementById("requirement").value,
      message: document.getElementById("message").value
    };

    if (!data.name || !data.phone) {
      alert("Please fill required fields");
      return;
    }

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxLXMA8rwb8rzpJjEGqNweRHMOdi7NcifQoJlE_11_IYfuXYgrZJhX4BLrw7-pJaPPm/exec", {
        method: "POST",
        body: JSON.stringify(data)
      });

      alert("Appointment request submitted successfully!");
      form.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  });
});
