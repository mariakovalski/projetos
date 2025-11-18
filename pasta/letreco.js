idLinha = 1;
let linha = document.getElementById("linha"+idLinha);
let certa="LOGAR";
let botao = document.getElementById("btnTestar");
let input = document.getElementById("entrada");
botao.addEventListener("click",testarPalavra);
input.addEventListener("keydown",detectaEnter);

function detectaEnter(tecla){
    if (tecla.key === "Enter") {
        testarPalavra();
    }
}

function testarPalavra(){
    let palavra = document.getElementById("entrada").value.toUpperCase();
    let certa = "LOGAR";

    for(let i = 0; i < palavra.length; i++){
        let letra = palavra[i];
        let divLetra = document.createElement("div");
        divLetra.classList.add("letra");

        if(letra === certa[i]){
            divLetra.classList.add("certa");
        
        } else if (palavra[i] != certa[i] && certa.includes(letra)){
            divLetra.classList.add("poserr");

        }
        else {
             divLetra.classList.add("errado");
        }

        divLetra.textContent = letra;
        linha.appendChild(divLetra);
    }

    idLinha++;
    linha = document.getElementById("linha"+idLinha);
}


function addCerta(letra){
    console.log(letra);
    let item = document.createElement("div");
    item.classList.add("letra");
    item.classList.add("certa");
    item.textContent = letra;
    linha.appendChild(item);
}