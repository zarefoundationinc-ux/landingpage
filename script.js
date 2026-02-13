document.addEventListener("DOMContentLoaded", () => {
const raisedEl = document.getElementById("raised-amount");
const goalEl = document.getElementById("goal-amount");
const bar = document.getElementById("progress-bar");

if (raisedEl && goalEl && bar) {
  const parseMoney = (text) => Number(text.replace(/[^0-9.]/g, "")) || 0;

  const raised = parseMoney(raisedEl.textContent);
  const goal = parseMoney(goalEl.textContent);

  const percent = goal > 0 ? Math.min((raised / goal) * 100, 100) : 0;
  bar.style.width = percent + "%";

  // Optional: update progress-text to also show % funded
  const progressText = document.getElementById("progress-text");
  if (progressText) {
    progressText.textContent += ` (${Math.round(percent)}% funded)`;
  }
}




});
