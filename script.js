// Dark mode toggle
const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  const dark = body.classList.contains("dark");
  toggle.textContent = dark ? "☀️" : "🌙";
  localStorage.setItem("theme", dark ? "dark" : "light");
});




const form = document.getElementById("emailForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const trap = document.querySelector(".honeypot").value;

  // Honeypot spam protection
  if (trap) {
    return;
  }

  // Email validation
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!validEmail) {
    status.textContent = "Please enter a valid email address.";
    return;
  }

  try {
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, trap })
    });

    if (!res.ok) {
      throw new Error("Network error");
    }

    // Remove form and show success message
    document.getElementById("emailForm").remove();

    const success = document.getElementById("successMessage");
    success.classList.remove("hidden");

  } catch (err) {
    status.textContent = "Something went wrong. Please try again later.";
  }
});
