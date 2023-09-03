export function CurrentSong(store) {

      store.currentSongSlice?.addEventListener("AudioModeEvent",(event)=>{
        console.log("Inside Current Song")
          console.log(event)
      })
  
}