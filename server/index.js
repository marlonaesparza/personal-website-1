const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./database/connect');
const socialsTable = require('./database/utils/socialsTable');
const api = require('./api/utils/fetchRepos');

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

  return socialsTable.getAll(db)
    .then((socials) => {
      resources.socials = socials;
      return api.fetchRepos();
    })
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
