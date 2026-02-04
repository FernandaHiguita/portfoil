// Mensaje de bienvenida
window.addEventListener("DOMContentLoaded", () => {
    alert("¡Bienvenida a mi portafolio!");
});


const btnChangeText = document.getElementById("btn-change-text");
const textToChange = document.getElementById("dynamic-text");

if (btnChangeText && textToChange) {
    btnChangeText.addEventListener("click", () => {
    textToChange.textContent = "Gracias por visitar mi portafolio";
    });
}

// Mostrar / ocultar contenido
const toggleBtn = document.getElementById("btn-toggle");
const toggleContent = document.getElementById("toggle-content");

if (toggleBtn && toggleContent) {
    toggleBtn.addEventListener("click", () => {
    toggleContent.classList.toggle("hidden");
    });
}
