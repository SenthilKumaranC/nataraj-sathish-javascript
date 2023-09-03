import { CurrentSongSlice } from "./currrentSong.slice.js";
import { SongsSlice } from "./songs.slice.js";

export function musicPlayerStore(musicPlayer) {
  let rootElement = musicPlayer;

  const songsSlice = SongsSlice(rootElement);
  const currentSongSlice = CurrentSongSlice(rootElement)

  return { rootElement, songsSlice, currentSongSlice }; //songs1 == songs0
}
