const colorForm = document.getElementById("colorForm");
const header = document.getElementById("header");

colorForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const colorInput = document.getElementById("colorInput");
  const color = colorInput.value;

  header.style.color = color;

  colorInput.value = "";
});