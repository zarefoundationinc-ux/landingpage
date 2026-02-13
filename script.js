document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------------------
  // Progress bar uses the values shown in HTML
  // -----------------------------------------
  const raisedEl = document.getElementById("raised-amount");
  const goalEl = document.getElementById("goal-amount");
  const bar = document.getElementById("progress-bar");

  if (raisedEl && goalEl && bar) {
    const parseMoney = (text) => Number(text.replace(/[^0-9.]/g, "")) || 0;

    const raised = parseMoney(raisedEl.textContent);
    const goal = parseMoney(goalEl.textContent);

    const percent = goal > 0 ? Math.min((raised / goal) * 100, 100) : 0;
    bar.style.width = percent + "%";
  }

  // -----------------------------------------
  // Confetti sparkle around progress bar
  // -----------------------------------------
  const confettiLayer = document.querySelector(".confetti-layer");
  if (confettiLayer) {
    const colors = [
      "rgba(0,0,0,0.22)",
      "rgba(0,0,0,0.12)",
      "rgba(0,0,0,0.18)",
      "rgba(0,0,0,0.08)"
    ];

    const dotCount = 18;

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.className = "confetti-dot";

      dot.style.left = Math.random() * 100 + "%";
      dot.style.top = (Math.random() * 70) + "%";

      dot.style.background = colors[Math.floor(Math.random() * colors.length)];
      dot.style.transform = `rotate(${Math.random() * 25 - 12}deg)`;

      dot.style.animationDelay = (Math.random() * 1.8) + "s";
      dot.style.animationDuration = (2.2 + Math.random() * 2.2) + "s";

      confettiLayer.appendChild(dot);
    }
  }
});
