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
