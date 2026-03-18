const friends = [
  {
    id: 'a1',
    name: 'Luna',
    short: 'raids companion',
    dedication: `Luna, thank you for joining me in so many trials. 
You’re the best teammate and late‑night coffee buddy ✦`
  },
  {
    id: 'a2',
    name: 'Miko',
    short: 'skin designer',
    dedication: `Miko, your aesthetic sense is unmatched. 
Thanks for teaching me how to match hats and palettes ⭐`
  },
  {
    id: 'a3',
    name: 'Coder',
    short: 'code mentor',
    dedication: `Coder, thanks for explaining promises 
and saving me from callback hell. You're amazing ✧`
  }
];

const grid = document.getElementById('friendsGrid');
const modal = document.getElementById('cardModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

function makeCard(friend) {
  const el = document.createElement('div');
  el.className = 'card';
  el.tabIndex = 0;

  el.innerHTML = `
    <div class="smallname">${friend.name}</div>
    <div class="smalldesc">${friend.short}</div>
  `;

  el.addEventListener('click', () => openCard(friend));
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter') openCard(friend)
  });

  return el;
}

function openCard(friend) {
  modalContent.innerHTML = `
    <h4>${friend.name}</h4>
    <p>${friend.short}</p>
    <p>${friend.dedication}</p>
  `;

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
}

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden','true');
  }
});

friends.forEach(f => grid.appendChild(makeCard(f)));

const music = document.getElementById('bgMusic');
const toggle = document.getElementById('toggleMusic');

toggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggle.textContent = '🔇 Pause';
  } else {
    music.pause();
    toggle.textContent = '🎵 Music';
  }
});