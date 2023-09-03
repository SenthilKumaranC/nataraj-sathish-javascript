export function CurrentSongSlice(rootElement) {

  let data = {
    audioMode: "pause",
    currentSongId: "",
    previousSongId: "",
    currentProgressPercent: 0,
  };

  //public methods
  const methods = {
    playSong: () => {
      data.audioMode = "play";
      const audioModeEvent = new CustomEvent("AudioModeEvent", {
        detail: {
          audioMode: data.audioMode,
        },
      });
      this?.dispatchEvent(audioModeEvent);
      console.log("event dispatched");
    },
    pauseSong: () => {
      audioMode = "pause";
    },
  };

  return { methods, data }; //songs1 == songs0
}
