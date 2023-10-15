import { CurrentSongSlice } from "./currrentSong.slice.js";
import { SongsSlice } from "./songs.slice.js";

export function musicPlayerStore(musicPlayer) {
  let rootElement = musicPlayer;

  const songsSlice = SongsSlice();
  const currentSongSlice = CurrentSongSlice(rootElement)

  const storeVariables = { rootElement, songsSlice, currentSongSlice }

  songsSlice.updateStoreVariables(storeVariables)
  currentSongSlice.updateStoreVariables(storeVariables)

  return storeVariables; //songs1 == songs0//componen
}
