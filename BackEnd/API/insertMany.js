// import { artistArray } from "../../FrontEnd/src/assets/database/artists.js";
import { songsArray } from "../../FrontEnd/src/assets/database/songs.js";
import { db } from "./connect.js";

// const newArtistArray = artistArray.map((currentArtistObj) => {
//   const newArtisObj = {...currentArtistObj};
//   delete newArtisObj.id;
//   return newArtisObj;
// })

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = {...currentSongObj};
  delete newSongObj.id;
  return newSongObj;
});

// await db.collection("artists").insertMany(newArtistArray);
await db.collection("songs").insertMany(newSongsArray);
