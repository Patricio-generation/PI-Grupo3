const router = express.Router();


// Rutas para reservas de tinajas
router.post("/", createTinajaBooking); // Crear reserva de tinaja
router.get("/", getTinajaBookings); // Obtener reservas de tinaja
router.put("/:id", updateTinajaBooking); // Actualizar una reserva de tinaja



export default router;