const resultadosIndividuais = () => {
    pai = $('#solucoes');
    criaTitulo('Resultados:');
    variaveis();
};

const variaveis = () => {


    let erro = false;
    for (i = 0; i < ordem; i++) {
        criaIndice
        let x = document.createElement('a');
        tn = document.createTextNode(`x${i + 1}: `);
        x.appendChild(tn);
        pai.appendChild(x);
        let valor = document.createElement('input');
        console.log(Number(v_solucoes[i]));
        if (isNaN(v_solucoes[i]) || v_solucoes[i] === Infinity || v_solucoes[i] === -Infinity) {
            valor.setAttribute('type', 'text');
            valor.setAttribute('value', 'erro');
            erro = true;
        } else {
            valor.setAttribute('type', 'number');
            valor.setAttribute('value', v_solucoes[i]);
        }
        valor.setAttribute('readOnly', 'true');
        pai.appendChild(valor);
        pai.appendChild(document.createElement('br'));
    }
    if (erro) {
        let x = document.createElement('a');
        tn = document.createTextNode('A matriz inserida não possui solução única!');
        x.appendChild(tn);
        pai.appendChild(x);
    }
};