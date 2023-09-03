import { fetchSongs } from "../services/songs.service.js";
export function SongsSlice(rootElement) {
  let data = {
    songs: []
  };

  //public methods
  const methods = {
    createSongs: async () => {
      data.songs = await fetchSongs(); //song2 ,
    },
  };

  return { methods, data }; //songs1 == songs0
}
