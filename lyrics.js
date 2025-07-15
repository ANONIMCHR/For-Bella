// Lirik "Lantas" sesuai yang kamu berikan, timing contoh (atur time agar sinkron dengan lagu)
const lyricsData = [
  { time: 0, text: "Lima hari sudah kurindu" },
  { time: 4, text: "Tak bisa ku menghubungimu" },
  { time: 8, text: "Kau sedang dengan dirinya" },
  { time: 12, text: "Sedang kita rahasia" },
  { time: 16, text: "Kapankah kau ada waktu" },
  { time: 20, text: "Sembunyi untuk bertemu" },
  { time: 24, text: "Baru kau sapa kutersipu" },
  { time: 28, text: "Kau puji lupa amarahku" },
  { time: 32, text: "Karena kau paling tahu" },
  { time: 36, text: "Cara lemahkan hatiku" },
  { time: 40, text: "Walau tak ada yang pasti" },
  { time: 44, text: "Yang kau beri hanya mimpi" },
  { time: 48, text: "Lantas mengapa ku masih menaruh hati" },
  { time: 53, text: "Padahal kutahu kau t'lah terikat janji" },
  { time: 58, text: "Keliru ataukah bukan tak tahu" },
  { time: 62, text: "Lupakanmu tapi aku tak mau" },
  { time: 66, text: "Oh wo" },
  { time: 69, text: "Baru kau sapa kutersipu (tersipu)" },
  { time: 73, text: "Kau puji lupa amarahku" },
  { time: 77, text: "Karena kau paling tahu (paling tahu)" },
  { time: 81, text: "Cara lemahkan hatiku (hatiku)" },
  { time: 85, text: "Walau tak ada yang pasti" },
  { time: 89, text: "Yang kau beri hanya mimpi" },
  { time: 93, text: "Lantas mengapa ku masih menaruh hati" },
  { time: 98, text: "Padahal kutahu kau t'lah terikat janji" },
  { time: 103, text: "Keliru ataukah bukan tak tahu" },
  { time: 107, text: "Lupakanmu tapi aku tak mau" },
  { time: 111, text: "Pantaskah aku menyimpan rasa cemburu" },
  { time: 116, text: "Padahal bukan aku yang memilikimu" },
  { time: 121, text: "Sanggup sampai kapankah ku tak tahu" },
  { time: 126, text: "Akankah akal sehat menyadarkanku" },
  { time: 131, text: "Oh wo" },
  { time: 134, text: "Uh" },
  { time: 136, text: "Lantas mengapa ku masih menaruh hati" },
  { time: 140, text: "Lantas mengapa ku masih menaruh hati" },
  { time: 144, text: "Padahal kutahu kau t'lah terikat janji" },
  { time: 148, text: "Keliru ataukah bukan tak tahu" },
  { time: 152, text: "Lupakanmu tapi aku tak mau (pantaskah ku)" },
  { time: 156, text: "Pantaskah aku (ku menyimpan)" },
  { time: 159, text: "Untuk menyimpan (rasa cemburu)" },
  { time: 162, text: "Karna bukan aku yang milikimu" },
  { time: 166, text: "Sanggup sampai kapankah ku tak tahu" },
  { time: 170, text: "Akankah akal sehat menyadarkanku" }
];

let lyricsInterval = null;
let currentLine = 0;

function startLyricsScroll() {
  if (lyricsInterval) return;
  lyricsInterval = setInterval(updateLyrics, 200);
}

function stopLyricsScroll() {
  if (lyricsInterval) clearInterval(lyricsInterval);
  lyricsInterval = null;
}

function resetLyricsScroll() {
  currentLine = 0;
  lyricsDiv.style.transform = `translateY(0px)`;
  updateLyrics();
}

function updateLyrics() {
  const currentTime = audio.currentTime;
  let lineIdx = lyricsData.length - 1;
  for (let i = 0; i < lyricsData.length; i++) {
    if (currentTime < lyricsData[i].time) {
      lineIdx = i - 1;
      break;
    }
  }
  if (lineIdx < 0) lineIdx = 0;
  if (lineIdx !== currentLine) {
    currentLine = lineIdx;
    lyricsDiv.innerHTML = "";
    lyricsData.forEach((line, idx) => {
      const el = document.createElement('div');
      el.textContent = line.text;
      if (idx === lineIdx) el.style.color = "#e75480";
      lyricsDiv.appendChild(el);
    });
    const scrollY = -lineIdx * 32; // Adjust for line height
    lyricsDiv.style.transform = `translateY(${scrollY}px)`;
  }
}

// Inisialisasi lirik
resetLyricsScroll();
lyricsDiv.innerHTML = lyricsData.map(l => `<div>${l.text}</div>`).join("");
