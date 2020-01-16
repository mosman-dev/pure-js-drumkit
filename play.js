function playSound(e) {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);

    const key = document.querySelector(`.key[data-key=${e.code}]`);

    if (!audio) return;         // stop running

    audio.currentTime = 0;          // rewind to start
    audio.play();

    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;         // skip if not transform
    this.classList.remove('playing');
}
    
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
