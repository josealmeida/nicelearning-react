import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05",
    },
    {
      title: "Macarena",
      duration: "2:35",
    },
    {
      title: "All Star",
      duration: "5:05",
    },
    {
      title: "Backstreets Back",
      duration: "4:08",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
