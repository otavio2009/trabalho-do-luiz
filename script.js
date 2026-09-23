// Selecionando os elementos da página
const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");
const titulo = document.querySelector("#titulo");

// Função que revela a piada e altera a página de forma visível
function mostrarResposta() {
    // Altera o título principal
    titulo.textContent = "Resposta Exata! 😂";
    
    // Altera o texto da mensagem mostrando a interação da piada
    mensagem.textContent = "Todos eles! kkkkkkkkk Todos os meses têm pelo menos 28 dias!";
    
    // Altera o visual do botão usando aspas corretamente (assim o código não trava)
    botao.textContent = "Muito fácil!";
    botao.style.backgroundColor = "#27ae60"; 
    botao.style.cursor = "default";
    botao.disabled = true;
}

// Configurando o clique para rodar a função
botao.addEventListener("click", mostrarResposta);
