const express = require("express");
const router = express.Router();
const { index, createPayment } = require("../controllers/Payment.controller");

// Página inicial
router.get('/', index);

// Crear pago
router.post('/createCustomer', createPayment);

module.exports = router;