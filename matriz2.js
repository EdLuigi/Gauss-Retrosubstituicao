const matriz2 = () => {
    pai = $('#matriz2');
    limpaDOM($('#matriz2'));
    limpaDOM($('#solucoes'));
    criaTitulo(`Matriz resolvida:`);
};

const mostrarMatriz = () => {
    for (i = 0; i < ordem; i++) {
        for (j = 0; j < ordem; j++) {
            pai.appendChild(criaIndice(i, j, matriz[i][j]));
        }
        pai.appendChild(criaEspaco());
        pai.appendChild(criaIndice(i, ordem, v_solucoes[i]));
        pai.appendChild(document.createElement('br'));
    }
    pai.appendChild(document.createElement('br'));
};