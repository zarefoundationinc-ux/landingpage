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

  // -----------------------------------------
  // Emoji confetti 🎉✨🌟
  // -----------------------------------------
  const confettiLayer = document.querySelector(".confetti-layer");
  if (confettiLayer) {
    const emojis = ["🎉","✨","🌟"];
    const count = 15; // number of emojis

    for (let i = 0; i < count; i++) {
      const emoji = document.createElement("div");
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.className = "emoji-confetti";

      // random horizontal position
      emoji.style.left = Math.random() * 100 + "%";
      emoji.style.top = "80%"; // start near the progress bar
      emoji.style.fontSize = (18 + Math.random() * 10) + "px";
      emoji.style.opacity = Math.random() * 0.8 + 0.5;

      confettiLayer.appendChild(emoji);

      // Animate it floating up and fading
      const duration = 2000 + Math.random() * 1500;
      emoji.animate([
        { transform: `translateY(0px)`, opacity: emoji.style.opacity },
        { transform: `translateY(-80px) rotate(${Math.random()*360}deg)`, opacity: 0 }
      ], {
        duration: duration,
        easing: "ease-out",
        iterations: Infinity,
        delay: Math.random() * 1000
      });
    }
  }
});



});
