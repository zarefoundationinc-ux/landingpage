// Dark mode
const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.theme === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.onclick = () => {
  body.classList.toggle("dark");
  const dark = body.classList.contains("dark");
  toggle.textContent = dark ? "☀️" : "🌙";
  localStorage.theme = dark ? "dark" : "light";
};

// Email signup
const form = document.getElementById("emailForm");
const success = document.getElementById("success");
const status = document.getElementById("status");

form.onsubmit = async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const trap = document.getElementById("company").value;
  if (trap) return;

  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    if (!res.ok) throw new Error();

    form.classList.add("hidden");
    success.classList.remove("hidden");
  } catch {
    status.textContent = "Something went wrong. Please try again.";

  }
};
