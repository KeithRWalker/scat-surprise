import Axios from 'axios';

import firebaseConfig from '../apiKeys.json';

const firebaseURL = firebaseConfig.firebaseKeys.databaseURL;

const getScats = uid => new Promise((resolve, reject) => {
  Axios.get(`${firebaseURL}/scats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const scatsAr = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((scatKey) => {
          res.data[scatKey].id = scatKey;
          console.error(scatKey[res.data]);
          scatsAr.push(res.data[scatKey]);
        });
      }
      resolve(scatsAr);
    })
    .catch((err => reject(err)));
})

export default { getScats };
