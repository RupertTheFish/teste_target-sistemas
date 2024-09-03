/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; 
*/

let listaFib = [0, 1]; // Iniciando um array que contenha os número da sequência Fibonacci
const criaFibonacci = () => {
    const num = parseInt(prompt("Digite o número inteiro que deseja verificar: ")); // Esperando que o usuário digite um número inteiro
    for (let i = 2; i <= 99; i++) {
        listaFib[i] = listaFib[i - 2] + listaFib[i - 1]; // Próximo número Fibonacci = último + penúltimo
        if (listaFib[i] == num) {  
            console.log(`O número ${num} está contido na sequência Fibonacci no termo de número ${listaFib.length}`);
            break; // Se o número é descoberto o programa se encerra e retorna a posição do termo e a verificação
        }
        console.log(`O número ${num} não está contido nos 100 primeiros termos na sequência Fibonacci`); // Caso o número não esteja nos primeiros 100 termos, é retornada a mensagem de falha
    }
}