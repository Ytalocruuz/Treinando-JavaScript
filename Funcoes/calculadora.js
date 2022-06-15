//  Funçãp Aritméticas

function calculadora(){
    const escolha = Number(prompt(' 1 - Adição (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Dividão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)\n'));

    if (!escolha || escolha > 7){
        alert("Opção válida!! Digite uma opção válida. ")
        calculadora()
    }else{


        let Num1 = Number(prompt("Digite o primeiro número: "));
        let Num2 = Number(prompt("Digite o segundo número: "));
        let resultado ; 

        if(!Num1 || !Num2){
            alert("Erro - Parâmetros inválidos!!");
            calculadora();
        }else{
        
            function Soma(){
                  resultado = Num1 + Num2;
                  alert(`${Num1 } + ${Num2 } = ${ resultado}`);
                  novaOperacao()
            }
        
            function Subtracao(){
                resultado = Num1 - Num2;
                alert(`${Num1} - ${Num2} = ${resultado}`)
                novaOperacao()
            }
        
            function Multiplicacao(){
                resultado = Num1 * Num2;
                alert(`${Num1} * ${Num2} = ${resultado}`)
                novaOperacao()
            }
            
            function DivisaoReal(){
                resultado = Num1 / Num2;
                alert(`${Num1} / ${Num2} = ${resultado}`)
                novaOperacao()
            }
            function DivisaoInte(){
                resultado = Num1 % Num2;
                alert(`O resto da divisão entre ${Num1} e ${Num2} é igual a  ${resultado}`)
                novaOperacao()
            }
            function Potenciacao(){
                resultado = Num1 ** Num2;
                alert(`${Num1}elevado a ${Num2} é igaul a ${resultado}`)
                novaOperacao()
            }

            function novaOperacao (){
                let Nova = prompt("Deseja realizar outro operação? \n 1 - Sim! \n 2 - Não! ");
        
                if (Nova == 1){
                    calculadora();
                } else if (Nova == 2){
                    alert("Adeus, Volte sempre e bons estudos!!")
                }else{
                    alert("digite uma opção válida, por gentileza <3")
                    NovaOperacao()
                }
            }
        }

        //  Com if else 
    
        // if (escolha == 1){
        //     soma();
        // }else if (escolha == 2){
        //     Subtracao()
        // }else if (escolha == 3){
        //     Multiplicacao()
        // } else if (escolha == 4){
        //     DivisaoReal()
        // }else if (escolha == 5){
        //     DivisaoInte()
        // }else if (escolha == 6){
        //     Potenciacao()
        // }

        //  Com Switch

        switch(escolha){
            case 1:
                Soma();
            break;
            case 2:
                Subtracao();
            break;
            case 3:
                Multiplicacao();
            break;
            case 4:
                DivisaoReal();
            break;
            case 5: 
                DivisaoInte();
            break;
            case 6:
                Potenciacao();
            break;
        }
    }
}

// calculadora();

function media(){
     
    let num1 = Number(prompt("Digite sua primeira nota: "))
    let num2 = Number(prompt("Digite sua segunda nota: "))
    let num3 = Number(prompt("Digite sua terceira nota: "))
    let num4 = Number(prompt("Digite sua quarta nota: "))
    let resultado;
    let aprovado;
    let recupe;
    
    resultado = (num1+num2+num3+num4)/2;


    alert(`Sua nota é ${resultado} `)

}

// media()

function numeroPositivo(num){
     const ehNegativo = num < 0;
     const MaiorQueDez = num > 10;

     if(ehNegativo){
        return "Esse número é negativo";
     }else if (!ehNegativo && MaiorQueDez){
        return "Esse número é positivo e maior que dez";
     } 
     return "Esse Número é positivo";
}

alert(numeroPositivo(11))