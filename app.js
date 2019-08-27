const buttons = document.querySelectorAll('button');

const playnote = ()=>{

    const button = event.target;
    const note = button.dataset.note;
    console.log(note);
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
);
