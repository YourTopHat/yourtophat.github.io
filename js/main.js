// FRIENDS DATA
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

// CREATE CARDS
friends.forEach(f => {
  const item = document.createElement("div");
  item.className = "accordion-item";
  item.innerHTML = `
    <div class="accordion-header">${f.name}</div>
    <div class="accordion-content">${f.message}</div>
  `;
  item.onclick = () => item.classList.toggle("open");
  list.appendChild(item);
});

// MUSIC
const music = document.getElementById("bgMusic");
const btn = document.getElementById("toggleMusic");

// Start music on first click anywhere
document.addEventListener("click", function init() {
  music.muted = false;
  music.play();
  document.removeEventListener("click", init);
}, { once: true });

// Toggle button
btn.onclick = () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔇 Pause";
  } else {
    music.pause();
    btn.textContent = "🎵 Play Music";
  }
};