form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const trap = document.querySelector(".honeypot").value;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = "Please enter a valid email.";
    return;
  }

  const res = await fetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, trap })
  });

  if (res.ok) {
    status.textContent = "✨ You're on the list. Thank you.";
    form.reset();
  } else {
    status.textContent = "Something went wrong. Try again.";
  }
});
