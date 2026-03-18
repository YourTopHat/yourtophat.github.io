const friends = [
  {
    id: 'a1',
    name: 'Luna',
    short: 'compañera de raids',
    dedication: "Luna, gracias por ayudarme en tantas pruebas. Eres la mejor compañera de equipo y de cafecitos nocturnos. 🫶"
  },
  {
    id: 'a2',
    name: 'Miko',
    short: 'maestra de skins',
    dedication: "Miko, tu estilo nunca falla. Gracias por enseñarme a combinar sombreros y paletas de color."
  },
  {
    id: 'a3',
    name: 'Coder',
    short: 'mentor de código',
    dedication: "A Coder, que me explicó las promesas y me salvó del callback hell. ¡Eres top!"
  }
];

const grid = document.getElementById('friendsGrid');
const modal = document.getElementById('cardModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

function makeCard(friend){
  const el = document.createElement('div');
  el.className = 'card';
  el.tabIndex = 0;
  el.innerHTML = `
    <div class="smallname">${friend.name}</div>
    <div class="smalldesc">${friend.short}</div>
  `;
  el.addEventListener('click', ()=> openCard(friend));
  el.addEventListener('keydown', (e)=> { if(e.key === 'Enter') openCard(friend) });
  return el;
}

function openCard(friend){
  modalContent.innerHTML = `
    <h3>${friend.name}</h3>
    <p style="color:var(--muted)">${friend.short}</p>
    <hr style="opacity:.06;margin:12px 0">
    <p>${friend.dedication}</p>
  `;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
}

closeModal.addEventListener('click', ()=> {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
});
modal.addEventListener('click', (e)=> {
  if(e.target === modal) {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden','true');
  }
});

friends.forEach(f => grid.appendChild(makeCard(f)));

// Toggle music
document.getElementById('toggleMusic').addEventListener('click', ()=>{
  alert('Puedes añadir tu pista en index.html y controlar su reproducción aquí. (Bloqueo por autoplay del navegador)');
});