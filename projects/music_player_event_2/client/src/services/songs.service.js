/* export const fetchSongs = () =>
  fetch("http://localhost:4444/songs")
    .then((rawData) => rawData.json())
    .then((finalData) => {
       setSongs(finalData);
    }); */

export const fetchSongs = async () => {
  const rawData = await fetch("http://localhost:4444/songs");
  return await rawData.json();
};
