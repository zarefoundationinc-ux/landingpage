// Dark mode
const toggle = document.getElementById("themeToggle");
const body = document.body;
console.log("Theme toggle JS loaded");

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


