function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("mobile-menu");
}


// Форма записи
const form = document.querySelector(".booking-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    const whatsappNumber = "77058417603";

    const message =
        `Здравствуйте! Хочу записаться на приём.\n\n` +
        `Имя: ${name}\n` +
        `Телефон: ${phone}\n` +
        `Услуга: ${service}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappURL;

    form.reset();
});


// Анимация появления блоков
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