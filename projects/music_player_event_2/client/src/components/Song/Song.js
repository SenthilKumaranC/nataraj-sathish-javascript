export function Song(songsDiv,store) {
  function createSongElement(songData) {
    const template = document.querySelector("#SongTemplate");
    const clone = template.content.cloneNode(true);

    const songDiv = clone.querySelector(".Song");
    songDiv.id = songData.songId;

    const titleSpan = songDiv.querySelector(".Title");
    titleSpan.textContent = songData.title;

    const coverPhotoImage = songDiv.querySelector(".Photo");
    coverPhotoImage.src = songData.coverPhotoPath;

    const playButton = songDiv.querySelector("#play");
    playButton.addEventListener("click", store.methods.playSong);

    const pauseButton = songDiv.querySelector("#pause");
    //pauseButton.addEventListener("click", pauseSong);

    /* if (musicPlayerStore.audioMode === "pause") {
      pauseButton.style.display = "none";
    } */
    songsDiv.appendChild(songDiv);
  }

  const render = (song) => {
    console.log("Render Single Song",song)
    createSongElement(song);
  };
  return { render };
}
