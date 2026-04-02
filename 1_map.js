// const numeros = [99, 56, 34, 45, 76];

// const numerosMultiplicados = numeros.map((numero,posicaoArray, arrayCompleto) => {
//     console.log(`Número: ${numero}, Posição: ${posicaoArray}, Array Completo: ${arrayCompleto}`);
//     return numero * 2;
// });
// console.log(numerosMultiplicados);

const produtos = [
    {id: 1, nome: 'Camisa', preco: 100.00, quantidade: 10, desconto: true},
    {id: 2, nome: 'Calça', preco: 49.99, quantidade: 5, desconto: false},
    {id: 3, nome: 'Tênis', preco: 89.99, quantidade: 2, desconto: true},
    {id: 4, nome: 'Boné', preco: 19.99, quantidade: 20, desconto: false},
    {id: 5, nome: 'Meia', preco: 9.99, quantidade: 50, desconto: true},
    {id: 6, nome: 'Jaqueta', preco: 199.99, quantidade: 3, desconto: false},
];

const produtosComDesconto = produtos.map((produto) => {
    const desconto = produto.desconto ? 0.1 : 0; // 10% de desconto se aplicável
    const precoComDesconto = produto.preco * (1 - desconto); // 100 * (1 - 0.1) = 90
    const precoTotal = precoComDesconto * produto.quantidade; // 90 * 10 = 900

    return {
        id: produto.id,
        nome: produto.nome,
        quantidade: produto.quantidade,
        desconto: produto.desconto ? 'Sim' : 'Não',
        //...produto, // Spread operator para manter as propriedades originais do produto
        preco: precoComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}),
        precoTotal: precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}),

    };
})

console.log(produtosComDesconto);