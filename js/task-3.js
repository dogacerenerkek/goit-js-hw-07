const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const value = input.value.trim();

  if (value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = value;
  }
});
