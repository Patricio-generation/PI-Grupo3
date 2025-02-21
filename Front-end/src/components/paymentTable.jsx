import React from 'react';

function PaymentTable({ payments, onDownload }) {
  return (
    <div className='contenedor container-fluid table-responsive mt-1' id='pagos'>
      <h2>Historial de Pagos</h2>
      <p>A continuación se detallan los pagos realizados por los clientes.</p>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Monto</th>
            <th>Método</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>{parseFecha(payment.date)}</td>
              <td>{payment.client}</td>
              <td>${payment.amount.toFixed(2)}</td>
              <td>{payment.method}</td>
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
  return fecha.toISOString().split('T')[0]; // Formato "YYYY-MM-DD"
}

export default PaymentTable;