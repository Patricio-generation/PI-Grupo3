import express from 'express';
import { createPayment, getPayments, updatePayment, deletePayment } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/create', createPayment);
router.get('/get', getPayments);
router.put('/update/:id', updatePayment);
router.delete('/delete/:id', deletePayment);

export default router;