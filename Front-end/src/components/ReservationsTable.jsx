function ReservationsTable({ reservations, onDownload }) {
  return (
    <div className='contenedor container-fluid table-responsive mt-1' id='reservas'>
      <h2>Resumen de Reservas</h2>
      <p>A continuación se detallan las reservas recientes realizadas en el hotel.</p>
      <table>
        <thead>
          <tr>
            <th>Fecha Check In</th>
            <th>Fecha Check Out</th>
            <th>Cliente</th>
            <th>Habitación</th>
            <th>Origen</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td>{parseFecha(reservation.checkinDate)}</td>
              <td>{parseFecha(reservation.checkoutDate)}</td>
              <td>{reservation.client.name}</td>
              <td>{reservation.cabin.number}</td>
              <td>{reservation.source}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {onDownload && (
        <button id='bi' onClick={onDownload}>
          Descargar Informe
        </button>
      )}
    </div>
  );
}

function parseFecha(fechaStr) {
  const fecha = new Date(fechaStr);
  return fecha.toISOString().split('T')[0]; // "YYYY-MM-DD"
}

export default ReservationsTable;
