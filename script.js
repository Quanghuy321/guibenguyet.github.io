(() => {
  const display = document.getElementById('display');
  let code = '';
  const correctCode = '1008';

  function appendDigit(digit) {
    if (!display || code.length >= 8) return;
    code += digit;
    display.value = '*'.repeat(code.length);
  }

  function clearCode() {
    code = '';
    if (display) display.value = '';
  }

  function checkCode() {
    if (!display) return;
    if (code === correctCode) {
      document.getElementById('calculatorScreen').hidden = true;
      document.getElementById('birthdayScreen').style.display = 'grid';
      return;
    }
    display.classList.remove('shake');
    void display.offsetWidth;
    display.classList.add('shake');
    clearCode();
  }

  document.querySelectorAll('[data-digit]').forEach(button => {
    button.addEventListener('click', () => appendDigit(button.dataset.digit));
  });
  document.getElementById('clearButton')?.addEventListener('click', clearCode);
  document.getElementById('enterButton')?.addEventListener('click', checkCode);
  document.getElementById('openGiftButton')?.addEventListener('click', () => { window.location.href = 'chucmung.html'; });
  document.getElementById('albumButton')?.addEventListener('click', () => { window.location.href = 'album.html'; });

  const heartContainer = document.querySelector('#hearts-container, .hearts-container');
  if (!heartContainer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const lowMotion = window.matchMedia('(max-width: 600px)').matches;
  const interval = lowMotion ? 1200 : 700;
  function addHeart() {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    const size = 13 + Math.random() * (lowMotion ? 7 : 13);
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.animationDuration = `${6 + Math.random() * 4}s`;
    heartContainer.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove(), { once: true });
  }
  const timer = window.setInterval(addHeart, interval);
  window.addEventListener('pagehide', () => window.clearInterval(timer), { once: true });
})();
