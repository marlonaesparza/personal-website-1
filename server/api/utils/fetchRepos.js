const axios = require('axios');
const { reposUrl, token } = require('../config');

module.exports.fetchRepos = () => {
  const options = {
    url: reposUrl,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${token}`
    }
  };

  return axios(options)
    .then(({data}) => {
      return data.map((repo) => ({
        title: repo.name,
        description: repo.description,
        url: repo.html_url
      }));
    })
    .catch((error) => {
      console.log('ERROR, utils/fetchRepo.js:', error);
    });
};
