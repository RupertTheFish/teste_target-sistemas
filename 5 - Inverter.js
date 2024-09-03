/*5) Escreva um programa que inverta os caracteres de um string. 

IMPORTANTE: 
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
b) Evite usar funções prontas, como, por exemplo, reverse; 
 */

function inverter_string(string) {
    let nova_string = "";
    for (let i = string.length - 1; i >= 0; i--) {
        nova_string += string[i];
    }
    return nova_string;
}

// Exemplo de uso:
const minha_string = "Olá, mundo!";
const string_invertida = inverter_string(minha_string);
console.log(string_invertida); // Imprime "!odnum ,álO"

