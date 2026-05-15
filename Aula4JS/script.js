let produto = [];
let preço = [];
let posicao = 0;

function guardar(){
    let produtos = document.getElementById("produto").value;
    let preco = document.getElementById("preco").value;
        if (produtos == "" || preco == ""){
            document.getElementById("mensagem").textContent = "Preencha o campo";
           document.getElementById("mensagem").style.color = "red";
        }
        else {
            produto.push(produtos);
            preço.push(preco);
            document.getElementById("mensagem").textContent = "Produto adicionado";
            mensagem.style.color = "green"
            
        }
}

function mostrar(){
    let quantidade = document.getElementById("quantidade").textContent;
    document.getElementById("quantidade").textContent = quantidade + "    " + produto[posicao] + ", preço R$" + preço[posicao] + "      |";
    posicao = posicao + 1;
        
}