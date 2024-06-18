
// Função que faz o sorteio dos números
function sortear() {

    // pega os valores de Quantidade, Máximo e Mínimo informados nos inputs do index.html
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de > ate) {
        alert('O número "de" deve ser menor que o número "até", tente novamente!');
        reiniciar();
    }

    let result = ate - de;
    if (result < quantidade){
        alert(`A quantidade de números no período informado deve ser igual ou superior à quantidade de números que você deseja sortear. Entre ${de} e ${ate} existem apenas ${result} números, e você quer sortear ${quantidade} números diferentes.`);
        reiniciar();
    }

    // Cria uma lista de números já sorteados vazia
    let sorteados = [];

    // Cria uma variável de numero vazio para ser utilizada
    let numero;

    // Esse loop garante que serão sorteados números na quantidade certa e sem repetir qualquer número:
    // Para cada número dentro da quantidade informada de números a sortear
    for (let i = 0; i < quantidade; i++) {

        // Se o número já tiver sido sorteado, sorteie outro número
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        // Se o número sorteado ainda não foi sorteado, coloque-o na lista de números sorteados
        sorteados.push(numero);
    }

    // Aqui alteramos o texto do index.html para informar os números sorteados pelo programa.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;

    // Aqui chamamos a função que altera o status do botão de reiniciar o sorteio
    alterarStatusBotao();
}

// Função que obtem um número aleatório entre o máximo e o mínimo informado.
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Função que altera o status do botão de Reiniciar entre ativo e inativo
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Função que limpa todos os campos e altera status do botão
function reiniciar() {

    // Zerando os inputs do index.html
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    // Devolvendo a formatação padrão do textinho do index.html
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;

    // Alterando o status do botão ativo que agora será desativado.
    alterarStatusBotao();
}