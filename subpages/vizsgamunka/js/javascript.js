let buttons = document.querySelectorAll(".kosarba");
            buttons.forEach(button => {
                button.addEventListener("click", function(){
                    alert("Termék a kosárba került!");
                });
            });


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Sajnáljuk, a kereső átmenetileg nem működik");
  });
});