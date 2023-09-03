import { musicPlayerStore } from "./store.js";

export function playSong(id) {
  return () => {
    const audioElement = document.getElementById("device");
    const song = musicPlayerStore.songs.find((song) => song.songId === id);
    audioElement.src = song.trackPath;
    audioElement.play();
    musicPlayerStore.previousSongId = nrd.currentSongId;
    musicPlayerStore.currentSongId = id;
    musicPlayerStore.audioMode = "play";
    handlePlayPauseButton();
    const currentSongTitle = document.getElementById("CurrentSongTitle");
    currentSongTitle.textContent = song.title;
    const currentSongImage = document.getElementById("CurrentSongImage");
    currentSongImage.src = song.coverPhotoPath;
  };
}

export function pauseSong() {
  const audioElement = document.getElementById("device");
  audioElement.pause();
  musicPlayerStore.audioMode = "pause";
  handlePlayPauseButton();
}

function handlePlayPauseButton() {
  if (musicPlayerStore.previousSongId !== "") {
    handlePlayPauseButtonById(musicPlayerStore.previousSongId);
  }
  handlePlayPauseButtonById(musicPlayerStore.currentSongId);
}

function handlePlayPauseButtonById(id) {
  const currentSongId = musicPlayerStore.currentSongId;
  const songDiv = document.getElementById(id);
  const pauseButton = songDiv.querySelector("#pause");
  const playButton = songDiv.querySelector("#play");
  if (id !== currentSongId) {
    pauseButton.style.display = "none";
    playButton.style.display = "inline-block";
    return;
  }
  if (musicPlayerStore.audioMode === "pause") {
    pauseButton.style.display = "none";
    playButton.style.display = "inline-block";
  } else {
    pauseButton.style.display = "inline-block";
    playButton.style.display = "none";
  }
}
