export default function plusAnimation() {
  addEventListener("load", () => {
    const plus = document.querySelectorAll("[data-plus]");
    const dataPara = document.querySelectorAll("[data-para]");
    const plusItemGlobal = Array.from(plus).map((item) => {
      return item;
    });
    let i = 0;

    console.log(plusItemGlobal[0]);

    //Função de click e ativação do minus

    plus.forEach((plusItem) => {
      plusItem.addEventListener("click", () => {
        if (
          plusItem.getAttribute("src") ===
          "/faq-accordion-main/assets/images/icon-plus.svg"
        ) {
          plusItem.setAttribute(
            "src",
            "/faq-accordion-main/assets/images/icon-minus.svg"
          );
        } else {
          plusItem.setAttribute(
            "src",
            "/faq-accordion-main/assets/images/icon-plus.svg"
          );
        }
      });
    });
    dataPara.forEach((itemPara) => {
      itemPara.addEventListener("click", () => {
        if (
          plusItemGlobal[i].getAttribute("src") ===
          "/faq-accordion-main/assets/images/icon-plus.svg"
        ) {
          plusItemGlobal[i].setAttribute(
            "src",
            "/faq-accordion-main/assets/images/icon-minus.svg"
          );
        } else {
          plusItemGlobal[i].setAttribute(
            "src",
            "/faq-accordion-main/assets/images/icon-plus.svg"
          );
        }
      });
    });
  });
}
