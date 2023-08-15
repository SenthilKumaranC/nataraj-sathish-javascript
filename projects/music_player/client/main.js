let songs = [];
const renderSongs = () => {};
const setSongs = (newSongs) => {
  console.log(Array.isArray(newSongs));
  songs = newSongs.map((newSong) => {
    const clonedNewSong = { ...newSong, songId: newSong.id };
    //delete clonedNewSong["id"]
    Reflect.deleteProperty(clonedNewSong, "id");
    return clonedNewSong;
  });

  songs.forEach((song) => {
    createSongElement(song);
  });
};

/* function playSong(id){
    return () => {
        const audioElement = document.getElementById("device");
        const song = songs.find((song)=>song.songId===id);
        audioElement.src =  song.trackPath;
        audioElement.play();
    }
} */

//Function Factory
function playSong(id) {
  return () => {
    const audioElement = document.getElementById("device");
    const song = songs.find((song) => song.songId === id);
    audioElement.src = song.trackPath;
    audioElement.play();
  };
}

function createSongElement(songData) {
  //Create a Wrapper for a Song
  const songDiv = document.createElement("div");
  songDiv.className = "Song";
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
  playButton.textContent = "PLAY";
  playButton.addEventListener("click", playSong(songData.songId));

  //song1
  /* () => {
    const audioElement = document.getElementById("device");
    const song = songs.find((song) => song.songId === "abcd1111");
    audioElement.src = song.trackPath;
    audioElement.play();
  }; */

   //song2
  /* () => {
    const audioElement = document.getElementById("device");
    const song = songs.find((song) => song.songId === "abcd1111");
    audioElement.src = song.trackPath;
    audioElement.play();
  }; */

  songDiv.appendChild(titleSpan);
  songDiv.appendChild(coverPhotoImage);
  songDiv.appendChild(playButton);
}

fetch("http://localhost:4444/songs")
  .then((rawData) => rawData.json())
  .then((finalData) => {
    setSongs(finalData);
  });
