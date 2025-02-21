const StockTable = ({ cabinsData, downloadReport }) => {
  return (
    <div className='contenedor container-fluid table-responsive mt-1' id='stock'>
      <h2>Gestión de Stock</h2>
      <p>A continuación se detallan las cabañas registradas en el sistema.</p>
      <table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Estado</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {cabinsData.map((cabin) => (
            <tr key={cabin._id}>
              <td>{cabin.number}</td>
              <td>{cabin.status}</td>
              <td>{parseCabinPrice(cabin)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button id='bi' onClick={() => downloadReport('stock')}>
        Descargar Informe
      </button>
    </div>
  );
};

const parseCabinPrice = (cabin) => {
  const priceNumber = parseFloat(cabin.price);
  const currency = cabin.currency || 'CLP';
  return `$${priceNumber} ${currency}`;
};

export default StockTable;
