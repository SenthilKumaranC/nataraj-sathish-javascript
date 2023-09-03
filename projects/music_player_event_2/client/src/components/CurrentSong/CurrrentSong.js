export function CurrentSong(store) {

      store.rootElement?.addEventListener("AudioModeEvent",(event)=>{
        console.log("Inside Current Song")
          console.log(event)
      })
  
}