const toggle = document.getElementById("theme-toggle");
const body = document.body;


const currentRaised = 2100;
const goalAmount = 10000;

const percentage = Math.min((currentRaised / goalAmount) * 100, 100);
document.getElementById("progress-bar").style.width = percentage + "%";
document.getElementById("progress-text").innerText = 
  `$${currentRaised.toLocaleString()} raised of $${goalAmount.toLocaleString()} goal`;



const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");

  if (!progressText || !progressBar) return;

  const raised = Number(progressText.dataset.raised || 0);
  const goal = Number(progressText.dataset.goal || 0);

  const percent = goal > 0 ? Math.min((raised / goal) * 100, 100) : 0;

  progressBar.style.width = percent + "%";

  const formatMoney = (n) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  progressText.textContent = `${formatMoney(raised)} raised of ${formatMoney(goal)} goal`;
});

