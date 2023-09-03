export function CurrentSong(store) {

      document.addEventListener("AudioModeEvent"+store.data.id,(event)=>{
        console.log("Inside Current Song")
          console.log(event)
      })
  
}