window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`);
    const key = document.querySelector(`.key[data-key="${e.key.toLowerCase()}"]`)
    if (!audio) return;
    if (!key.classList.contains('playing')){
        audio.currentTime = 0;
        audio.play();
    }

    key.classList.add('playing');
});

window.addEventListener('keyup', function (e) {
    const key = document.querySelector(`.key[data-key="${e.key.toLowerCase()}"]`);
    key.classList.remove('playing');
});