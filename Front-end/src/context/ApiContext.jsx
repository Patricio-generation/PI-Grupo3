import { createContext, useState, useEffect } from 'react';
import API from '../services/Api';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [cabins, setCabins] = useState([]);
  const [clients, setClients] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [payments, setPayments] = useState([]);
  const [historicalPayments, setHistoricalPayments] = useState([]);
  const [historicalReservations, setHistoricalReservations] = useState([]);
  const [tinajaBookings, setTinajaBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [
        cabinRes,
        clientRes,
        reservationRes,
        paymentRes,
        historicalPaymentRes,
        historicalReservationRes,
        tinajaBookingRes,
        userRes,
      ] = await Promise.all([
        API.get('/cabins'),
        API.get('/clients'),
        API.get('/reservations'),
        API.get('/payments'),
        API.get('/historical-payments'),
        API.get('/historical-reservations'),
        API.get('/tinaja-bookings'),
        API.get('/users'),
      ]);

      setCabins(cabinRes.data);
      setClients(clientRes.data);
      setReservations(reservationRes.data);
      setPayments(paymentRes.data);
      setHistoricalPayments(historicalPaymentRes.data);
      setHistoricalReservations(historicalReservationRes.data);
      setTinajaBookings(tinajaBookingRes.data);
      setUsers(userRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        cabins,
        clients,
        reservations,
        payments,
        historicalPayments,
        historicalReservations,
        tinajaBookings,
        users,
        loading,
        fetchData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
