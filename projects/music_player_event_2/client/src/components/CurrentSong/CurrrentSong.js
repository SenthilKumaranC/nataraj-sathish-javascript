export function CurrentSong(musicPlayer, store) {
  const audio = musicPlayer.querySelector("#audio");

  store.rootElement?.addEventListener("AudioModeEvent", (event) => {
    console.log("Inside Current Song");
    console.log(event.detail.audioMode);
    if(event.detail.audioMode === "play"){
      audio.src = ?
      audio.play()
    }else{
      audio.pause()
    }
  });

  const render = () => {};
}
