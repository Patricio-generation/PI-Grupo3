function HistoricalreservationsTable({ historicalReservations = [], onDownload }) {
  return (
    <div
      className='contenedor container-fluid table-responsive mt-1'
      id='reservas-historicas'
    >
      <h2>Reservas históricas</h2>
      <p>A continuación se detallan las reservas históricas realizadas en el hotel.</p>
      <table>
        <thead>
          <tr>
            <th>iD reserva</th>
            <th>Fecha Check In</th>
            <th>Fecha Check Out</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {historicalReservations.map((historicalReservation) => (
            <tr key={historicalReservation._id}>
              <td>{historicalReservation.originalReservation._id}</td>
              <td>{parseFecha(historicalReservation.originalReservation.checkinDate)}</td>
              <td>
                {parseFecha(historicalReservation.originalReservation.checkoutDate)}
              </td>
              <td>
                <pre> {JSON.stringify(historicalReservation.data, null, 2)}</pre>
              </td>
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

export default HistoricalreservationsTable;
