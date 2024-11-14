// Mostrar opciones Sí y No
function showOptions() {
    document.getElementById('options').classList.remove('hidden');
  }
  
  // Mover el botón "No" al intentar hacer clic
  function moveNoButton() {
    const noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * 300}px`;
    noButton.style.left = `${Math.random() * 300}px`;
  }
  
  // Redirigir a la página del juego
  function goToGame() {
    window.location.href = 'game.html';
  }
  
  // Contador de clics en la página del juego
  let clicks = 0;
  function countClicks() {
    clicks++;
    document.getElementById('clickCount').innerText = `Clics: ${clicks}`;
    if (clicks >= 30) {
      document.getElementById('finalMessage').classList.remove('hidden');
      playTrollSong();
    }
  }
  
  // Reproducir la canción troll automáticamente
  function playTrollSong() {
    const audio = document.getElementById('trollAudio');
    audio.play();
  }
  
  // Contador de felicitaciones y confeti
  let congratsCount = 0;
  function sendCongrats() {
    congratsCount++;
    document.getElementById('congratsCount').innerText = `Felicitaciones: ${congratsCount}`;
    launchConfetti();
  }
  
  // Lanzar confeti usando canvas-confetti
  function launchConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff1493', '#ff69b4', '#32cd32', '#ff4500']
    });
  }
  