//
//
//
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

/* <img src="./imgs/sertsa-red.webp" alt=""> */

const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  //   speed: 500,
  allowTouchMove: true,
  autoplay: {
    // delay: 500,
  },

  //   If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-nextt",
    prevEl: ".button-prevv",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
let sertsa = document.querySelectorAll(".sertsa");

sertsa.forEach((element) => {
  element.addEventListener("click", () => {
    element.innerHTML = `<img class="sertsa" src="./imgs/sertsa-red.webp" alt="sertsa">`;
    console.log("salom");
    element.style.backgroundColor = "red";
    element.addEventListener("click", () => {
      element.style.backgroundColor = "transparent";
    });
  }); //TUGALLANMAGAN !!!
});
