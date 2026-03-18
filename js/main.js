const friends = [
  {
    name: "Luna",
    message: "Luna is always there for me — soft vibes, late-night chats, and cozy support ✧"
  },
  {
    name: "Miko",
    message: "Miko has a magical sense for aesthetics and color palettes. Truly inspiring ✦"
  },
  {
    name: "Coder",
    message: "Coder teaches me tricks, saves me from bugs, and laughs through chaos with me."
  }
];

const list = document.getElementById("friendsList");

friends.forEach(friend => {
  const item = document.createElement("div");
  item.className = "accordion-item";

  item.innerHTML = `
    <div class="accordion-header">${friend.name}</div>
    <div class="accordion-content">${friend.message}</div>
  `;

  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });

  list.appendChild(item);
});

// MUSIC
const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("toggleMusic");

// Enable audio after first user click (browser rules)
document.addEventListener("click", function startAudio() {
  music.muted = false;
  music.play();
  document.removeEventListener("click", startAudio);
});

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🔇 Pause";
  } else {
    music.pause();
    toggleBtn.textContent = "🎵 Play Music";
  }
});

// ---------------------
// THEME TOGGLE
// ---------------------
const themeBtn = document.getElementById("toggleTheme");
const body = document.body;

// default = night
body.classList.add("dark");

themeBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    themeBtn.textContent = "☀️ Day";
  } else {
    body.classList.replace("light", "dark");
    themeBtn.textContent = "🌙 Night";
  }
});