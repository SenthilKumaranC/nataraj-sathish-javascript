import { fetchSongs } from "../../services/songs.service.js";
import { musicPlayerStore } from "../../store.js";
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

    console.log(store.data.songs);

    await store.methods.createSongs();

    console.log(store.data.songs);

    //Create Required Components inside the Music Player
    const songsClosure = Songs(musicPlayer, store);
    songsClosure.render(store.songsSlice.data.songs);

    const currentSongClosure = CurrentSong(store);

    musicPlayer.addEventListener("AudioModeEvent", (event) => {
      console.log("Inside Music Player Song");
      console.log(event);
    });
  };
  return { render };
}
