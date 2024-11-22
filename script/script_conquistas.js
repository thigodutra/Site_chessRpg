document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('infoModal');
    const modalInfo = document.getElementById('modal-info');
    const closeBtn = modal.querySelector('.close-btn');

    // Adiciona evento de clique em todas as imagens com "data-info"
    document.querySelectorAll('img[data-info]').forEach(img => {
        img.addEventListener('click', () => {
            const info = img.getAttribute('data-info');
            modalInfo.innerHTML = info; // Adiciona o conteúdo ao modal
            modal.style.display = 'flex'; // Exibe o modal
        });
    });

    // Fecha o modal ao clicar no botão de fechar
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha o modal ao clicar fora da área de conteúdo
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

