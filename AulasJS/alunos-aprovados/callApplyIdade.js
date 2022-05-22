function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Vanessa',
    idade: 39,
};

const pessoa2 = {
    nome: 'Guilherme',
    idade: 20
};


const animal ={
    nome: 'Afonso',
    idade: 6,
    raca: 'vira-lata',
};


console.log('--------------------CALL--------------')
console.log(calculaIdade.call(pessoa1, 5));
console.log(calculaIdade.call(pessoa2, 5));
console.log(calculaIdade.call(animal, 5));
console.log('---------------------APPLY--------------')
console.log(calculaIdade.apply(pessoa1, [5]));
console.log(calculaIdade.apply(pessoa2, [5]));
console.log(calculaIdade.apply(animal, [5]));
