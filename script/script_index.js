// Script para o Index

// Script para controlar o modal de curiosidades
const modal = document.getElementById("curiositiesModal");
const closeModalBtn = modal ? modal.querySelector(".close") : null; // Verifica se o modal existe

// Função para abrir o modal
function openModal() {
    if (modal) {
        modal.style.display = "block";
    }
}

// Função para fechar o modal
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        if (modal) {
            modal.style.display = "none";
        }
    });
}

// Função para fechar o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
    if (modal && event.target === modal) {
        modal.style.display = "none";
    }
});

// Script para tocar a música de fundo
const backgroundMusic = document.getElementById("background-music");

// Função para iniciar a música ao carregar a página
window.addEventListener("load", () => {
    if (backgroundMusic) {
        backgroundMusic.play();
    }
});

// Função para pausar e continuar a música ao clicar na tela
document.body.addEventListener("click", () => {
    if (backgroundMusic) {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
        }
    }
});

// Script para enviar o formulário de contato
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os dados do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Valida se todos os campos estão preenchidos
        if (name && email && message) {
            formResponse.innerHTML = `<p>Obrigado, ${name}! Sua mensagem foi enviada com sucesso.</p>`;
            contactForm.reset(); // Limpa os campos do formulário após o envio
        } else {
            formResponse.innerHTML = `<p style="color: red;">Por favor, preencha todos os campos.</p>`;
        }
    });
}

// Script para o Carrossel Automático
let currentIndex = 0;  // Índice da imagem atual
const carouselImages = document.querySelectorAll('.carousel-container a');  // Seleciona todas as imagens do carrossel

// Função para mostrar a imagem correta
function showImage(index) {
    // Esconde todas as imagens
    carouselImages.forEach((image, i) => {
        image.style.display = "none";
    });

    // Exibe a imagem que corresponde ao índice
    carouselImages[index].style.display = "block";
}

// Função para mover para a próxima imagem
function moveToNextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length;  // Incrementa o índice e reinicia ao alcançar o final
    showImage(currentIndex);  // Atualiza a imagem exibida
}

// Exibe a primeira imagem ao carregar a página
window.addEventListener("load", () => {
    showImage(currentIndex);

    // Move para a próxima imagem a cada 5 segundos (5000 ms)
    setInterval(moveToNextImage, 5000);
});