document.addEventListener('DOMContentLoaded', () => {
    // Atualizar links do menu com a URL atual
    const navLinks = document.querySelectorAll('.nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Carrossel de imagens
    const carouselImages = document.querySelectorAll('.carousel-container img');
    let carouselIndex = 0;

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextImage() {
        carouselIndex = (carouselIndex + 1) % carouselImages.length;
        showImage(carouselIndex);
    }

    showImage(carouselIndex);
    setInterval(nextImage, 3000);

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        formResponse.innerHTML = `<p>Obrigado, ${name}! Sua mensagem foi enviada.</p>`;
        contactForm.reset();
    });

    // Modais genéricos
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('show');
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('show');
    }

    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.closest('.window').id;
            closeModal(modalId);
        });
    });

    // Configurar áudio de fundo
    const audio = document.getElementById('background-music');
    if (audio) {
        audio.loop = true;
        audio.volume = 0.1;
        audio.play().catch(error => {
            console.log('Autoplay bloqueado pelo navegador', error);
        });
    }

    // Funções de gerenciamento de personagens
    const editInfoButton = document.querySelector('.edit-info');
    const addCharacterButton = document.querySelector('.add-character');
    const charactersList = document.querySelector('.characters-list');
    const editPicButton = document.querySelector('.edit-pic');
    const modal = document.getElementById('info-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalButton = document.getElementById('close-modal');

    const showModal = (title, contentHTML) => {
        modal.querySelector('.window-header span').textContent = title;
        modalContent.innerHTML = contentHTML;
        modal.style.display = 'block';
        charactersList.style.display = 'none';
    };

    const hideModal = () => {
        modal.style.display = 'none';
        charactersList.style.display = 'block';
    };

    closeModalButton.addEventListener('click', hideModal);

    editInfoButton.addEventListener('click', () => {
        const contentHTML = `
            <div>
                <label>Nome de Usuário:</label>
                <input type="text" id="edit-username" value="${document.getElementById('username').textContent}">
            </div>
            <div>
                <label>E-mail:</label>
                <input type="email" id="edit-email" value="${document.getElementById('email').textContent}">
            </div>
            <button class="save-modal">Salvar</button>
        `;
        showModal('Editar Perfil', contentHTML);

        modalContent.querySelector('.save-modal').addEventListener('click', () => {
            const newUsername = document.getElementById('edit-username').value;
            const newEmail = document.getElementById('edit-email').value;

            document.getElementById('username').textContent = newUsername;
            document.getElementById('email').textContent = newEmail;

            alert('Informações salvas com sucesso!');
            hideModal();
        });
    });

    editPicButton.addEventListener('click', () => {
        const newPicUrl = prompt('Insira a URL de uma nova foto de perfil:');
        if (newPicUrl) document.querySelector('.profile-pic img').src = newPicUrl;
    });

    addCharacterButton.addEventListener('click', () => {
        const contentHTML = `
            <div>
                <label>Nome do Personagem:</label>
                <input type="text" id="char-name" placeholder="Ex: Thorin Escudo de Carvalho">
            </div>
            <div>
                <label>Classe e Nível:</label>
                <input type="text" id="char-class" placeholder="Ex: Guerreiro 3">
            </div>
            <div>
                <label>Raça:</label>
                <input type="text" id="char-race" placeholder="Ex: Anão">
            </div>
            <button class="save-modal">Salvar</button>
        `;
        showModal('Adicionar Novo Personagem', contentHTML);

        modalContent.querySelector('.save-modal').addEventListener('click', () => {
            const charName = document.getElementById('char-name').value;
            const charClass = document.getElementById('char-class').value;
            const charRace = document.getElementById('char-race').value;

            if (charName && charClass && charRace) {
                const newCharacterCard = document.createElement('div');
                newCharacterCard.classList.add('character-card');
                newCharacterCard.innerHTML = `
                    <h3>Personagem: ${charName}</h3>
                    <p>Classe: ${charClass} | Raça: ${charRace}</p>
                    <button class="edit-character">Editar Ficha</button>
                `;
                charactersList.appendChild(newCharacterCard);
                hideModal();

                newCharacterCard.querySelector('.edit-character').addEventListener('click', () => {
                    editCharacter(newCharacterCard);
                });
            } else {
                alert('Por favor, preencha todas as informações.');
            }
        });
    });

    const editCharacter = (characterCard) => {
        const charName = characterCard.querySelector('h3').textContent.split(': ')[1];
        const charDetails = characterCard.querySelector('p').textContent.split('|');
        const charClass = charDetails[0].split(': ')[1];
        const charRace = charDetails[1].split(': ')[1];

        const contentHTML = `
            <div>
                <label>Nome do Personagem:</label>
                <input type="text" id="char-name" value="${charName}">
            </div>
            <div>
                <label>Classe e Nível:</label>
                <input type="text" id="char-class" value="${charClass}">
            </div>
            <div>
                <label>Raça:</label>
                <input type="text" id="char-race" value="${charRace}">
            </div>
            <button class="save-modal">Salvar</button>
        `;
        showModal('Editar Personagem', contentHTML);

        modalContent.querySelector('.save-modal').addEventListener('click', () => {
            const newCharName = document.getElementById('char-name').value;
            const newCharClass = document.getElementById('char-class').value;
            const newCharRace = document.getElementById('char-race').value;

            characterCard.querySelector('h3').textContent = `Personagem: ${newCharName}`;
            characterCard.querySelector('p').textContent = `Classe: ${newCharClass} | Raça: ${newCharRace}`;
            hideModal();
        });
    };
});
