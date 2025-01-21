// Funciones para manejar eventos
function showErrorLog() {
  alert('Mostrando log de errores relacionados con duplicidad de reservas.');
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
reservationsData.forEach((reservation) => {
  const li = document.createElement('li');
  li.textContent = `Reserva ${reservation.id} - Habitacion ${reservation.room} - Estado: ${reservation.status}`;
  reservationsList.appendChild(li);
});

const paymentsList = document.getElementById('paymentsList');
paymentsData.forEach((payment) => {
  const li = document.createElement('li');
  li.textContent = `Pago ${payment.id} - Reserva ${payment.reserveId} - $${payment.amount} - Estado: ${payment.status}`;
  paymentsList.appendChild(li);
});

// Navbar
document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item) => {
    item.addEventListener('click', function () {
      navItems.forEach((el) => el.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

function toggleDropdown() {
  var dropdownContent = document.querySelector('.dropdown-content');
}


  // Alternar visibilidad
  if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
    dropdownContent.style.display = 'block';
  } else {
    dropdownContent.style.display = 'none';
  }


  function downloadReport(section) {
    // Lógica simulada para descargar un informe
    alert(`Descargando informe para la sección: ${section}`);
    // Ejemplo real (si usas un servidor backend con URL dinámica):
    // window.location.href = `/descargar-informe?seccion=${section}`;
}
