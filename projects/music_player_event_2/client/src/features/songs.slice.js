import { fetchSongs } from "../services/songs.service.js";
export function SongsSlice(rootElement) {
  let store;
  let data = {
    songs: [],
  };

  let updateStoreVariables = (_store) => {
    store = _store;
  };

  //public methods
  const methods = {
    findCurrentSongData: (id) => {
      const currentSongData =  data.songs.find((song) => {
        return song.id === id;
      });
      store.currentSongSlice.methods.saveCurrentSongData(currentSongData)
    },
    createSongs: async () => {
      data.songs = await fetchSongs(); //song2 ,
    },
  };

  return { methods, data ,updateStoreVariables}; //songs1 == songs0
}
