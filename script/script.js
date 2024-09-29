import {features} from './features.js';

await features();

/* insert custom scripts below */


    /*var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });*/

    
    // nav toggle

    let mobileMenu = document.querySelector(".menu-icon");
    let mobileContainer = document.querySelector(".nav-mobile");
    mobileMenu.addEventListener("click", () => {
        mobileContainer.classList.toggle("nav-mobile-active");
        document.querySelector("body").classList.toggle("body-mobile-modal")
    })