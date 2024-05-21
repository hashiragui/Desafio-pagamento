function calcularValorFinal(precoEtiqueta, condicaoPagamento) {
    let valorFinal;

    switch(condicaoPagamento) {
        case 'dinheiro':
        case 'pix':
            valorFinal = precoEtiqueta * 0.90; // 10% de desconto
            break;
        case 'cartao':
            valorFinal = precoEtiqueta * 0.95; // 5% de desconto
            break;
        case '2x':
            valorFinal = precoEtiqueta; // sem juros
            break;
        case '3x ou mais':
            valorFinal = precoEtiqueta * 1.10; // 10% de juros
            break;
        default:
            console.log("Condição de pagamento inválida.");
            return null;
    }

    return valorFinal;
}

// Exemplo de uso:
const precoEtiqueta = 100.00; // Defina o preço de etiqueta do produto
const condicaoPagamento = 'pix'; // Escolha a condição de pagamento: 'dinheiro', 'pix', 'cartao', '2x', '3x ou mais'

const valorAPagar = calcularValorFinal(precoEtiqueta, condicaoPagamento);
if (valorAPagar !== null) {
    console.log(`O valor a ser pago é: R$ ${valorAPagar.toFixed(2)}`);
}
