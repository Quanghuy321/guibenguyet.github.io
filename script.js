// script.js - basic logic for the birthday site
// For demo purposes the "password" to pass is 0101 (example ddmm or any code you want)
let displayEl = null;
let inputValue = '';

document.addEventListener('DOMContentLoaded', () => {
  displayEl = document.getElementById('display');
  createHearts(12);
});

function appendToDisplay(ch){
  inputValue += ch;
  if(displayEl) displayEl.value = '*'.repeat(inputValue.length);
}

function clearDisplay(){
  inputValue = '';
  if(displayEl) displayEl.value = '';
}

function checkPassword(){
  // The demo password here is "0101" (change as you like)
  const target = '1008';
  if(inputValue === target){
    // show birthday screen
    document.getElementById('calculatorScreen').style.display = 'none';
    document.getElementById('birthdayScreen').style.display = 'flex';
  } else {
    // small shake effect and clear
    const el = displayEl;
    if(el){
      el.classList.add('shake');
      setTimeout(()=>el.classList.remove('shake'),600);
    }
    setTimeout(clearDisplay,400);
  }
}

function openGift(){
  // navigate to chucmung page (in this demo we open local chucmung.html)
  window.location.href = 'chucmung.html';
}

function goAlbum(){
  window.location.href = 'album.html';
}

/* hearts animation generator */
function createHearts(n){
  const container = document.getElementById('hearts-container');
  if(!container) return;
  for(let i=0;i<n;i++){
    const h = document.createElement('div');
    h.className = 'heart';
    h.style.left = Math.random()*100 + '%';
    h.style.top = -Math.random()*20 - 5 + 'px';
    h.style.transform = 'scale(' + (0.6 + Math.random()*0.8) + ')';
    container.appendChild(h);
    animateHeart(h);
  }
}

function animateHeart(el){
  const duration = 7000 + Math.random()*6000;
  el.animate([
    { transform: el.style.transform + ' translateY(0)', opacity: 1 },
    { transform: el.style.transform + ' translateY(' + (window.innerHeight + 200) + 'px)', opacity: 0.1 }
  ], { duration: duration, iterations: Infinity, easing: 'linear' });
}

/* small helper: if album page, let images pop in (CSS handles animation delays) */
