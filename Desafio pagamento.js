function calcularValorFinal(precoEtiqueta, condicaoPagamento) {
    let valorFinal;

    switch(condicaoPagamento) {
        case 'dinheiro':
        case 'pix':
            valorFinal = precoEtiqueta * 0.90; 
            break;
        case 'cartao':
            valorFinal = precoEtiqueta * 0.95; 
            break;
        case '2x':
            valorFinal = precoEtiqueta; 
            break;
        case '3x ou mais':
            valorFinal = precoEtiqueta * 1.10; 
            break;
        default:
            console.log("Condição de pagamento inválida.");
            return null;
    }

    return valorFinal;
}


const precoEtiqueta = 100.00; 
const condicaoPagamento = 'pix'; 

const valorAPagar = calcularValorFinal(precoEtiqueta, condicaoPagamento);
if (valorAPagar !== null) {
    console.log(`O valor a ser pago é: R$ ${valorAPagar.toFixed(2)}`);
}
