const form = document.getElementById("emailForm");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const trap = document.querySelector(".honeypot").value;

  if (trap) return;

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    status.textContent = "Please enter a valid email.";
    return;
  }

  status.textContent = "✨ You're on the list. Thank you.";
  form.reset();
});
