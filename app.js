// let sertsa = document.querySelectorAll("#srts");

// sertsa.forEach((element) => {
//   element.addEventListener("click", () => {
//     element.innerHTML += `<img src="./imgs/sertsa-red.webp" alt="sertsa">`;
//     console.log("salom");
//   });
// });
let fn = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  return data;
};
let box = document.querySelector(".boxss");
// console.log(box);

let render = async () => {
  let myData = await fn();
  box.innerHTML = "";

  myData.forEach((element) => {
    box.innerHTML += `
        <div class="cardss">
          <div class="itemss">
            <img class="item-imggg" src="${element.image}" alt="${
      element.title
    }" />
            <img
              class="sertsa"
              src="./imgs/card.imgs/sertsaa.svg"
              alt="${element.title}"
            />
            <p class="aksiya">Ekskluziv</p>
          </div>
          <div class="cardss-title">
            <p>
              ${element.title}
            </p>
            <p class="df">
              <img src="./imgs/card.imgs/yellow-star.svg" alt="" />
              <span class="opasity8">${element.rating.rate}</span>
              <span class="opasity8">(4092 sharsh)</span>
            </p>
            <p class="yellow">${(element.price * 12820) / 12} so'm/oyiga</p>
            <p class="opasity8 del">${
              ((element.price * 12820) / 100) * 110
            } so'm</p>
            <p>${element.price * 12820} so'm</p>
          </div>
          <img class="korzz" src="./imgs/korzsv.svg" alt="korzinka" />
        </div>
      `;
  });
};

render();
