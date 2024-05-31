export default function plusAnimation() {
  addEventListener("load", () => {
    const plus = document.querySelectorAll("[data-plus]");

    //Função de click e ativação do minus
    plus.forEach(function (plusItem) {
      plusItem.addEventListener("click", () => {
        if (plusItem.getAttribute("src") === "images/icon-plus.svg") {
          plusItem.setAttribute("src", "images/icon-minus.svg");
          plusItem.nextElementSibling.style.display = "flex";
        } else {
          plusItem.setAttribute("src", "images/icon-plus.svg");
          plusItem.nextElementSibling.style.display = "none";
        }
      });
    });
  });
}
