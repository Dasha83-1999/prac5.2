window.onload = function() {
  // Отримання посилань на кнопки
  var buttonG = document.getElementById("G");
  var buttonGr = document.getElementById("Gr");
  var buttonC = document.getElementById("C");
  var buttonCI = document.getElementById("CI");
  var buttonSH = document.getElementById("SH");

  // Додавання обробників подій для кожної кнопки
  buttonG.addEventListener("click", function() {
    alert("Українська пісня — це бездонна душа українського\n" +
        "народу, це його слава");
  });

  buttonGr.addEventListener("click", function() {
    alert("Я єсть народ, якого Правди сила ніким звойована ще не\n" +
        "була.");
  });

  buttonC.addEventListener("click", function() {
    alert("Немає магії сильнішої, ніж магія слів.");
  });

  buttonCI.addEventListener("click", function() {
    alert("Споконвіку було Слово.");
  });

  buttonSH.addEventListener("click", function() {
    alert("Коли щось умієте, того не забувайте, а чого не вмієте — то\n" +
        "того учітесь...");
  });
};
