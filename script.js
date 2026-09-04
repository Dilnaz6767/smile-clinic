const form = document.querySelector(".booking-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.");

    form.reset();
});
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("mobile-menu");
}
const elements = document.querySelectorAll(
    ".services, .about, .doctors, .pricing, .reviews, .contact, .footer"
);

elements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(element => observer.observe(element));