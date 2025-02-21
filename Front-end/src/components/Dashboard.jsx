import Card from './Card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import '../assets/styles.css';
import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext.jsx';

function Dashboard() {
  const { payments, users, reservations } = useContext(ApiContext);

  // Calcular el total de pagos
  const totalPayments = payments.reduce((total, payment) => total + payment.amount, 0);

  // Crear datos para la gráfica de pagos mensuales
  const monthlyPayments = payments.reduce((acc, payment) => {
    const month = new Date(payment.date).toLocaleString('default', { month: 'short' });
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += payment.amount;
    return acc;
  }, {});

  // Convertir los datos a un formato que recharts pueda usar
  const data = Object.keys(monthlyPayments).map((month) => ({
    name: month,
    pagos: monthlyPayments[month],
  }));

  return (
    <div className='contenedor container-fluid table-responsive mt-1'>
      <div style={styles.dashboard}>
        <h1>Mi Dashboard</h1>
        <div style={styles.metrics}>
          <Card title='Pagos Totales' value={`$${totalPayments.toFixed(2)}`} icon='💰' />
          <Card title='Usuarios Activos' value={users.length} icon='👥' />
          <Card title='Total reservas' value={reservations.length} icon='📦' />
        </div>
        <div style={styles.chart}>
          <h2>Pagos Mensuales</h2>
          <BarChart width={500} height={300} data={data}>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='pagos' fill='#8884d8' />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

const styles = {
  dashboard: {
    padding: '20px',
  },
  metrics: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  chart: {
    marginTop: '20px',
  },
};

export default Dashboard;