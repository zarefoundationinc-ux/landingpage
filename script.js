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
