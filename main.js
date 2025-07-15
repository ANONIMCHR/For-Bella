const audio = document.getElementById('audio');
const playpauseBtn = document.getElementById('playpause');
const lyricsBox = document.getElementById('lyrics-box');
const lyricsDiv = document.getElementById('lyrics');
const girlPhoto = document.getElementById('girl-photo');
const backgroundBlur = document.getElementById('background-blur');
const photoUrlInput = document.getElementById('photo-url');
const songUrlInput = document.getElementById('song-url');

let isPlaying = false;

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playpauseBtn.textContent = "Pause";
    startLyricsScroll();
  } else {
    audio.pause();
    playpauseBtn.textContent = "Play";
    stopLyricsScroll();
  }
}

function changePhoto() {
  const url = photoUrlInput.value || "https://files.catbox.moe/sample.jpg";
  girlPhoto.src = url;
  backgroundBlur.style.backgroundImage = `url('${url}')`;
}

function changeSong() {
  const url = songUrlInput.value || "lagu.mp3";
  audio.src = url;
  audio.load();
  playpauseBtn.textContent = "Play";
  resetLyricsScroll();
}

audio.addEventListener('ended', () => {
  playpauseBtn.textContent = "Play";
  stopLyricsScroll();
});

// Inisialisasi awal
backgroundBlur.style.backgroundImage = `url('${girlPhoto.src}')`;
