function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses(){
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    buttonSelect.classList.toggle('dark-mode');
}

function changeText(){
    if(body.classList.contains('dark-mode')){
        h1.innerHTML = 'Dark Mode ON';
        buttonSelect.innerHTML = 'Light Mode'
    }else{
        h1.innerHTML = 'Light Mode ON';
        buttonSelect.innerHTML = 'Dark Mode';
    }
    
}
const buttonSelect = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0];


buttonSelect.addEventListener('click', changeMode);