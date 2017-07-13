const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const server = express();

const port = process.env.PORT || 1337;
const apiRoutes = require('./routes/api.js');


server.set('views', path.join(__dirname, '../src'));
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, '../dist')));

server.use('/api', apiRoutes);

server.get('/', (req, res) => {
  res.render('index');
});

server.listen(port, () => {
  console.log('Listening on ' + port);
});