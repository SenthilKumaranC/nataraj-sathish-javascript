import { fetchSongs } from "../../services/songs.service.js";
import { musicPlayerStore } from "../../store.js";
import { CurrentSong } from "../CurrentSong/CurrrentSong.js";
import { Songs } from "../Songs/Songs.js";

export  function MusicPlayer(id) {

    const store = musicPlayerStore(id);

    console.log(store);


  //Main Template

  const render = async () => {
    const template = document.querySelector("#MusicPlayerTemplate");
    const clone = template.content.cloneNode(true);
    const musicPlayer = clone.querySelector(".MusicPlayer");
    musicPlayer.id = id;
    document.body.appendChild(musicPlayer);

    console.log(store.data.songs);

    await store.methods.createSongs();


    console.log(store.data.songs);

   
    //Create Required Components inside the Music Player
    const songsClosure = Songs(musicPlayer,store);
    songsClosure.render(store.data.songs);

    const currentSongClosure = CurrentSong(store);

    document.addEventListener("AudioModeEvent"+id,(event)=>{
        console.log("Inside Music Player Song")
          console.log(event)
      })
  };
  return { render };
}
