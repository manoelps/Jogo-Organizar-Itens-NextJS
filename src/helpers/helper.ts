export function gerarNumerosAleatoriosSemRepeticao(quantidade: number) {
	// Cria um array para armazenar os números aleatórios
	const numerosAleatorios: number[] = [];

	// Loop para gerar a quantidade de números solicitada
	for (let i = 0; i < quantidade; i++) {
		// Gera um número aleatório de 0 a 35
		const numero = Math.floor(Math.random() * 36);

		// Verifica se o número já foi gerado anteriormente
		if (!numerosAleatorios.includes(numero)) {
			// Adiciona o número ao array de números aleatórios
			numerosAleatorios.push(numero);
		} else {
			// Se o número já foi gerado, gera outro número
			i--;
		}
	}

	// Retorna os números aleatórios sem repetição
	return numerosAleatorios;
}
