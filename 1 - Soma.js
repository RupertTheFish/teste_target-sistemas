/*
1)	Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0; 
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA); 
Ao final do processamento, qual será o valor da variável SOMA? 
*/
function soma(){

const indice = 13; //Índice desejado 
let soma = 0;
for(let k=0; k < indice; k++ ) {
    soma = soma + k;
}
console.log(`A soma da variável 'soma' até o Índice 13 é ${soma}`)

}

