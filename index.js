const musicContainer = document.getElementById("music_container");

const playBtn = document.getElementById("play");
const prebBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Song titles
const songs = ["Era Istrefi", "2Pac", "C-Kay"];

// Keep track of songs
let songIndex = 1;

// Initially load sont details into DOM
loadSong(songs[songIndex]);

// Update song details ktu ttitle.innerText e merr value prej html h4
function loadSong(song) {
  title.innerText = song;
  audio.src = `Music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}
