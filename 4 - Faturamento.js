/*
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
*/

function calcularPercentualFaturamento(faturamentosPorEstado) {
    let faturamentoTotal = 0;
    const percentuais = {};

    // Calcula o faturamento total
    for (const estado in faturamentosPorEstado) {
        faturamentoTotal += faturamentosPorEstado[estado];
    }

    // Calcula o percentual de cada estado
    for (const estado in faturamentosPorEstado) {
        percentuais[estado] = ((faturamentosPorEstado[estado] / faturamentoTotal) * 100).toFixed(2);
    }

    return percentuais;
}

// Dados de exemplo
const faturamentos = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Chamando a função e exibindo o resultado
const resultado = calcularPercentualFaturamento(faturamentos);
console.log(resultado);