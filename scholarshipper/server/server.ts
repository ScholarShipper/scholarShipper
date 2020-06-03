const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'))
});

// Serve static assets:
app.use('/src/assets',
  express.static(path.resolve(__dirname, '../src/assets'))
);

app.get('/test', (req, res) => {
  console.log('request works')
  res => res.status(200).send('here are the results...')
});

app.listen(3000, () => 
  console.log(`Server ready at http://localhost:3000`)
);

module.exports = app
