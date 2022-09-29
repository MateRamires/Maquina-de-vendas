const ponto = document.getElementById("ponto");

const imagemProduto = document.getElementById("imagemProduto");
const nomeProduto = document.getElementById("nomeProduto");
const valorTotal = document.getElementById("valorTotal");
const EstoqueDisponivel = document.getElementById("EstoqueProduto");


const numDigitado1 = document.getElementById("numDigitado1");
const numDigitado2 = document.getElementById("numDigitado2");
const numDigitado3 = document.getElementById("numDigitado3");
const numDigitado4 = document.getElementById("numDigitado4");

const estoqueProduto = document.getElementById("produtoEstoque1");
const estoqueProduto2 = document.getElementById("produtoEstoque2");
const estoqueProduto3 = document.getElementById("produtoEstoque3");


const saldoUsuario = document.getElementById("saldoUsuario");

const valorTotalAPagar = document.getElementById("valorTotalAPagar");

const quantidadeAComprar = document.getElementById("quantidade");


let numeroAtual = 1;

let valorFinal = 0;

let valorProdAtual = 27.00;

let produtoAtual = 1;


function mudarProduto(produtoId) {

    if (produtoId == 1) {
        imagemProduto.src = "./images/arroz.jpg";
        nomeProduto.innerHTML = "Arroz Branco";
        valorTotalAPagar.innerHTML = "27.00";
        EstoqueDisponivel.innerHTML = estoqueProduto.innerHTML;
        valorProdAtual = 27.00;
        produtoAtual = 1;
    } else if (produtoId == 2) {
        imagemProduto.src = "./images/detergente.jpg";
        nomeProduto.innerHTML = "Detergente";
        valorTotalAPagar.innerHTML = "2.50";
        EstoqueDisponivel.innerHTML = estoqueProduto2.innerHTML;
        valorProdAtual = 2.50;
        produtoAtual = 2;
    } else {
        imagemProduto.src = "./images/coca.jpg";
        nomeProduto.innerHTML = "Coca-Cola";
        valorTotalAPagar.innerHTML = "9.00";
        EstoqueDisponivel.innerHTML = estoqueProduto3.innerHTML;
        valorProdAtual = 9.00;
        produtoAtual = 3;
    }

    quantidadeAComprar.value = 1;



}

function digitarValor(valor) {

    if (numeroAtual == 1) {
        numDigitado1.innerHTML = valor;
        numeroAtual += 1;
    } else if (numeroAtual == 2) {
        numDigitado2.innerHTML = valor;
        numeroAtual += 1;
    } else if (numeroAtual == 3) {
        ponto.style.display = "block";
        numDigitado3.innerHTML = valor;
        numeroAtual += 1;
    } else if (numeroAtual == 4) {
        numDigitado4.innerHTML = valor;
        valorFinal = numDigitado1.innerHTML + numDigitado2.innerHTML + "." + numDigitado3.innerHTML + numDigitado4.innerHTML;
        numeroAtual += 1;
    } else {
        Swal.fire(
            'Erro: Você não pode digitar mais que 5 números!'
        )

    }


}


function adicionarSaldo() {

    if (numeroAtual == 5) {
        let valorSaldo = parseFloat(saldoUsuario.innerHTML);

        let valorASerAdicionado = parseFloat(valorFinal);

        let resultado = (valorSaldo + valorASerAdicionado).toFixed(2);

        resultado = resultado.toString();

        saldoUsuario.innerHTML = resultado;

        Swal.fire(
            'Saldo adicionado com sucesso!'
        )
        
        LimparNumerosDigitados();

    } else {
        Swal.fire(
            'Por favor, digite todos os 4 números. (Ex: 31.55 R$)'
        )
    }




}

function retirarDinheiro() {

    if (numeroAtual == 5) {

        let valorSaldo = parseFloat(saldoUsuario.innerHTML);

        let valorASerRetirado = parseFloat(valorFinal);

        if (valorSaldo >= valorASerRetirado) {
            let resultado = (valorSaldo - valorASerRetirado).toFixed(2);

            resultado = resultado.toString();

            saldoUsuario.innerHTML = resultado;

            Swal.fire(
                'Saldo retirado com sucesso!'
            )
        } else {
            Swal.fire(
                'Erro: Você pediu para retirar mais saldo do que possui!'
            )
        }

        LimparNumerosDigitados();

    } else {
        Swal.fire(
            'Por favor, digite todos os 4 números. (Ex: 31.55 R$)'
        )
    }

}

function mudarQuantidadeProduto(quantidade) {

    resultado = valorProdAtual * quantidade;

    resultado = resultado.toFixed(2).toString();

    valorTotalAPagar.innerHTML = resultado;

}

function comprarProduto() {

    let quantidadeComprar = parseInt(quantidadeAComprar.value);

    let estoque = parseInt(EstoqueDisponivel.innerHTML);

    let valorTotal = parseFloat(valorTotalAPagar.innerHTML);

    let saldo = parseFloat(saldoUsuario.innerHTML);


    if (quantidadeComprar <= estoque) {

        if (valorTotal <= saldo) {

            Swal.fire(
                'Produto comprado com sucesso!'
            )

            saldoUsuario.innerHTML = (saldo - valorTotal).toFixed(2).toString();

            mudarEstoque(quantidadeComprar);


        } else {

            Swal.fire(
                'Saldo Insuficiente!'
            )

        }


    } else {

        Swal.fire(
            'Quantidade Indisponivel!'
        )

    }

}

function mudarEstoque(quantidade){

    let estoque1 = parseInt(estoqueProduto.innerHTML);
    let estoque2 = parseInt(estoqueProduto2.innerHTML);
    let estoque3 = parseInt(estoqueProduto3.innerHTML);

    let estoqueDoProdutoAtual = EstoqueDisponivel.innerHTML

    if(produtoAtual == 1){
        estoque1 -= quantidade;
        estoqueDoProdutoAtual -= quantidade;
        estoqueProduto.innerHTML = estoque1.toString();
        EstoqueDisponivel.innerHTML = estoqueDoProdutoAtual.toString();
    } else if(produtoAtual == 2){
        estoque2 -= quantidade;
        estoqueDoProdutoAtual -= quantidade;
        estoqueProduto2.innerHTML = estoque2.toString();
        EstoqueDisponivel.innerHTML = estoqueDoProdutoAtual.toString();
    } else {
        estoque3 -= quantidade;
        estoqueDoProdutoAtual -= quantidade;
        estoqueProduto3.innerHTML = estoque3.toString();
        EstoqueDisponivel.innerHTML = estoqueDoProdutoAtual.toString();
    }

}


function LimparNumerosDigitados() {

    numDigitado1.innerHTML = "";
    numDigitado2.innerHTML = "";
    numDigitado3.innerHTML = "";
    numDigitado4.innerHTML = "";

    ponto.style.display = "none";

    numeroAtual = 1;

    valorFinal = 0;

}