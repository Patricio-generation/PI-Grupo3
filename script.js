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

document.addEventListener('DOMContentLoaded', function () {
  // Poblar datos dinámicamente
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
   const navItems = document.querySelectorAll('.nav-item');
   navItems.forEach((item) => {
    item.addEventListener('click', function () {
      navItems.forEach((el) => el.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Configurar botones de descarga
  const sincronizacionButton = document.querySelector('#sincronizacion button');
  if (sincronizacionButton) {
    sincronizacionButton.addEventListener('click', () => {
      downloadReport('sincronizacion');
    });
  }

  const reservasButton = document.querySelector('#reservas button');
  if (reservasButton) {
    reservasButton.addEventListener('click', () => {
      downloadReport('reservas');
    });
  }
});

function toggleDropdown() {
 var dropdownContent = document.querySelector('.dropdown-content');

  // Alternar visibilidad
  if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
    dropdownContent.style.display = 'block';
  } else {
    dropdownContent.style.display = 'none';
  }
}

function downloadReport(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    console.error(`No se encontró la sección con ID: ${sectionId}`);
    return;
  }

  let data = '';
  const rows = section.querySelectorAll('table tbody tr');

  if (rows.length === 0) {
    alert('No hay datos disponibles para descargar.');
    return;
  }

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    const rowData = Array.from(cells).map(cell => cell.innerText).join(',');
    data += rowData + '\n';
  });

  const blob = new Blob([data], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${sectionId}_informe.csv`;
  link.click();
}
