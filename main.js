// src/main.js
// src/main.js// src/main.js
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors;
const authController = require('./controllers/authController');
const flightController = require('./controllers/flightController');
const bookingController = require('./controllers/bookingController');

const app = express();
const port = 8000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());  // Enable all CORS requests

// Authentication routes
app.post('/auth/signup', authController.signUp);
app.post('/auth/login', authController.login);

// Flight routes
app.get('/flights', flightController.getAllFlights); // View all flights
app.post('/flights', flightController.addFlight);   // Add a new flight
app.get('/flights/:id', flightController.getFlightById);  // View flight details by ID

// Booking routes
app.get('/bookings', bookingController.getBookings); // View all bookings
app.post('/bookings', bookingController.createBooking);  // Create a new booking

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
