import { Song } from "../Song/Song.js";
export function Songs(musicPlayer,store) {
    const songsDiv = musicPlayer.querySelector(".Songs");

    const render = (songs) => {
        songs.forEach((song)=>{
             const songClosure = Song(songsDiv,store);
             songClosure.render(song);
        })
    }

    return {render}
}