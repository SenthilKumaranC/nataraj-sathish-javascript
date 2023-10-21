export function CurrentSongSlice(rootElement) {
  let store;

  let data = {
    audioMode: "pause",
    currentSongId: "",
    previousSongId: "",
    currentProgressPercent: 0,
    currentSongData: null
  };

  let updateStoreVariables = (_store) => {
     store = _store
  }
  
  const saveCurrentSongData= (currengSongData) => {
    data.currentSongData = currengSongData;
    
  }
  //public methods
  const methods = {

    saveCurrentSongData ,
  
   //inside CurrentSongSlice
    getCurrentSongData: (id) => {
      const songs = store.songsSlice.data.songs;
      const currentSongData =  songs.find((song) => {
        return song.id === id;
      });
      saveCurrentSongData(currentSongData)

    },
    
    playSong: () => {
      data.audioMode = "play";
      const audioModeEvent = new CustomEvent("AudioModeEvent", {
        detail: {
          audioMode: data.audioMode,
        },
      });
      rootElement?.dispatchEvent(audioModeEvent);
      console.log("play song event dispatched");
    },
    pauseSong: () => {
      data.audioMode = "pause";
    },
  };

  return { methods, data ,updateStoreVariables }; //songs1 == songs0
}
