document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Verifica se o href do link corresponde à URL atual
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

window.addEventListener('load', () => {
    const audio = document.getElementById('background-music');
    audio.loop = true;
    audio.volume = 0.1;
    audio.play().catch((error) => {
        console.log("Autoplay foi bloqueado pelo navegador", error);
    });
});

document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById('info-modal');
const modalClose = document.getElementById('close-modal');

// Função para abrir o modal com informações
document.querySelectorAll('.circle2 img, .circle1 img, .circle3 img').forEach(img => {
    img.addEventListener('click', (event) => {
        const info = event.target.getAttribute('data-info'); // Pegando informações do atributo "data-info"
        document.getElementById('modal-content').innerHTML = info; // Atualizando o conteúdo do modal
        modal.classList.add('show'); // Mostrando o modal
    });
});

// Função para fechar o modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});
});

window.addEventListener('load', () => {
    const audio = document.getElementById('background-music');
    audio.loop = true;
    audio.volume = 0.1;
    audio.play().catch((error) => {
        console.log("Autoplay foi bloqueado pelo navegador", error);
    });
});

window.addEventListener('load', () => {
        const audio = document.getElementById('background-music');
        audio.loop = true;
        audio.volume = 0.1;
        audio.play().catch((error) => {
            console.log("Autoplay foi bloqueado pelo navegador", error);
        });
    });

// Carrossel de imagens
    document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('.carousel-container img');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('show', i === index);
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        setInterval(nextImage, 3000);

        const contactForm = document.getElementById('contactForm');
        const formResponse = document.getElementById('formResponse');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            formResponse.innerHTML = `<p>Obrigado, ${name}! Sua mensagem foi enviada.</p>`;
            contactForm.reset();
        });
    });

    let index = 0;
    const carouselImages = document.querySelectorAll('.carousel-container img');

    function showNextImage() {
        carouselImages[index].style.display = 'none';
        index = (index + 1) % carouselImages.length;
        carouselImages[index].style.display = 'block';
    }

    function showPrevImage() {
        carouselImages[index].style.display = 'none';
        index = (index - 1 + carouselImages.length) % carouselImages.length;
        carouselImages[index].style.display = 'block';
    }

    carouselImages.forEach(img => img.style.display = 'none');
    carouselImages[index].style.display = 'block';

    // Modal Script
    const modal = document.getElementById("myModal");
    const imageLink = document.getElementById("image1");
    const closeButtons = document.querySelectorAll(".close");

    imageLink.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    closeButtons.forEach(button => {
        button.onclick = function() {
            modal.style.display = "none";
        }
    });

    window.onclick = function(event) {
        if (event.target == modal || event.target == document.getElementById("curiositiesModal")) {
            modal.style.display = "none";
            document.getElementById("curiositiesModal").style.display = "none";
        }
    }

    const curiositiesModal = document.getElementById("curiositiesModal");
    const rpg2ImageLink = document.querySelector(".carousel-container a:nth-child(2)");

    rpg2ImageLink.onclick = function(event) {
        event.preventDefault();
        curiositiesModal.style.display = "block";
    }

// Função para abrir o modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('show');
        }
    }

    // Função para fechar o modal
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('show');
        }
    }

    // Seleciona todos os botões de abrir modal
    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    // Seleciona todos os botões de fechar modal
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.closest('.window').id;
            closeModal(modalId);
        });
    });

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Verifica se o href do link corresponde à URL atual
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

window.addEventListener('load', () => {
    const audio = document.getElementById('background-music');
    audio.loop = true;
    audio.volume = 0.1;
    audio.play().catch((error) => {
        console.log("Autoplay foi bloqueado pelo navegador", error);
    });
});

document.addEventListener('DOMContentLoaded', () => {
// Selecionar elementos principais
const editInfoButton = document.querySelector('.edit-info');
const addCharacterButton = document.querySelector('.add-character');
const charactersList = document.querySelector('.characters-list');
const editPicButton = document.querySelector('.edit-pic');
const modal = document.getElementById('info-modal');
const modalContent = document.getElementById('modal-content');
const closeModalButton = document.getElementById('close-modal');

// Função para mostrar o modal
const showModal = (title, contentHTML) => {
    const modalHeader = modal.querySelector('.window-header span');
    modalHeader.textContent = title;
    modalContent.innerHTML = contentHTML;
    modal.style.display = 'block';
    charactersList.style.display = 'none'; // Esconder a lista de personagens
};

// Função para fechar o modal
const hideModal = () => {
    modal.style.display = 'none';
    charactersList.style.display = 'block'; // Mostrar lista de personagens novamente
};

// Eventos do modal
closeModalButton.addEventListener('click', hideModal);

// Edição de informações do usuário
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

    // Adicionar evento para o botão "Salvar"
    const saveButton = modalContent.querySelector('.save-modal');
    saveButton.addEventListener('click', () => {
        const newUsername = document.getElementById('edit-username').value;
        const newEmail = document.getElementById('edit-email').value;

        document.getElementById('username').textContent = newUsername;
        document.getElementById('email').textContent = newEmail;

        alert('Informações salvas com sucesso!');
        hideModal();
    });
});

// Alteração da foto do perfil
editPicButton.addEventListener('click', () => {
    const newPicUrl = prompt('Insira a URL de uma nova foto de perfil:');
    if (newPicUrl) {
        document.querySelector('.profile-pic img').src = newPicUrl;
    }
});

