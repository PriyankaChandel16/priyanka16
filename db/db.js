// src/db/db.js
// src/db/db.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./flightBooking.db', (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create Users, Flights, and Bookings tables
const createTables = () => {
  const userTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL
    )
  `;

  const flightTableQuery = `
    CREATE TABLE IF NOT EXISTS flights (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      flight_number TEXT NOT NULL,
      origin TEXT NOT NULL,
      destination TEXT NOT NULL,
      departure_time TEXT NOT NULL,
      arrival_time TEXT NOT NULL,
      price REAL NOT NULL
    )
  `;

  const bookingTableQuery = `
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      flight_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      seat_count INTEGER NOT NULL,
      FOREIGN KEY (flight_id) REFERENCES flights (id),
      FOREIGN KEY (user_id) REFERENCES users (id)
    )
  `;

  db.run(userTableQuery);
  db.run(flightTableQuery);
  db.run(bookingTableQuery);
};

createTables();

module.exports = db;

