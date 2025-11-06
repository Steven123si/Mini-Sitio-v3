const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// menuToggle.addEventListener('click', () => {
//   menu.classList.toggle('show');
// });

const form = document.getElementById('form-suscripcion');
const emailInput = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const correo = emailInput.value.trim();

  if (correo === "") {
    mensaje.textContent = "Por favor, ingresa tu correo electrónico.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Gracias por suscribirte 🎉";
    mensaje.style.color = "green";
    form.reset();
  }
});
