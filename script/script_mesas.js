// Seleciona todos os botões "Quero Participar"
const joinButtons = document.querySelectorAll('.join-button');

// Seleciona o modal, o botão de fechar e a notificação
const modal = document.getElementById('participationModal');
const closeModal = modal.querySelector('.close');
const notification = document.getElementById('notification');

// Função para abrir o modal
joinButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

// Função para fechar o modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Função para enviar o formulário e mostrar a notificação
document.getElementById('participationForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você pode processar os dados coletados, enviar para o servidor, etc.
    const discord = document.getElementById('discord').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const availability = document.getElementById('availability').value;

    // Exemplo de como os dados podem ser enviados ou processados
    console.log(`Discord: ${discord}, Nome: ${name}, Idade: ${age}, Disponibilidade: ${availability}`);

    // Exibe a notificação
    notification.style.display = 'block';

    // Fecha o modal
    modal.style.display = 'none';

    // Esconde a notificação após 3 segundos
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
});

// Fecha o modal se clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
