let songs = [];

let otherVariables = {
    audioMode: "pause",
    currentSongId: "",
    previousSongId: "",
    currentProgressPercent: 0,
}

export const musicPlayerStore = {
    songs : songs,
    ...otherVariables
};
