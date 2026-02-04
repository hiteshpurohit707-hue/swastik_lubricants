document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value.trim(),
      company: document.getElementById("company").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      requirement: document.getElementById("requirement").value,
      message: document.getElementById("message").value.trim()
    };

    if (!data.name || !data.phone) {
      alert("Please fill required fields.");
      return;
    }

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxLXMA8rwb8rzpJjEGqNweRHMOdi7NcifQoJlE_11_IYfuXYgrZJhX4BLrw7-pJaPPm/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      alert("Appointment request submitted successfully!");
      form.reset();

    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    }
  });
});

