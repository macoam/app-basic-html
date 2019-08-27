const buttons = document.querySelectorAll('button');

const playnote = ()=>{

    console.log(event.target);
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
);
