const nav = document.getElementById("menu");
const btn = document.getElementById("menu-btn");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of all elements with the class "currentYear"
const currentYearElements = document.querySelectorAll(".currentYear");
currentYearElements.forEach((element) => {
  element.textContent = currentYear;
});
