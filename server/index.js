const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const server = express();
const port = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(express.static(path.join(__dirname, '../client/dist')));

// Search bar queries
server.post('/api/searchbar/', (req, res) => {
  axios
    .post('http://18.222.13.152:3100/api/searchbar', req.body)
<<<<<<< HEAD
    .then(({ data }) => res.status(200).send(data).end() )
    .catch((err) => res.status(400).send(err).end() );
=======
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
>>>>>>> c2b0026667b0ce9b2d1fdbb11a774909a69d9b7e
});

// Search bar history retrieval
server.get('/api/searchbar/history', (req, res) => {
  axios
    .get('http://18.222.13.152:3100/api/searchbar/history')
<<<<<<< HEAD
    .then(({ data }) => res.status(200).send(data).end() )
    .catch((err) => res.status(400).send(err).end() );
=======
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
>>>>>>> c2b0026667b0ce9b2d1fdbb11a774909a69d9b7e
});

// Search bar history insertion
server.post('/api/searchbar/history', (req, res) => {
  axios
    .post('http://18.222.13.152:3100/api/searchbar/history', req.body)
<<<<<<< HEAD
    .then(({ data }) => res.status(200).send(data).end() )
    .catch((err) => res.status(400).send(err).end() );
=======
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
>>>>>>> c2b0026667b0ce9b2d1fdbb11a774909a69d9b7e
});

// Search bar history clearing
server.delete('/api/searchbar/history', (req, res) => {
  axios
    .delete('http://18.222.13.152:3100/api/searchbar/history')
<<<<<<< HEAD
    .then(({ data }) => res.status(200).send(data).end() )
    .catch((err) => res.status(400).send(err).end() );
=======
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
>>>>>>> c2b0026667b0ce9b2d1fdbb11a774909a69d9b7e
});

// Category items retrieval
server.post('/api/navbar/', (req, res) => {
  axios
    .post('http://18.222.13.152:3100/api/navbar/', req.body)
<<<<<<< HEAD
    .then(({ data }) => res.status(200).send(data).end() )
    .catch((err) => res.status(400).send(err).end() );
=======
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
>>>>>>> c2b0026667b0ce9b2d1fdbb11a774909a69d9b7e
});

// Login authentication
server.post('/api/login/', (req, res) => {
  axios
    .post('http://18.222.13.152:3100/api/login/', req.body)
<<<<<<< HEAD
    .then(({ data }) => res.status(200).send(data).end() )
    .catch((err) => res.status(400).send(err).end() );
=======
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
>>>>>>> c2b0026667b0ce9b2d1fdbb11a774909a69d9b7e
});

// Cart items retrieval
server.post('/api/cart/', (req, res) => {
  axios
    .post('http://18.222.13.152:3100/api/cart/', req.body)
<<<<<<< HEAD
    .then(({ data }) => res.status(200).send(data).end() )
    .catch((err) => res.status(400).send(err).end() );
=======
    .then(({ data }) => res.status(200).send(data).end())
    .catch((err) => res.status(400).send(err).end());
>>>>>>> c2b0026667b0ce9b2d1fdbb11a774909a69d9b7e
});

// Body item retrieval
server.get('/item/:id', (req, res) => {
  axios
    .get(`http://localhost:3002/item/${req.params.id}`)
    .then(({ data }) => res.status(200).send(data).end() )
    .catch((err) => console.error(err));
});

// Prevent random requests
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) res.status(400).send(err).end(); });
});


server.listen(port, () => console.log('Server initialized on port:', port));
