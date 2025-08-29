const form = document.getElementById("whatsappForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const promo = document.getElementById("promocion").value;
    const mensaje = document.getElementById("mensaje").value;

    // Número de WhatsApp
    const telefono = "5491137659081";

    const texto = `Hola! Soy ${nombre}, quisiera comprar la promo de (${promo}).%0A%0A${mensaje}`;
    const url = `https://wa.me/${telefono}?text=${texto}`;

    window.open(url, "_blank");
});