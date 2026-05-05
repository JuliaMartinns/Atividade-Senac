function mostrar10(){
    let ver10 = 10;
    if (ver10 == 10)
        alert("O número é 10");
}
function Julia(){
let Julia = "Júlia";
    if (Julia == "Júlia")
        alert("O nome é Júlia");
    }

function mostrarOk(){
    let verOk = document.getElementById("ok").value;
    if (verOk == "ok"){
        alert("Verificado!")};
}

function cinco(){
    let num5 = document.getElementById("Num5").value;
    if (num5 == "5"){
        alert("certa resposta!")};
}

function verificar(){
    let senha = document.getElementById("caixinha").value;
    if (senha == "admin"){
       document.getElementById("pf1").textContent = "Correto!";
}
}

function alterar1(){
    let caixa = document.getElementById("escrita").value;
    if (caixa == "teste"){
        document.getElementById("alteravel").textContent = "O resto é sutiã";
    }
}

function corzinha(){
    let caixinha = document.getElementById("cor").value;
    if (caixinha =="azul"){
        document.getElementById("vermelho").style.backgroundColor = "blue";
    }
}

function que10(){
    let numero = document.getElementById("maior").value;
        if (numero > 10){
            document.getElementById("verificação").textContent = "É maior que 10."
        }
}

function que50(){
    let numero2 = document.getElementById("menor").value;
     if (numero2 < 50){
            document.getElementById("verificação2").textContent = "É menor que 50."
        }
}

function alterar(){
    let escrita = document.getElementById("mudar").value;
      if (escrita == "senha"){
        document.getElementById("textinho").textContent = "Texto alterado com sucesso!"
      }
}

function modo(){
    let text = document.getElementById("fundo").value;
     if (text == "escuro"){
        document.body.style.backgroundColor = "black";
     }
}

function alteração(){
    let CorTexto = document.getElementById("mudança").value;
    let m5 = document.getElementById("pm5");
    if (CorTexto == "cortxt"){
        m5.style.color="red";
        m5.textContent="foi alterado";
    }
}


function página(){
    let MudarTD = document.getElementById("testezinho").value;
     if (MudarTD == "teste"){
        document.body.style.backgroundColor = "pink";
     }
}

function tamanho(){
    let numeroo = document.getElementById("size").value;
    if (numeroo > 20){
        document.getElementById("ajuste").style.fontSize = "50px"
    }
}

function Bemvindo(){
    let magica = document.getElementById("nome").value;
    if (magica == "admin"){
        document.getElementById("Pg4").textContent = "Bem vindo!";
    }
}

function Confira(){
    let conferir = document.getElementById("conferir").value;
    let numr2 = document.getElementById("numr2");
    let exercicio2 = document.getElementById("ex2");
    if (conferir == "mudar"){
        numr2.style.background = "blue";
        numr2.style.color = "white";
        numr2.style.fontSize = "8px"; 
        exercicio2.textContent = "Exercício 2 concluído!";

    }
}

function vermelhinho(){
    let juju = document.getElementById("moranguinho").value;
     if (juju == "Vermelho"){
        document.body.style.fontSize = "50px";
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        document.body.style.textAlign = "center";
     }
}

function MaiorQ100(){
    let numerooo = document.getElementById("100").value;
    if (numerooo > 100){
        document.body.style.backgroundColor = "grey";
    }
}

function colar(){
    let copiar = document.getElementById("Copiar").value;
    let copiar2 = document.getElementById("Copiar2").value;
    let texto = document.getElementById("Texto");
    if (copiar == "juju"){
        texto.innerHTML = copiar2;
    }
}

function DIVS(){
    let valorzinho = document.getElementById("valor").value;
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2")
    if (valorzinho == 67){
        div1.style.backgroundColor="red";
        div2.style.backgroundColor="blue";
        document.getElementById("correção").textContent = "Certa resposta!";
    }     
}

function IDADE(){
    let gestor = document.getElementById("idade").value;
      if (gestor == 29){
        document.body.style.backgroundColor = "purple";
      }
}


