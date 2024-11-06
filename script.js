const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
const darkModeToggle = document.getElementById("dark-mode-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      display.innerText = "";
    } else if (value === "=") {
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error";
      }
    } else {
      display.innerText += value;
    }
  });
});

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    darkModeToggle.innerText = "🌙";
  } else {
    darkModeToggle.innerText = "🌞";
  }
});
