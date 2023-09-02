import { Song } from "../Song/Song.js";
export function Songs(musicPlayer) {
    const songsDiv = musicPlayer.querySelector(".Songs");

    const render = (songs) => {
        songs.forEach((song)=>{
             const songClosure = Song(songsDiv);
             songClosure.render(song);
        })
    }

    return {render}
}