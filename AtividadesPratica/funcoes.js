const alunos = [
    {
        nome: 'Ytalo',
        nota: 10,
        turma: '1B'
    },
    {
        nome: 'Erik',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Larissa',
        nota: 7,
        turma: '1B'
    },
    {
        nome: 'Cristina',
        nota: 8,
        turma: '1B'
    }
]
function alunsoAprovado(arr, media) {

    let aprovado = [];
    for(let i = 0; i < arr.length; i ++){
      const {nota, nome} = arr[i];
        if (nota >= media){
            aprovado.push(nome)
        }
    }
    return aprovado
}

console.log(alunsoAprovado(alunos, 5))