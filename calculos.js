const $ = document.querySelector.bind(document);
let matriz,
	v_solucoes,
	matriz_original = 0,
	v_solucoes_original = 0,
	analiseAvancada,
	v_solucoes_escalonado;

const calculos = () => {
	resetaVariaveis();
	valoresMatriz();
	try {
		gauss();
		retrosubstituicao();
		matriz2();
		console.log(`${analiseAvancada}\n--------------`);
		if (analiseAvancada) {
			resultadosAvancados();
		} else {
			resultadosIndividuais();
		}
	} catch (e) {
		pai = $("#solucoes");
		limpaDOM(pai);
		limpaDOM($("#matriz2"));
		mensagemDeErro();
	}
};

const resetaVariaveis = () => {
	matriz = new Array(ordem);
	matriz_original = new Array(ordem);
	v_solucoes = new Array();
	v_solucoes_original = new Array();
	analiseAvancada = false;
};

const valoresMatriz = () => {
	for (i = 0; i < ordem; i++) {
		matriz[i] = new Array();
		matriz_original[i] = new Array();
		for (j = 0; j < ordem; j++) {
			matriz[i].push(Number($(`#a${i}a${j}`).value));
			matriz_original[i].push(Number($(`#a${i}a${j}`).value));
		}
		v_solucoes.push(Number($(`#a${i}a${ordem}`).value));
		v_solucoes_original.push(Number($(`#a${i}a${ordem}`).value));
	}
};

const gauss = () => {
	for (i = 0; i < ordem - 1; i++) {
		if (matriz[i][i] === 0) definirNovoPivo(i);
		for (j = i + 1; j < ordem; j++) {
			if (matriz[i][i] === 0) {
				m = 0;
				setAnaliseAvancada();
			} else {
				m = matriz[j][i] / matriz[i][i];
			}
			for (k = i + 1; k < ordem; k++) {
				matriz[j][k] = matriz[j][k] - m * matriz[i][k];
			}
			v_solucoes[j] = v_solucoes[j] - m * v_solucoes[i];
			matriz[j][i] = 0;
		}
	}
	v_solucoes_escalonado = v_solucoes;
};

const definirNovoPivo = i => {
	let maior = i;
	for (j = i + 1; j < ordem; j++) {
		if (valorAbsoluto(matriz[j][i]) > matriz[i][i]) {
			maior = j;
			break;
		}
	}
	trocaDeLinhas(maior, i);
};

const trocaDeLinhas = (maior, i) => {
	for (k = i; k < ordem; k++) {
		aux = matriz[i][k];
		matriz[i][k] = matriz[maior][k];
		matriz[maior][k] = aux;
	}
	aux = v_solucoes[i];
	v_solucoes[i] = v_solucoes[maior];
	v_solucoes[maior] = aux;
};

const retrosubstituicao = () => {
	try {
		aux = new Array(ordem);
		// if (matriz[ordem - 1][ordem - 1] === 0) throw new Error("divisão por 0");
		if (matriz[ordem - 1][ordem - 1] === 0) throw new Exception();
		aux[ordem - 1] = v_solucoes[ordem - 1] / matriz[ordem - 1][ordem - 1];

		for (i = ordem - 2; i >= 0; i--) {
			soma = 0;
			for (j = i + 1; j < ordem; j++) soma += matriz[i][j] * aux[j];
			// if (matriz[i][i] === 0) throw new Error("divisão por 0");
			if (matriz[i][i] === 0) throw new Exception();
			aux[i] = (v_solucoes[i] - soma) / matriz[i][i];
		}
		v_solucoes = aux;
	} catch (e) {
		setAnaliseAvancada();
	}
};

const valorAbsoluto = valor => {
	if (valor < 0) return valor * -1;
	else return valor;
};

const setAnaliseAvancada = () => {
	analiseAvancada = true;
};
