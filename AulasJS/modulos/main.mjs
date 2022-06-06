import { mostraCidade } from "./funcoes.mjs";
import { mostraHobby } from "./funcoes.mjs";
import { mostraIdade } from "./funcoes.mjs";

const show = document.querySelector('.show');


show.innerHTML += `${mostraCidade('daniel', 'são josé')} `+
`<br> ${mostraHobby('daniel', 'video-game')}` + 
`<br> ${mostraIdade('daniel', '22')}`;

console.log(mostraCidade('daniel', 'sao jose'));
console.log(mostraHobby('daniel', 'video-game'));
console.log(mostraIdade('daniel', '22'));

