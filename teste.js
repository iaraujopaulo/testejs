let preco = 100;

let desconto = preco * 0.1;

let valorDesconto = preco - desconto;

//ler texto = "de" + preco + "por" + valorDesconto;
//let texto = "de".concat(preco, "por", valorDesconto);
let texto = `De ${preco} por ${valorDesconto}`;

console.log  (texto);  

