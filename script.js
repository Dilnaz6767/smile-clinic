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
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    const whatsappNumber = "77058417603";

    const message = `Здравствуйте! Хочу записаться на приём.%0A%0AИмя: ${name}%0AТелефон: ${phone}%0AУслуга: ${service}`;

    window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
    );
});