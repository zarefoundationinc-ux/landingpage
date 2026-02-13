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
document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------------------
  // Progress bar
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

  
  }
});



});
