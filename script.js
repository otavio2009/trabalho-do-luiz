// Seleção dos elementos do DOM
const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");
const titulo = document.querySelector("#titulo");

// Função que será executada no clique
function mostrarCuriosidade() {
    // Altera o título da página
    titulo.textContent = "Inseto Real! 🪲";
    
    // Altera o texto do parágrafo com a explicação detalhada
    mensagem.textContent = "Em 1947, a analista Grace Hopper encontrou uma mariposa real travando os contatos de um relé do computador Harvard Mark II. Ela removeu o inseto e o colou no diário de bordo, chamando o processo de 'debugging' (depuração).";
    
    // Altera o visual do botão e desabilita após o clique
    botao.textContent = "Curiosidade Revelada!";
    botao.style.backgroundColor = #28a745;
    botao.style.cursor = "default";
    botao.disabled = true;
}

// Ouvinte de evento para disparar a função através do clique
botao.addEventListener("click", mostrarCuriosidade);
