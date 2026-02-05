const form = document.getElementById("appointmentForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const submitBtn = form.querySelector("button");
  submitBtn.disabled = true;
  submitBtn.innerText = "Submitting...";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      alert("✅ Appointment booked successfully!");
      form.reset();
    } else {
      alert("❌ Submission failed. Please try again.");
    }

  } catch (error) {
    console.error(error);
    alert("❌ Network error. Try again later.");
  }

  submitBtn.disabled = false;
  submitBtn.innerText = "Schedule Appointment";
});
