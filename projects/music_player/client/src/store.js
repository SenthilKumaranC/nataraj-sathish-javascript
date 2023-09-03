import { fetchSongs } from "./services/songs.service.js";
export function musicPlayerStore(id) {
  let data = {
    id: id,
    songs: [],
    audioMode: "pause",
    currentSongId: "",
    previousSongId: "",
    currentProgressPercent: 0,
  };

  //public methods
  const methods = {
    createSongs: async () => {
      data.songs = await fetchSongs(); //song2 ,
    },
    updateSong: () => {},
    playSong: () => {
      data.audioMode = "play";
      const audioModeEvent = new CustomEvent("AudioModeEvent"+id, {
        detail: {
          audioMode : data.audioMode
        },
      });
      document.dispatchEvent(audioModeEvent)
    },
    pauseSong: () => {
      audioMode = "pause";
    },
  };

  return { methods, data }; //songs1 == songs0
}
