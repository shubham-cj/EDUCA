// Change navbar style on scroll

window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
});

// Show/hide FAQs answers

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        // change Icon
        const icon = faq.querySelector(".faq__icon i");
        if (icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    });
});

// Show/Hide Nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#openMenuBtn");
const closeBtn = document.querySelector("#closeMenuBtn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
})
closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
})
// window.onscroll = () => {
//     menu.style.display = "none";
//     menuBtn.style.display = "block";
//     closeBtn.style.display = "none";
// }
