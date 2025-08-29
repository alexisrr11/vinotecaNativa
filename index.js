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

//Menu
const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

//Zoom img
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("closeModal");

// Seleccionar todas las imágenes de la galería
document.querySelectorAll(".grid img").forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modalImg.src = img.src; // usa el src de la imagen clickeada
    });
});

// Cerrar modal
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Cerrar si se hace click fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

//Detalles Packs Ahorro
const btnN1 = document.getElementById("botonMalbecX6");
const btnN2 = document.getElementById("botonBlancos");
const btnN3 = document.getElementById("botonEspumantes");
const detaN1 = document.getElementById("detaMalbecX6");
const detaN2 = document.getElementById("detaBlancos");
const detaN3 = document.getElementById("detaEspumantes");

function botonesDetalles(boton, detalle) {
    boton.addEventListener("click", () => {
        detalle.classList.toggle("hidden");
        const oculto = detalle.classList.contains("hidden");
        boton.textContent = oculto ? "Ver detalles" : "Ver menos";
        // accesibilidad útil
        boton.setAttribute("aria-expanded", String(!oculto));
    });
}

botonesDetalles(btnN1, detaN1);
botonesDetalles(btnN2, detaN2);
botonesDetalles(btnN3, detaN3);
