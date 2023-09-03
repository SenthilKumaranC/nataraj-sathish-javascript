import { playSong , pauseSong} from "./playPauseSong.js";
import { musicPlayerStore  } from "./features/store.js";


export function createSongElement(songData) {
  const template = document.querySelector("#SongTemplate");
  const clone = template.content.cloneNode(true);

  const songDiv = clone.querySelector(".Song");
  songDiv.id = songData.songId;

  const titleSpan = songDiv.querySelector(".Title");
  titleSpan.textContent = songData.title;

  const coverPhotoImage = songDiv.querySelector(".Photo");
  coverPhotoImage.src = songData.coverPhotoPath;

  const playButton = songDiv.querySelector("#play");
  playButton.addEventListener("click", playSong(songData.songId));

  const pauseButton = songDiv.querySelector("#pause");
  pauseButton.addEventListener("click", pauseSong);

  if (musicPlayerStore.audioMode === "pause") {
    pauseButton.style.display = "none";
  }

  const songsDiv = document.getElementById("Songs");
  songsDiv.appendChild(songDiv);
}
