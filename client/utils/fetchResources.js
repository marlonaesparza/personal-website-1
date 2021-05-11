import axios from 'axios';

const fetchResources = () => {
  return axios.get('/resources')
    .then(({data}) => {
      return data;
    });
};

export default fetchResources;
