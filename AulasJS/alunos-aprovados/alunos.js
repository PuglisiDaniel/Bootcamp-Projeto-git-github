const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 7,
		turma: '2C',
	},
];

function mediaFinal(array, media){
    let aux = [];
   

    for(let i=0; i<array.length;i++){
        let { nota, nome } = array[i];

        if(nota>=media){
            aux.push(nome);
        }
    }

    return aux;
}


console.log(mediaFinal(alunos, 6));