export default function plusAnimation() {
  addEventListener("load", () => {
    const plus = document.querySelectorAll("[data-plus]");
    const questions = document.querySelectorAll("[data-questions]");
    const dataPara = document.querySelectorAll("[data-para]");
    dataPara.forEach(function (itemPara) {
      itemPara.addEventListener("click", function () {
        const checked = this.nextElementSibling;
        if (
          checked.getAttribute("src") ===
          "/faq-accordion-main/assets/images/icon-minus.svg"
        ) {
        }
      });
    });

    //Função de click e ativação do minus
    plus.forEach(function (plusItem) {
      plusItem.addEventListener("click", () => {
        if (
          plusItem.getAttribute("src") ===
          "/faq-accordion-main/assets/images/icon-plus.svg"
        ) {
          plusItem.setAttribute(
            "src",
            "/faq-accordion-main/assets/images/icon-minus.svg"
          );
          plusItem.nextElementSibling.style.display = "inline-block";
        } else {
          plusItem.setAttribute(
            "src",
            "/faq-accordion-main/assets/images/icon-plus.svg"
          );
          plusItem.nextElementSibling.style.display = "none";
        }
      });
    });
  });
}
