const express = require("express");
const router = require("./routes/payment");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const paymentController = require("./controllers/Payment.controller");

const app = express();
const PORT = process.env.PORT || 3000;

// Archivos estaticos
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Motor de plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.use(router);

// Servidor
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));