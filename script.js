function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quant){
    this.preco += quant
}

Produto.prototype.desconto = function(quant){
    this.preco -= quant
}

function Camisa(nome, preco, cor){
    Produto.call(this,nome,preco,cor)
}
Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa

let produto1 = new Produto('Gen', 111)
let camisa1 = new Camisa('Regata', 49.99, 'Preta')
console.log(produto1)
console.log(camisa1)