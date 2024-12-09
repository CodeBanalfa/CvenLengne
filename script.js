//turne page when next or prev button
const pageTurnBtn = document.querySelectorAll(".nexrprev-btn");
console.log(pageTurnBtn);
pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute("data-page");
    const pageTurn = document.getElementById(pageTurnId);
    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});
//contact me button click
const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector(".btn.conact-me");
contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add("turn");
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};
//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;
function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}
//back profile button when click
const backProfilBtn = document.querySelector(".back-porfile");
backProfilBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove("turn");
      let currentPageNumber = pageNumber;
      setTimeout(() => {
        pages[currentPageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

//apening animation
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");
//apening animation (cover right animation )
setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);
setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);
//apening animation (page left or profille animation )
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200);
//apening animation (all right animation )
pages.forEach((_, index) => {
  setTimeout(() => {
    console.log("remove", pageNumber);
    reverseIndex();
    pages[pageNumber].classList.remove("turn");
    let currentPageNumber = pageNumber;
    setTimeout(() => {
      console.log("index", pageNumber, currentPageNumber);
      pages[currentPageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});

document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll("#turn-3 .services-content");
    
    services.forEach(service => {
      const imageName = service.getAttribute("data-image"); // Récupère le nom de l'image
      service.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('./photo/${imageName}')`; // Applique l'image en background
    });
  });
  
