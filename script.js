
  // Funciones para manejar eventos
  function showErrorLog() {
    alert("Mostrando log de errores relacionados con duplicidad de reservas.");
  }

  // Puedo agregar aquí dinámicamente los datos
  // Este es un ejemplo de cómo podrías poblar el contenido de las reservas, si fuera necesario
  const reservationsData = [
    { id: 1, room: 'A', status: 'Confirmada' },
    { id: 2, room: 'B', status: 'Confirmada' },
  ];

  const paymentsData = [
    { id: 1, amount: 100, status: 'Procesado', reserveId: 1 },
    { id: 2, amount: 200, status: 'Procesado', reserveId: 2 },
  ];

  const reservationsList = document.getElementById('reservationsList');
  reservationsData.forEach(reservation => {
    const li = document.createElement('li');
    li.textContent = `Reserva ${reservation.id} - Habitacion ${reservation.room} - Estado: ${reservation.status}`;
    reservationsList.appendChild(li);
  });

  const paymentsList = document.getElementById('paymentsList');
  paymentsData.forEach(payment => {
    const li = document.createElement('li');
    li.textContent = `Pago ${payment.id} - Reserva ${payment.reserveId} - $${payment.amount} - Estado: ${payment.status}`;
    paymentsList.appendChild(li);
  });
// Navbar
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", function() {
          document.querySelectorAll(".nav-item").forEach(item => {
              item.classList.remove("active");
          });
          this.parentElement.classList.add("active");
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach(link => {
      link.addEventListener("click", function() {
          // Eliminar la clase "active" de todos
          navLinks.forEach(item => item.classList.remove("active"));

          // Agregar la clase "active" al seleccionado
          this.classList.add("active");
      });
  });
});
function toggleDropdown() {
  var dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}
