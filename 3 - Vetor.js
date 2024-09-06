/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: 
• O menor valor de faturamento ocorrido em um dia do mês; 
• O maior valor de faturamento ocorrido em um dia do mês; 
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 

IMPORTANTE: 
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; 
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; 
*/

// Buscando o arquivo
$.getJSON("faturamentos.json", function (data) {
    array.forEach(element => {
        // Parsear o JSON para um objeto JavaScript
        const dados = JSON.parse(dadosJSON);

        // Filtrar os dias com faturamento e calcular a média
        const diasComFaturamento = dados.filter(dia => dia.valor > 0);
        const somaFaturamento = diasComFaturamento.reduce((total, dia) => total + dia.valor, 0);
        const mediaMensal = somaFaturamento / diasComFaturamento.length;

        // Encontrar o menor e maior valor
        const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
        const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

        // Contar os dias acima da média
        const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

        return {
            menorValor,
            maiorValor,
            mediaMensal,
            diasAcimaDaMedia
        };
    });
})

function analisarFaturamento(dadosJSON) {
    // Parsear o JSON para um objeto JavaScript
    const dados = JSON.parse(dadosJSON);

    // Filtrar os dias com faturamento e calcular a média
    const diasComFaturamento = dados.filter(dia => dia.valor > 0);
    const somaFaturamento = diasComFaturamento.reduce((total, dia) => total + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    // Encontrar o menor e maior valor
    const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

    // Contar os dias acima da média
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        mediaMensal,
        diasAcimaDaMedia
    };
}

// Exemplo de uso:
const dadosJSON = '[{"data": "2023-11-01", "valor": 1000}, {"data": "2023-11-02", "valor": 0}, {"data": "2023-11-03", "2000"}]';
const resultado = analisarFaturamento(dadosJSON);

console.log("Menor valor:", resultado.menorValor);
console.log("Maior valor:", resultado.maiorValor);
console.log("Média mensal:", resultado.mediaMensal);
console.log("Dias acima da média:", resultado.diasAcimaDaMedia);