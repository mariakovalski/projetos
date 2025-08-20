var num,operacao;
function adicionarNaTela(num){
    document.getElementById('tela').value += num;
}

function Limpar(){
    document.getElementById('tela').value="";
}

function Opera(opc){
    operacao=opc;
    if(opc==1){
        Primeiro=parseFloat(document.getElementById('tela').value);
        Limpar();
    }
   if(opc==2){
        Primeiro=parseFloat(document.getElementById('tela').value);
        Limpar();
    }
    if(opc==3){
        Primeiro=parseFloat(document.getElementById('tela').value);
        Limpar();
    }
    if(opc==4){
        Primeiro=parseFloat(document.getElementById('tela').value);
        Limpar();
    }
}

function Igual(){
    if(operacao==1){
        Segundo= parseFloat(document.getElementById('tela').value);
        document.getElementById('tela').value = Primeiro+Segundo;
    }
    if(operacao==2){
        Segundo= parseFloat(document.getElementById('tela').value);
        document.getElementById('tela').value = Primeiro-Segundo;
    }
     if(operacao==3){
        Segundo= parseFloat(document.getElementById('tela').value);
        document.getElementById('tela').value = Primeiro*Segundo;
    }
     if(operacao==4){
        Segundo= parseFloat(document.getElementById('tela').value);
        document.getElementById('tela').value = Primeiro/Segundo;
    }
}