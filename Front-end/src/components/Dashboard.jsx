import Card from './Card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import '../assets/styles.css';

const data = [
  { name: 'Ene', ventas: 4000 },
  { name: 'Feb', ventas: 3000 },
  { name: 'Mar', ventas: 2000 },
  { name: 'Abr', ventas: 2780 },
  { name: 'May', ventas: 1890 },
];

function Dashboard() {
  return (
    <div className='contenedor container-fluid table-responsive mt-1'>
      <div style={styles.dashboard}>
        <h1>Mi Dashboard</h1>
        <div style={styles.metrics}>
          <Card title='Ventas Totales' value='$15,000' icon='💰' />
          <Card title='Usuarios Activos' value='1,200' icon='👥' />
          <Card title='Órdenes Nuevas' value='45' icon='📦' />
        </div>
        <div style={styles.chart}>
          <h2>Ventas Mensuales</h2>
          <BarChart width={500} height={300} data={data}>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='ventas' fill='#8884d8' />
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
