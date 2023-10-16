document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("in");
  const ubahButton = document.getElementById("bt");

  ubahButton.addEventListener("click", function () {
    const inputValue = inputText.value;
    const elements = document.querySelectorAll(".container h2, ul, input, button");

    elements.forEach((element) => {
      element.style.backgroundColor = getRandomColor();
      element.style.color = getRandomColor();
      element.textContent = inputValue;
      element.style.fontFamily = getRandomFontFamily();
      element.style.fontSize = getRandomFontSize() + "px";
    });
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomFontFamily() {
    const fonts = ["Arial", "Helvetica", "Verdana", "Georgia", "Times New Roman"];
    return fonts[Math.floor(Math.random() * fonts.length)];
  }

  function getRandomFontSize() {
    return Math.floor(Math.random() * 20) + 12;
  }
});
