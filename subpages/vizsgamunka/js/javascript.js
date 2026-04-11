document.addEventListener("DOMContentLoaded", () => {

  // KOSÁRBA GOMBOK
  let buttons = document.querySelectorAll(".kosarba");

  buttons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // mobil + link esetén is biztonságos
      alert("Termék a kosárba került!");
    });
  });

  // KERESŐ FORM
  const form = document.getElementById("search-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Sajnáljuk, a kereső átmenetileg nem működik");
    });
  }

});