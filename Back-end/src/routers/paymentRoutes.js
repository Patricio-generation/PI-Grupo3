const express = require('express');
const { createPayment, getPayments, updatePayment, deletePayment } = require('../controllers/paymentController.js');

const router = express.Router();

router.post('/create', createPayment);
router.get('/get', getPayments);
router.put('/update/:id', updatePayment);
router.delete('/delete/:id', deletePayment);

module.exports = router;
