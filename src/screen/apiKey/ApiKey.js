import React from 'react';

const GetApiAlquran = () => {
  const apiAsli = 'https://api.quran.gading.dev/surah';
  return fetch(apiAsli)
    .then(response => response.json())
    .then(json => {
      setData(json.data);
    })
    .catch(error => {
      console.error(error);
    });
};

export default GetApiAlquran;
