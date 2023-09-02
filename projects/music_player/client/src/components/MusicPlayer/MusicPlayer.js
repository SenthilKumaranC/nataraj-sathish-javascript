import { fetchSongs } from "../../services/songs.service.js";
import { CurrentSong } from "../CurrentSong/CurrrentSong.js";
import { Songs } from "../Songs/Songs.js";

export  function MusicPlayer(id) {
  //Main Template

  const render = async () => {
    const template = document.querySelector("#MusicPlayerTemplate");
    const clone = template.content.cloneNode(true);
    const musicPlayer = clone.querySelector(".MusicPlayer");
    musicPlayer.id = id;
    document.body.appendChild(musicPlayer);

    //Data Fetch
    const songs = await fetchSongs();
    console.log(songs);

    //Create Required Components inside the Music Player
    const songsClosure = Songs(musicPlayer);
    songsClosure.render(songs);

    const currentSongClosure = CurrentSong();
  };
  return { render };
}
