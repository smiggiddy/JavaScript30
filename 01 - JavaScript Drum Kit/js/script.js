const playSound = (audio, event) => {
    const key = document.querySelector(`div[data-key="${event.code}"]`);
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');

    // key.classList.toggle('playing');

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log(this);
}


const keys = document.querySelectorAll(".key");
keys.forEach(k => k.addEventListener('transitionend', removeTransition));
// console.log(key[0]["attributes"]['data-key']['nodeValue']);


// key.forEach((k) => {
//     const dataKey = k.getAttribute('data-key');
//     k.addEventListener('click', () => {
//         console.log(dataKey);
//     });

// });

window.addEventListener('keydown', event => {
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    if (audio) {
    playSound(audio, event);
    } else return;
});
/*

when a user presses a keyboard key a soun should
happen

need an event listener for each key
method to play that event based on the key getting hit

*/