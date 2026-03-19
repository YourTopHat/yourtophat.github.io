(() => {
  const THEME_KEY = 'yourtophat:theme';
  const body = document.body;
  const themeBtn = document.getElementById('toggleTheme');

  const getInitialTheme = () => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return body.classList.contains('light') ? 'light' : 'dark';
  };

  const applyTheme = (theme) => {
    body.classList.remove('dark', 'light');
    body.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);

    if (themeBtn) {
      themeBtn.textContent = theme === 'dark' ? '🌙 Night' : '☀️ Day';
    }
  };

  applyTheme(getInitialTheme());

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      applyTheme(body.classList.contains('dark') ? 'light' : 'dark');
    });
  }

  const trackList = document.getElementById('trackList');
  const music = document.getElementById('musicPlayer');
  const toggleMusic = document.getElementById('toggleMusic');
  const nowPlaying = document.getElementById('nowPlaying');
  const tracks = window.PORTAL2_TRACKS || [];

  if (trackList && music && tracks.length) {
    const renderTracks = () => {
      trackList.innerHTML = tracks
        .map(
          (track, index) => `
            <button class="track-btn" type="button" data-index="${index}">
              ${track.label}
            </button>
          `
        )
        .join('');
    };

    const setActive = (index) => {
      trackList.querySelectorAll('.track-btn').forEach((btn) => {
        btn.classList.toggle('active', Number(btn.dataset.index) === index);
      });
    };

    const playTrack = (index) => {
      const track = tracks[index];
      if (!track) return;

      music.src = track.src;
      music.currentTime = 0;
      music.play().catch(() => {});
      if (toggleMusic) toggleMusic.textContent = '⏸ Pause';
      if (nowPlaying) nowPlaying.textContent = `Now playing: ${track.label}`;
      setActive(index);
    };

    renderTracks();

    trackList.addEventListener('click', (event) => {
      const button = event.target.closest('.track-btn');
      if (!button) return;
      playTrack(Number(button.dataset.index));
    });

    if (toggleMusic) {
      toggleMusic.addEventListener('click', () => {
        if (!music.src && tracks[0]) {
          playTrack(0);
          return;
        }

        if (music.paused) {
          music.play().catch(() => {});
          toggleMusic.textContent = '⏸ Pause';
        } else {
          music.pause();
          toggleMusic.textContent = '▶ Play';
        }
      });
    }
  }
})();