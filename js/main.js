const friends = [
  {
    name: "Lormyr",
    message: "Lormyr has always been there for me since I was little. We've known each other since elementary school, and we've spent so much time together ever since: playing, talking, going for walks... I owe him so much. We've had incredible times together, and that's still true today. We've also started projects together with other friends, and even though we might have had a few disagreements sometimes, I couldn't imagine going on living without him. Lormyr, you've been practically more than a half of my life at the moment, isn't that crazy?. I love you so much, Lormyr 🩷"
  },
  {
    name: "Empa",
    message: "I met you, Empa, one day by chance on a Discord server, by sheer luck, since I hardly ever spoke there, and neither did he. You're a wonderful person who, since then, has made me incredibly happy with amazing conversations, moments together, the occasional game, and generally sharing our thoughts. I was going through a rough patch when I met you, and you genuinely brought light into all that darkness. I love all those very few calls we had and I always hope we could do more <3. I love you so much, Empa ♥️"
  },
  {
    name: "Kuchi",
    message: "Kuchi, it's amazing that I knew you long before we became such close friends, and now we've forged an even stronger bond over the past few years. We've talked a lot, gone for walks, enjoyed the scenery, played games... even through tough times. Kuchi, you're a wonderful girl and I cherish you so much as a friend. Never change and keep drawing; your art is spectacular. I love you, Kuchi 💜"
  },
  {
    name: "Dani",
    message: "Acho tío, pos que te voy a contar... nos conocemos desde el servidor de Yesus ¿eh?, ¿te acuerdas? Buenos tiempos aquellos, aunque no mejores que estes, en los que pasamos muchísimo más tiempo juntos. Eres mi andaluz favorito y me has hecho reir muchísimo cuando andaba con la cabeza más quemada que nunca, fuera por exámenes, trabajos, temas personales... Desde entonces siempre has tenido un lugar muy especial en mi corazón. Te quiero mucho, Dani 🩷🐋"
  },
  {
    name: "Haru",
    message: "I've known you for... a year now? Maybe more? In any case, you've made me feel better on many days when I've felt quite down, you've made me laugh even when I thought I wouldn't be able to at those moments c: . Tic Tac Tic Tac, remember? Since then you have been a very special person to me, someone I have been able to tell my things to openly and with whom I have felt comfortable. I love you, Haru 🩷🌸"
  },
  {
    name: "Edu",
    message: "It's been so long since we met, huh? Who would have thought? Over time, you've meant so much to me; you complement my life in such an incredible way. You've made me laugh, have fun, and feel so many other emotions, both with your sweet gestures and your silly antics, hehe. I may have gotten angry or crossed the line for no reason, but those are just little things I'm trying to work on. Even so, I want you to know that you mean a lot to me, and I couldn't go on living like nothing was wrong if you weren't there for me from one day to the next. I love you, Edu 🧡"
  },
  {
    name: "Koko",
    message: "I know our friendship has become a bit complicated over time, hehe, but you've been someone I could confide in, share thoughts... You've helped me take my mind off my problems, and I hope I've been able to do the same for you. You've been a bit difficult lately, haven't you? But I admit I have been too. I know it's partly because of what you've been through, but I still hope you always try to improve yourself. I love you, Koko"
  },
  {
    name: "And some other special people ✨",
    message: "Soup, Pollowoof, Brosky, GG, Wari, Rucari, West, Mau and Bon 💖💕 Love you all!"
  },
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