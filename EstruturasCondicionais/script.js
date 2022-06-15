// const jogador1 = 0;
// const jogador2 = 1;
// let  placar; 


// if (jogador1 > 0 && jogador2 == 0) {
//     console.log("Jogador 1 vem um gol")
//     placar = jogador1 > jogador2
// }else if (jogador2 >0 && jogador1 == 0) {
//     console.log("Jogador 2 vem um gol")
//      placar = jogador2 > jogador1
// }else{
//    console.log("Ninguém vez gol")
// }

// switch (placar){
//     case placar = jogador1 > jogador2:
//         console.log("Jogador 1 ganhot");
//     break;
//     case placar = jogador2 > jogador1:
//         console.log("Jogador 2 venceu");
//     break;
//     default:
//         console.log("Ninguém ganhou");
// }

// let array = ["arrya1", "arrya2","arrya3", "arrya4" ]

// for (let indice = 0; indice < array.length; indice++){
//     console.log(indice)
// }

// for (let i in array){
//     console.log(i)
// }

// for( i of array){
//     console.log(i)
// }

// var a = 0;

// while ( a < 10){
//     a++;
//     console.log(a);

// }

// do{
//     a++;
//     console.log(a);
// }while(a <10)


     
  let i = 0;

  let valor = "";

  for( i; i < 10; i++){
    valor += `O ${i} valor é ${i} <br>`
  }


document.getElementById("resultadoFor").innerHTML = valor