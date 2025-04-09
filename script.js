// Carrega as falhas do JSON e atualiza a interface
async function carregarFalhas() {
    try {
        const resposta = await fetch('falhas.json');
        const falhas = await resposta.json();
        
        // Seleciona os elementos de resultado
        const resultados = document.querySelectorAll('.resultado');
        
        // Mapeia cada categoria para um elemento
        const categorias = ['proxima', 'distancia', 'desarmada', 'magia'];
        
        // Para cada categoria, pega uma falha aleatória e atualiza o texto
        categorias.forEach((categoria, index) => {
            const listaFalhas = falhas[categoria];
            const falhaAleatoria = listaFalhas[Math.floor(Math.random() * listaFalhas.length)];
            resultados[index].textContent = falhaAleatoria;
        });
    } catch (erro) {
        console.error('Erro ao carregar falhas:', erro);
    }
}

// Adiciona o evento de clique ao botão
document.querySelector('.botao').addEventListener('click', carregarFalhas);

// Opcional: Carrega uma falha inicial ao abrir a página
carregarFalhas();