function bt1(){
    let let1 = document.getElementById("menor").value;
        if (let1 < 12 && let1 >=1){
            alert("Você é uma criança.");
        }
        else if (let1 >= 12 && let1 <= 17){
            alert("Você é um adolescente.");
        }
        else if (let1 >=18 && let1 <=59){
            alert("Você é um adulto.")
        }

        else if (let1 >= 60){
            alert("Você é um idoso.")
        }

        else {
            alert("Inválido")
            }
}


function BtUS(){
    let inputs = document.getElementById("usuario").value;
    let inputs2 = document.getElementById("senhas").value;
    let input3 = document.getElementById("realizado");
        if (inputs == "admin" && inputs2 == "1234"){
            input3.textContent = "Login realizado com sucesso!";
            alert("Login realizado com sucesso!");
        }
        else if (inputs == "Professor" && inputs2 == "senac"){
            input3.textContent = "Login realizado com sucesso!";
            alert("Login realizado com sucesso!");
            }
         else if (inputs == "" && inputs2 ==""){
            alert("Erro!");
            input3.textContent = "Preencha todos os campos!";
        }
        else {
            input3.textContent = "Usuário ou senha incorretos";
        }

}

function desconto(){
    let valores = document.getElementById("compra").value;
    let valores2 = document.getElementById("vip").value;
    let valores3 = document.getElementById("cupom").value;
    let valoresP = document.getElementById("disconto");
        if( valores == "" && valores2 == "" &&  valores3 == "") {
            valoresP.textContent="Valores invalidos"
        }
        else if (valores >= 500 && valores2 == "sim"){
            valoresP.textContent = valores - (valores / 20)
        } else if (valores >= 300 && valores2 == "" && valores3 == "sim"){
            valoresP.textContent = valores - (valores / 10)
        }
        else if (valores < 300 && valores3 == "não"){
            valoresP.textContent = "Você não possui desconto!" 
        }
        
}

function avaliacione(){
    let nota = document.getElementById("nota").value;
    let freq = document.getElementById("freq").value;
    let p = document.getElementById("pava");
        if( freq > 1 && freq < 75 ){
            p.textContent="Reprovado"
        } 
        if( nota == "" || nota =="" || freq == "" || freq == "") {
           p.textContent="Preencha todos os campos"
        } 

        else if (nota >100 || freq > 100 ){
            p.textContent="Valores inválidos"
        }

        else if (nota >= 60 && freq >=75){
            p.textContent="Aprovado"
        }
        else if (nota >= 40 && nota < 60 && freq >= 75){
            p.textContent="Recuperação"
        }
        else if (nota < 40 || freq < 75){
            p.textContent="Reprovado"
        }
        
            
}


