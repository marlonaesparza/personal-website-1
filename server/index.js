const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./api/utils/fetchRepos');
const socials = require('./assets/socials.js');
const passage = require('./assets/passage.js');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
});

app.get('/resources', (req, res) => {
  const resources = {};
  resources.socials = socials;
  resources.passage = passage;

  return api.fetchRepos()
    .then((repos) => {
      resources.repos = repos;
      res.status(200).send(resources);
    })
    .catch((error) => {
      console.log('ERROR /resources:', error);
    })
});

app.listen(port, () => {
  console.log(`Listening To Port: ${port}`);
});
