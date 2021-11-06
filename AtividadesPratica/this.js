function calculaIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 16
}

const pessoa2 = {
    nome: "Erik",
    idade: 19
}
const pessoa3 = {
    nome: "Eduardo",
    idade: 26
}
const pessoa4 = {
    nome: "João",
    idade: 22
}

console.log(calculaIdade.call(pessoa2, 30))
console.log(calculaIdade.apply(pessoa1, [30]))