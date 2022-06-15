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

function consolee(){
    console.log("Oiii")
}

consolee();

function parametroo(primeiro, segundo){
    console.log(primeiro, segundo)
}

parametroo("Parametro", "Parametro")

// com momeação

const comMomeacao = function memeacao(){
    console. log("Função com momeação");
}

comMomeacao();

// arrow function

const Arrow = () => {
    console.log("sou uma arrow function");
}

Arrow();


