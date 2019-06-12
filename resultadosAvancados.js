let linhas_nulas_principal, linhas_nulas_ampliada;

const resultadosAvancados = () => {
	pai = $("#solucoes");
	resetaVetores();
	linhasNulasPrincipalAmpliada();

	if (linhas_nulas_principal.length === linhas_nulas_ampliada.length) {
		n = linhas_nulas_principal.length;
		linha =
			"A solução do sistema Ax=b não é única, " +
			(n === 1
				? "existe 1 variável independente"
				: `existem ${n} variáveis independentes`);
		criaTitulo(linha);
	} else {
		criaTitulo("O sistema Ax=b não admite solução. STOP.");
	}
};

const resetaVetores = () => {
	linhas_nulas_principal = new Array();
	linhas_nulas_ampliada = new Array();
};

const linhasNulasPrincipalAmpliada = () => {
	for (i = 0; i < ordem; i++) {
		(contador_linhas_nulas1 = 0), (contador_linhas_nulas2 = 0);

		for (j = 0; j < ordem; j++) {
			if (matriz[i][j] === 0) {
				contador_linhas_nulas1++;
				contador_linhas_nulas2++;
			}
		}
		if (v_solucoes[i] === 0) contador_linhas_nulas2++;

		if (contador_linhas_nulas1 === ordem) linhas_nulas_principal.push(i);
		if (contador_linhas_nulas2 === ordem + 1) linhas_nulas_ampliada.push(i);
	}
};
