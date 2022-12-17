const codigo_de_acesso = document.querySelector('#codigo-de-acesso');

const botao_consultar = document.querySelector('#botao-consultar');

const label_status = document.querySelector('#status');

const cartao_resposta = document.querySelector('#cartao-resposta');

const lista = [
    [1557459, 'a', 'sc', 1],
    [1550679, 'a', 'sc', 2],
    [1534620, 'a', 'pe', 1],
    [1565038, 'a', 'pe', 2],
    [1559108, 'a', 'pe', 3],
    [1530609, 'a', 'pe', 4],
    [1357370, 'b', 'sc', 1],
    [1106844, 'b', 'sc', 2],
    [1519885, 'b', 'pe', 1],
    [1566897, 'b', 'pe', 2],
    [1505664, 'b', 'pe', 3],
    [1532357, 'b', 'pe', 4],
    [1529077, 'c', 'sc', 1],
    [1565412, 'c', 'sc', 2],
    [1525372, 'c', 'pe', 1],
    [1519358, 'c', 'pe', 2],
    [1536499, 'c', 'pe', 3],
    [1526438, 'c', 'pe', 4],
    [1529790, 'd', 'pe', 1],
    [1551353, 'd', 'pe', 2],
];

const consultar = (codigo) => {
    for (i = 0; i < lista.length; i++) {
        if (lista[i][0] === codigo) return lista[i];
    }
    return null;
};

botao_consultar.addEventListener('click', () => {
    label_status.innerText = '';
    cartao_resposta.removeAttribute('src');
    codigo = parseInt(codigo_de_acesso.value);
    retorno = consultar(codigo);
    if (retorno !== null) {
        label_status.innerText = `Código: ${retorno[0]} - Tipo de Prova: ${retorno[1].toUpperCase()} - Sequencial: ${retorno[2].toUpperCase()}_${retorno[1].toUpperCase()}${retorno[3]}`;
        cartao_resposta.setAttribute('src', `img/${retorno[1]}/${retorno[2]}_${retorno[1]}${retorno[3]}.jpg`);
    } else {
        label_status.innerText = 'Verifique o código digitado!';
    }
});

codigo_de_acesso.addEventListener('click', () => {
    label_status.innerText = '';
    cartao_resposta.removeAttribute('src');
});

codigo_de_acesso.addEventListener('keypress',  (e) => {
    if(e.which == 13){
       botao_consultar.click();
    } else {
        codigo_de_acesso.click();
    }
});