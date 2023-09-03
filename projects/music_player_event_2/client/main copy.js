import { createSongElement } from "./src/createSongElement.js";
import { musicPlayerStore} from "./src/features/store.js";
import { fetchData } from "./src/services/songs.service.js";


const setSongs = (newSongs) => {
  console.log(Array.isArray(newSongs));
  let mappedSongs = newSongs.map((newSong) => {
    const clonedNewSong = { ...newSong, songId: newSong.id };
    //delete clonedNewSong["id"]
    Reflect.deleteProperty(clonedNewSong, "id");
    return clonedNewSong;
  });

  console.log(mappedSongs);

  musicPlayerStore.songs = mappedSongs;

  musicPlayerStore.songs.forEach((song) => {
    createSongElement(song);
  });

  console.log(musicPlayerStore.songs);
};

function progressBar(event) {
  //console.log(event);
  const { currentTime, duration } = event.srcElement;
  console.log(event.srcElement.currentTime, event.srcElement.duration);
  nrd.currentProgressPercent = (currentTime / duration) * 100;
  handleProgressBar();
}

function handleProgressBar() {
  const progressBar = document.getElementById("ProgressBar");
  progressBar.style.width = nrd.currentProgressPercent + "%";
}

const audioElement = document.getElementById("device");
audioElement.addEventListener("timeupdate", progressBar);

/* function playSong(id){
    return () => {
        const audioElement = document.getElementById("device");
        const song = songs.find((song)=>song.songId===id);
        audioElement.src =  song.trackPath;
        audioElement.play();
    }
} */

//Function Factory

/* function createSongElement(songData) {
  //Create a Wrapper for a Song
  const songDiv = document.createElement("div");
  songDiv.className = "Song";
  songDiv.id = songData.songId;
  //Add Created Wrapper to Songs
  const songsDiv = document.getElementById("Songs");
  songsDiv.appendChild(songDiv);

  const titleSpan = document.createElement("span");
  titleSpan.className = "Title";
  titleSpan.textContent = songData.title;

  const coverPhotoImage = document.createElement("img");
  coverPhotoImage.className = "Photo";
  coverPhotoImage.src = songData.coverPhotoPath;

  const playButton = document.createElement("button");
  playButton.id="play";
  playButton.textContent = "PLAY";
  playButton.addEventListener("click", playSong(songData.songId));

  const pauseButton = document.createElement("button");
  pauseButton.id = "pause";
  pauseButton.textContent = "PAUSE";
  pauseButton.addEventListener("click", pauseSong);

  if (nrd.audioMode === "pause") {
    pauseButton.style.display = "none";
  }

  songDiv.appendChild(coverPhotoImage);
  songDiv.appendChild(titleSpan);
  songDiv.appendChild(playButton);
  songDiv.appendChild(pauseButton);
} */

fetchData();
