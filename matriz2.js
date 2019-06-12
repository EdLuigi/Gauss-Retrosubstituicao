const matriz2 = () => {
	pai = $("#matriz2");
	limpaDOM($("#matriz2"));
	limpaDOM($("#solucoes"));
	criaTitulo(`Matriz escalonada:`);
	mostrarMatriz();
};

const mostrarMatriz = () => {
	for (i = 0; i < ordem; i++) {
		for (j = 0; j < ordem; j++) {
			criaIndice(i, j, matriz[i][j]);
		}
		criaEspaco();
		criaIndice(i, ordem, v_solucoes_escalonado[i]);
		criaQuebraDeLinha();
	}
	criaQuebraDeLinha();
};
