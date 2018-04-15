document.addEventListener('DOMContentLoaded', () => {
    (() => {
        const audio = new Audio('./mp3/GameofThrones.mp3');
        const soundOn = document.querySelector('#sound-on');
        const soundOff = document.querySelector('#sound-off');

        soundOn.addEventListener('click', () => {
            audio.play();
        });
        soundOff.addEventListener('click', () => {
            audio.pause();
        });
    })();

});