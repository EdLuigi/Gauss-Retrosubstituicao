let arr_results = new Array(),
	respostaCerta;

const resultadosIndividuais = () => {
	pai = $("#solucoes");
	criaTitulo("Resultados (Retrosubstituição):");
	variaveis();
	criaQuebraDeLinha();

	setRespostaCerta(true);
	equacoes();
	if (respostaCerta) {
		criaTitulo("SOLUÇÃO CORRETA");
	} else {
		criaTitulo("SOLUÇÃO INCORRETA. APLICAR GAUSS COM PIVOTAMENTO");
	}
};

const variaveis = () => {
	for (i = 0; i < ordem; i++) {
		criaNomeVariavel(`x${i + 1}: `);
		criaIndice(0, 0, `${v_solucoes[i]}`);
		criaQuebraDeLinha();
	}
};

const equacoes = () => {
	let linha = "";

	matriz_original.forEach((v, i, a) => {
		linha = "";
		somatorio = v_solucoes.map((v2, i2, a2) => {
			let a = v[i2],
				b = v2;
			linha += `(${a} x ${b}) + `;
			return Number(a) * Number(b);
		});

		somatorio = resultadoFinal(somatorio);
		somatorio_arredondado = arredondaDecimais(somatorio, 2);

		linha =
			linha.substr(0, linha.length - 2) +
			"= " +
			somatorio +
			" ≅ " +
			somatorio_arredondado;

		criaEquacao(linha, validaResultados(somatorio_arredondado, i));
		criaQuebraDeLinha();
	});
};

const resultadoFinal = r => {
	r = r.reduce((a, b) => a + b, 0);
	arr_results.push(r);
	return r;
};

const validaResultados = (a, i) => {
	if (a == v_solucoes_original[i]) {
		return true;
	} else {
		setRespostaCerta(false);
	}
	return false;
};

const arredondaDecimais = (num, dec) =>
	Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);

const setRespostaCerta = bol => {
	respostaCerta = bol;
};
