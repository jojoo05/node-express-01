const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 3000;

const axios = require('axios');
const pokeapi = 'https://pokeapi.co/api/v2/';

server.listen(port, () => {
  console.log('Webserver läuft. Port: %d', port);
});

app.get('/', (req, res) => {
  //console.log(req);
  // res.send('Hällo ägän');
  axios
    .get(pokeapi + 'pokemon/ditto')
    .then((reponse) => {
      res.send(
        '<img src="' +
          reponse.data.sprites.other['official-artwork'].front_default +
          '">'
      );
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});
