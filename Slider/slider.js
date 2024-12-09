// class Slider {
//   constructor(containerClass, images = []) {
//     this.images = images;
//     this.slider_show = document.querySelector(containerClass + " img");
//     //    this.images[0]="./images/moi.jpg";
//     //    this.images[1]="./images/rout.jpg";
//     //    this.images[2]="./images/seul.jpg";

//     this.counter = 0;

//     const btnLeft = document.createElement("span");
//     btnLeft.textContent = "<";
//     const btnRight = document.createElement("span");
//     btnRight.textContent = ">";
//     document.querySelector(containerClass)?.append(btnLeft, btnRight);

//     btnLeft.addEventListener("click", this.playSliderReverse.bind(this));
//     btnRight.addEventListener("click", this.playSlider.bind(this));

//     this.playSlider();
//     //    setInterval(()=>{
//     //     this.playSlider();
//     //    },3000);
//   }
//   playSlider() {
//     if (this.counter < this.images.length - 1) {
//       this.counter++;
//     } else {
//       this.counter = 0;
//     }
//     console.log(this.images[this.counter], this.slider_show);
//     this.slider_show.src = this.images[this.counter];
//   }
//   playSliderReverse() {
//     if (this.counter > 0) {
//       this.counter--;
//     } else {
//       this.counter = this.images.length - 1;
//     }
//     this.slider_show.src = this.images[this.counter];
//   }
// }
// new Slider(".slider-container", [
//   "./images/moi.jpg",
//   "./images/rout.jpg",
//   "./images/seul.jpg",
// ]);
// new Slider(".slider2", ["./images/moi.jpg", "./images/rout.jpg"]);
// Définition de la classe SuperDiv

// Classe Slider
class Slider extends HTMLElement {
  constructor() {
    super();
    const imageString = this.getAttribute("images") ?? "";
    this.images = imageString.split(",");
    this.slider_show = document.createElement("img");
    this.append(this.slider_show);
    this.classList.add("slider-container");
    this.counter = 0;

    const btnLeft = document.createElement("span");
    btnLeft.textContent = "<";
    const btnRight = document.createElement("span");
    btnRight.textContent = ">";
    this.append(btnLeft, btnRight);

    btnLeft.addEventListener("click", this.playSliderReverse.bind(this));
    btnRight.addEventListener("click", this.playSlider.bind(this));

    this.playSlider();
  }

  playSlider() {
    if (this.counter < this.images.length - 1) {
      this.counter++;
    } else {
      this.counter = 0;
    }
    this.slider_show.src = this.images[this.counter];
  }

  playSliderReverse() {
    if (this.counter > 0) {
      this.counter--;
    } else {
      this.counter = this.images.length - 1;
    }
    this.slider_show.src = this.images[this.counter];
  }
}

// Création d'une instance de Slider
// new Slider(".slider-container", [
//   "./images/moi.jpg",
//   "./images/rout.jpg",
//   "./images/seul.jpg",
// ]);

customElements.define("slider-ban", Slider);
