import React from 'react';
import { app_key } from '../keys'


const remoteURL = "http://localhost:8088"

// const APIurl = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk"
// const options = new request(`${APIurl}`, {
//   method: 'GET',
//   headers: {
//     'cache-control': 'no-cache',
//     "X-RapidAPI-Host": `${app_key[1].app_header}`,
//       "X-RapidAPI-Key": `${app_key[1].app_key}`
//   },
// })


export default {
  get(database, id) {
    return fetch(`${remoteURL}/${database}/${id}`).then(data => data.json())
  },
  getAll(database, queryParams) {
    // return fetch(`${remoteURL}/${database}`)
    let url = `${remoteURL}/${database}`
    if (queryParams) {
      url += `?${queryParams}`
    }
    return fetch(url)
    .then( data => data.json() )
  },
  omdbData(search) {
    return fetch(`http://www.omdbapi.com/?t=${search}&apikey=${app_key[0].app_key}&r=json&plot=short`)
      .then(data => data.json())
  },
  utellyData() {
    return (
      // fetch(`${options}`)
    //     .then(data => data.json())
    //     .then(data => console.log(data))
    //     .catch(e => console.error(e))
    // )
    // let unirest = require('unirest');
    // unirest.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk")
    //   .header("X-RapidAPI-Host", "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com")
    //   .header("X-RapidAPI-Key", "0bf6b5bb97msh382482ce5f67d63p17bed5jsn7307a57cc1ac")
    //   .end(function (search) {
    //     console.log(search.status, search.headers, search.body);
    // }
    ""
    );
  },

  delete(database, id) {
    return fetch(`${remoteURL}/${database}/${id}`, {
      method: "DELETE"
    })
      .then(data => data.json())
      .then(() => fetch(`${remoteURL}/${database}`))
      .then(data => data.json())
  },
  post(database, newData) {
    return fetch(`${remoteURL}/${database}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(newData)
    }).then(data => data.json())
  },
  put(database, editedItem) {
    return fetch(`${remoteURL}/${database}/${editedItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedItem)
    }).then(data => data.json());
  },
  patch(database, id, boolean) {
    return fetch(`${remoteURL}/${database}/${id}`, {
      method: "Patch",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(boolean)
    }).then(data => data.json());
  },

}