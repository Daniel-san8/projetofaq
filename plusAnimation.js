export default function plusAnimation() {
  addEventListener("load", () => {
    const plus = document.querySelectorAll("[data-plus]");
    const paragrafos = document.querySelectorAll("[data-para]");

    paragrafos.forEach((paragrafo) => {
      paragrafo.addEventListener("click", function () {
        const img = this.nextElementSibling;
        const resposta = this.nextElementSibling.nextElementSibling;
        if (img.getAttribute("src") === "images/icon-plus.svg") {
          img.setAttribute("src", "images/icon-minus.svg");
          resposta.style.display = "flex";
          paragrafo.style.color = "#ad28eb";
        } else {
          img.setAttribute("src", "images/icon-plus.svg");
          resposta.style.display = "none";
          paragrafo.style.color = "black";
        }
      });
    });

    //Função de click e ativação do minus
    plus.forEach(function (plusItem) {
      plusItem.addEventListener("click", () => {
        if (plusItem.getAttribute("src") === "images/icon-plus.svg") {
          plusItem.setAttribute("src", "images/icon-minus.svg");
          plusItem.nextElementSibling.style.display = "flex";
          plusItem.previousElementSibling.style.color = "#ad28eb";
        } else {
          plusItem.setAttribute("src", "images/icon-plus.svg");
          plusItem.nextElementSibling.style.display = "none";
          plusItem.previousElementSibling.style.color = "black";
        }
      });
    });

    paragrafos.forEach((paragrafo) => {
      paragrafo.addEventListener("touchstart", function () {
        const img = this.nextElementSibling;
        const resposta = this.nextElementSibling.nextElementSibling;
        if (img.getAttribute("src") === "images/icon-plus.svg") {
          img.setAttribute("src", "images/icon-minus.svg");
          resposta.style.display = "flex";
          paragrafo.style.color = "#ad28eb";
        } else {
          img.setAttribute("src", "images/icon-plus.svg");
          resposta.style.display = "none";
          paragrafo.style.color = "black";
        }
      });
    });

    //Função de click e ativação do minus
    plus.forEach(function (plusItem) {
      plusItem.addEventListener("touchstart", () => {
        if (plusItem.getAttribute("src") === "images/icon-plus.svg") {
          plusItem.setAttribute("src", "images/icon-minus.svg");
          plusItem.nextElementSibling.style.display = "flex";
          plusItem.style.color = "#ad28eb";
        } else {
          plusItem.setAttribute("src", "images/icon-plus.svg");
          plusItem.nextElementSibling.style.display = "none";
          plusItem.style.color = "black";
        }
      });
    });

    paragrafos.forEach((itemPara) => {
      itemPara.addEventListener("mouseenter", () => {
        itemPara.style.color = "#ad28eb";
      });
    });

    paragrafos.forEach((itemPara) => {
      itemPara.addEventListener("mouseleave", () => {
        const resposta = itemPara.nextElementSibling.nextElementSibling;
        console.log(resposta == true);
        if (
          resposta.style.display === "none" &&
          itemPara.style.color === "#ad28eb"
        ) {
          itemPara.style.color = "#ad28eb";
        } else {
          itemPara.style.color = "black";
        }
      });
    });
  });
}