// Adicionar novo personagem
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

    // Adicionar evento para o botão "Salvar"
    const saveButton = modalContent.querySelector('.save-modal');
    saveButton.addEventListener('click', () => {
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

            // Adicionar evento de edição para o novo personagem
            const editButton = newCharacterCard.querySelector('.edit-character');
            editButton.addEventListener('click', () => editCharacter(newCharacterCard));
        } else {
            alert('Por favor, preencha todas as informações.');
        }
    });
});

// Função para editar um personagem existente
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

    // Adicionar evento para o botão "Salvar"
    const saveButton = modalContent.querySelector('.save-modal');
    saveButton.addEventListener('click', () => {
        const newCharName = document.getElementById('char-name').value;
        const newCharClass = document.getElementById('char-class').value;
        const newCharRace = document.getElementById('char-race').value;

        characterCard.querySelector('h3').textContent = `Personagem: ${newCharName}`;
        characterCard.querySelector('p').textContent = `Classe: ${newCharClass} | Raça: ${newCharRace}`;
        hideModal();
    });
};

// Adicionar eventos de edição para personagens existentes
document.querySelectorAll('.edit-character').forEach(button => {
    button.addEventListener('click', (e) => {
        const characterCard = e.target.closest('.character-card');
        editCharacter(characterCard);
    });
});
});
    <script>
        // Carrossel de imagens
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('.carousel-container img');
            let currentIndex = 0;

            function showImage(index) {
                images.forEach((img, i) => {
                    img.classList.toggle('show', i === index);
                });
            }

            function nextImage() {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            }

            setInterval(nextImage, 3000);

            const contactForm = document.getElementById('contactForm');
            const formResponse = document.getElementById('formResponse');

            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('name').value;
                formResponse.innerHTML = `<p>Obrigado, ${name}! Sua mensagem foi enviada.</p>`;
                contactForm.reset();
            });
        });

        let index = 0;
        const carouselImages = document.querySelectorAll('.carousel-container img');

        function showNextImage() {
            carouselImages[index].style.display = 'none';
            index = (index + 1) % carouselImages.length;
            carouselImages[index].style.display = 'block';
        }

        function showPrevImage() {
            carouselImages[index].style.display = 'none';
            index = (index - 1 + carouselImages.length) % carouselImages.length;
            carouselImages[index].style.display = 'block';
        }

        carouselImages.forEach(img => img.style.display = 'none');
        carouselImages[index].style.display = 'block';

        // Modal Script
        const modal = document.getElementById("myModal");
        const imageLink = document.getElementById("image1");
        const closeButtons = document.querySelectorAll(".close");

        imageLink.onclick = function(event) {
            event.preventDefault();
            modal.style.display = "block";
        }

        closeButtons.forEach(button => {
            button.onclick = function() {
                modal.style.display = "none";
            }
        });

        window.onclick = function(event) {
            if (event.target == modal || event.target == document.getElementById("curiositiesModal")) {
                modal.style.display = "none";
                document.getElementById("curiositiesModal").style.display = "none";
            }
        }

        const curiositiesModal = document.getElementById("curiositiesModal");
        const rpg2ImageLink = document.querySelector(".carousel-container a:nth-child(2)");

        rpg2ImageLink.onclick = function(event) {
            event.preventDefault();
            curiositiesModal.style.display = "block";
        }
        
        // Carrossel de imagens
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('.carousel-container img');
            let currentIndex = 0;

            function showImage(index) {
                images.forEach((img, i) => {
                    img.classList.toggle('show', i === index);
                });
            }

            function nextImage() {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            }

            setInterval(nextImage, 3000);

            const contactForm = document.getElementById('contactForm');
            const formResponse = document.getElementById('formResponse');

            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('name').value;
                formResponse.innerHTML = `<p>Obrigado, ${name}! Sua mensagem foi enviada.</p>`;
                contactForm.reset();
            });
        });

        let index = 0;
        const carouselImages = document.querySelectorAll('.carousel-container img');

        function showNextImage() {
            carouselImages[index].style.display = 'none';
            index = (index + 1) % carouselImages.length;
            carouselImages[index].style.display = 'block';
        }

        function showPrevImage() {
            carouselImages[index].style.display = 'none';
            index = (index - 1 + carouselImages.length) % carouselImages.length;
            carouselImages[index].style.display = 'block';
        }

        carouselImages.forEach(img => img.style.display = 'none');
        carouselImages[index].style.display = 'block';

        // Modal Script
        const modal = document.getElementById("myModal");
        const imageLink = document.getElementById("image1");
        const closeButtons = document.querySelectorAll(".close");

        imageLink.onclick = function(event) {
            event.preventDefault();
            modal.style.display = "block";
        }

        closeButtons.forEach(button => {
            button.onclick = function() {
                modal.style.display = "none";
            }
        });

        window.onclick = function(event) {
            if (event.target == modal || event.target == document.getElementById("curiositiesModal")) {
                modal.style.display = "none";
                document.getElementById("curiositiesModal").style.display = "none";
            }
        }

        const curiositiesModal = document.getElementById("curiositiesModal");
        const rpg2ImageLink = document.querySelector(".carousel-container a:nth-child(2)");

        rpg2ImageLink.onclick = function(event) {
            event.preventDefault();
            curiositiesModal.style.display = "block";
        }

    </script>
