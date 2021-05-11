module.exports.getAll = (db) => {
  const query = 'SELECT * FROM socials';

  return db.queryAsync(query)
    .then((results) => {
      return results[0].map(social => ({
        network: social.network,
        url: social.url,
        icon: social.icon
      }));;
    })
};
