/* 
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).*/

alert("Iremos realizar as operações matemáticas!!!")
let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let resultSum = firstNumber + secondNumber
let resultSub = firstNumber - secondNumber
let resultMulti = firstNumber * secondNumber
let resultDiv = (firstNumber / secondNumber).toFixed(2)
let resultRestDiv = firstNumber % secondNumber



alert(`A soma dos dois números é: ${resultSum}`)
alert(`A subtração dos dois números é: ${resultSub}`)
alert(`A multiplicação dos dois números é: ${resultMulti}`)
alert(`A divisão dos dois números é: ${resultDiv}`)
alert(`O resto da divisão dos dois números é: ${resultRestDiv}`)

if (resultRestDiv != 0 ){
  alert(`a soma dos dois números é impar.`)
} else{
  alert(`a soma dos dois números é par.`)
}

if(firstNumber === secondNumber){
  alert(`os dois números inseridos são iguais`)
} else {
  alert(`os dois números inseridos são diferentes`)
}