import { musicPlayerStore } from "../../features/store.js";
import { CurrentSong } from "../CurrentSong/CurrrentSong.js";
import { Songs } from "../Songs/Songs.js";

export function MusicPlayer(id) {
  let store;


  //Main Template

  const render = async () => {
    const template = document.querySelector("#MusicPlayerTemplate");
    const clone = template.content.cloneNode(true);
    const musicPlayer = clone.querySelector(".MusicPlayer");

    store = musicPlayerStore(musicPlayer);

    musicPlayer.id = id;
    document.body.appendChild(musicPlayer);

    await store.songsSlice.methods.createSongs();

    //Create Required Components inside the Music Player
    const songsClosure = Songs(musicPlayer, store);
    songsClosure.render(store.songsSlice.data.songs);
    //store - database
    //songslice - table
    //data.songs (data inside the data)

    const currentSongClosure = CurrentSong(store);

    musicPlayer.addEventListener("AudioModeEvent", (event) => {
      console.log("Inside Music Player Song");
      console.log(event);
    });
  };
  return { render };
}
