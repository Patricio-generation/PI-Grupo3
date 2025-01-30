import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const routes = [
  { path: '/', icon: 'fa-home', text: 'Inicio' },
  { path: '/reservas', icon: 'fa-calendar-check', text: 'Reservas' },
  { path: '/informe', icon: 'fa-file-invoice', text: 'Informe' },
  { path: '/stock', icon: 'fa-warehouse', text: 'Stock' },
  { path: '/pagos', icon: 'fa-dollar-sign', text: 'Pagos' },
];

function NavBar() {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <>
      <nav className='navbar navbar-expand-lg'>
        <img className='img-logo' src={logo} alt='Logo de Chelenko Lodge' />
        <ul className='ms-auto'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarNav'>
            {routes.map(({ path, icon, text }) => (
              <Link key={path} className={`nav-item ${isActive(path)}`} to={path}>
                <i className={`fas ${icon}`}></i>
                <span>{text}</span>
              </Link>
            ))}
          </div>
        </ul>
      </nav>

      <div className='search-container'>
        <input type='text' className='search-bar' placeholder='Buscar...' />
        <a to='/'>
          <i className='fas fa-cog settings-icon'></i>
        </a>
      </div>
    </>
  );
}

export default NavBar;
