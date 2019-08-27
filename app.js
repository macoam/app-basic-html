const buttons = document.querySelectorAll('button');

const playnote = ()=>{

    const button = event.target;
    const note = button.dataset.note;
    console.log(`audio${note}`);
    const audioId = `audio${note}`
    const audio = document.getElementById(audioId);
    audio.pause();
    audio.currenTime = 0;
    audio.play();
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
);
