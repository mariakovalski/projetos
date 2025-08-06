// Variaveis para as opções
var quantidade_a = 0;
var quantidade_b = 0;
var quantidade_c = 0;
var quantidade_d = 0;
var quantidade_e = 0;

// Função para cada select
function contarOpcao(select) {
    if (select.value == 'a') {
        quantidade_a++;
    } else if (select.value == 'b') {
        quantidade_b++;
    } else if (select.value == 'c'){
        quantidade_c++;
    } else if (select.value == 'd'){
        quantidade_d++;
    } else if (select.value == 'e'){
        quantidade_e++;
    }
}

function lerSelects(){
    quantidade_a=0;
    quantidade_b=0;
    quantidade_c=0;
    quantidade_d=0;
    quantidade_e=0;
    // Pega todos os <select> da página e guarda em uma variavel
    const selects = document.querySelectorAll('select');
    // Percorre cada select usando forEach (parecido com loop)
    selects.forEach(contarOpcao);
    // Mostra o resultado no console depois de rodar "todo o loop"
    console.log('Quantidade de A:', quantidade_a);
    console.log('Quantidade de B:', quantidade_b);
    console.log('Quantidade de C:', quantidade_c);
    console.log('Quantidade de D:', quantidade_d);
    console.log('Quantidade de E:', quantidade_e);
    atualizarPorcentagem();
}

function atualizarPorcentagem(){
    const exatbarr = document.getElementById('exatas');
    exatbarr.style.width = quantidade_a*10+'%';
    exatbarr.innerHTML = quantidade_a*10+'% EXATAS E TECNOLOGIA';

    const Artesbarr = document.getElementById('artes');
    Artesbarr.style.width = quantidade_b*10+'%';
    Artesbarr.innerHTML = quantidade_b*10+'% ARTES E LINGUAGEM';

    const Saudebarr = document.getElementById('saude');
    Saudebarr.style.width = quantidade_c*10+'%';
    Saudebarr.innerHTML = quantidade_c*10+'% SAUDE E CAUSAS SOCIAIS';

    const Biobarr = document.getElementById('biologia');
    Biobarr.style.width = quantidade_d*10+'%';
    Biobarr.innerHTML = quantidade_d*10+'% BIOLOGIA E NATUREZA';

    const Negocibarr = document.getElementById('negócios');
    Negocibarr.style.width = quantidade_e*10+'%';
    Negocibarr.innerHTML = quantidade_e*10+'% NEGÓCIOS E ADMINISTRAÇÃO';
    
}