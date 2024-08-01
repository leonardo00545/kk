/*//let num1
//let num2 
//let resultado
//let idadecachorro
//let nome
//let qualCalculo


//entrada de dados pelo usuario 
//nome = prompt("digite eu nome");

//num1 = parseInt(prompt("digite o ano atual:"));

//num2 = parseInt(prompt("digite o ano que voce nasceu:"));

//resultado = num1 - num2 ;

//primeiro desafio(calculo da adade humana )



//segundo desafio ( calculo da idade canina )
//idadecachorro = resultado * 7;
//terceiro desafio ( nome) 

// quarto desafio (perguntar qual calculo quer)
qualCalculo = parseInt(prompt("digite 1 para idade humana e 2 para idade canina"))



//motrar resultado
//if(qualCalculo == 1){
//    alert(nome + ", a idade é: " + resultado)
//}
//if(qualCalculo == 2){
//    alert(nome + ", se voce fosse um cachorro sua idade seria: " + idadecachorro)
//}else{
//    alert(nome + ", por favor digite um numero invalido. ")
//}

*/
//DESAFIO ULTIMATO O FILME//
//Fazer uma calculadora que verifica quantos pontos um estudante precisa para passar de ano no ultimo trimestre

//dicas: o estudante precisa informar as notas do 1 e2 trimestre
//com esses dados a calculadora precisa informar quantos pontos ele precisa para passar
//de ano no 3 rimetre se os estudantes ja estiver passado no 2 trimestre 



let nota1;
let nota2;
let medianecessaria = 180;
let mediaaluno;
let calculonota;
let alta;

nota1 = parseInt(prompt("digite sua media do primeiro trimestre"));
nota2 = parseInt(prompt("digite sua media do segundo trimestre"));
nota3 = parseInt(prompt("digite sua media do terceiro trimestre"));
mediaaluno = 180 - (nota1 + nota2 + nota3);
alta = 180 - mediaaluno


alert("sua media é: " + mediaaluno);
if (mediaaluno >= 180){
    alert("parabéns voce esta aprovado")
}

else if(mediaaluno <= 180){
    alert("voce esta reprovado, falta " +alta +" para voce passar" )
};
