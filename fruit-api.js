const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Mock fruit data for simplicity
const fruits = [
  { id: 1, name: 'Apple', color: 'Red' },
  { id: 2, name: 'Banana', color: 'Yellow' },
  { id: 3, name: 'Orange', color: 'Orange' },
  { id: 4, name: 'Grape', color: 'Purple' },
  { id: 5, name: 'Watermelon', color: 'Green' },
  { id: 6, name: 'Blue Berry', color: 'Blue'}
];

// API endpoint to get sorted fruit list by color
app.get('/fruits', (req, res) => {
  const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));
  res.json(sortedFruits);
});

// Serve the HTML file for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'template', 'fruits.html'));
});

// Serve the HTML file
app.use(express.static(path.join(__dirname, 'template')));

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
