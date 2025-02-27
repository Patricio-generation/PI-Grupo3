function HistoricalpaymentsTable({ historicalPayments = [], onDownload }) {
  return (
    <div
      className='contenedor container-fluid table-responsive mt-1'
      id='pagos-historicos'
    >
      <h2>Pagos históricos</h2>
      <p>A continuación se detallan los pagos históricos realizados en el hotel.</p>
      <table>
        <thead>
          <tr>
            <th>iD pago</th>
            <th>Fecha</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {historicalPayments.map((historicalPayment) => (
            <tr key={historicalPayment._id}>
              <td>{historicalPayment.originalPayment._id}</td>
              <td>{parseFecha(historicalPayment.transferDate)}</td>
              <td>
                <pre>{JSON.stringify(historicalPayment.data, null, 2)}</pre>
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

export default HistoricalpaymentsTable;
