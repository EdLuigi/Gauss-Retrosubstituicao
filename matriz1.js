const ordemMatriz = () => {
    pai = $('#matriz1');
    ordem = Number($('#ordem').value);
    limpaDOM($('#matriz1'));
    limpaDOM($('#matriz2'));
    limpaDOM($('#solucoes'));
    criaTitulo(`Matriz ${ordem}x${ordem} gerada:`);
    criaMatriz();
    criaBotoes();
};

const valoresAleatorios = () => {
    for (i = 0; i < ordem; i++) {
        for (j = 0; j <= ordem; j++) {
            $(`#a${i}a${j}`).value = Math.floor(Math.random() * 30);
        }
    }
}
