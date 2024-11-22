document.addEventListener("DOMContentLoaded", () => {
    // Seleção de elementos
    const modalInfo = document.getElementById('info-modal');
    const closeModal = document.getElementById('close-modal');
    const characterSystems = document.querySelectorAll('.character-system');
    
    // Função para abrir o modal
    function openModal(content) {
        modalInfo.style.display = 'block';
        document.getElementById('modal-content').innerHTML = content;
    }

    // Função para fechar o modal
    function closeModalWindow() {
        modalInfo.style.display = 'none';
        document.getElementById('modal-content').innerHTML = '';  // Limpar conteúdo
    }

    // Fechar o modal ao clicar no X
    closeModal.addEventListener('click', closeModalWindow);

    // Evento para adicionar personagem
    characterSystems.forEach(system => {
        const addButton = system.querySelector('.add-character');
        addButton.addEventListener('click', () => {
            const systemName = system.querySelector('h3').textContent;
            openModal(`
                <h4>Adicionar Personagem para ${systemName}</h4>
                <label for="character-name">Nome do Personagem:</label>
                <input type="text" id="character-name" placeholder="Nome do Personagem">
                
                <label for="level">Nível:</label>
                <input type="number" id="level" placeholder="Nível do Personagem">
                
                <label for="profession">Profissão/Classe:</label>
                <input type="text" id="profession" placeholder="Profissão ou Classe">
                
                <label for="background">Antecedentes:</label>
                <textarea id="background" placeholder="História do Personagem"></textarea>
                
                <label for="equipment">Equipamento:</label>
                <textarea id="equipment" placeholder="Adicione os itens de equipamento, separados por vírgula"></textarea>
                
                <button id="save-character" class="btn-save">Salvar</button>
            `);

            // Ação ao salvar personagem
            document.getElementById('save-character').addEventListener('click', () => {
                const characterName = document.getElementById('character-name').value;
                const level = document.getElementById('level').value;
                const profession = document.getElementById('profession').value;
                const background = document.getElementById('background').value;
                const equipment = document.getElementById('equipment').value;

                if (characterName && level && profession && background && equipment) {
                    addCharacterToSystem(systemName, characterName, level, profession, background, equipment);
                    closeModalWindow();
                } else {
                    alert("Preencha todos os campos.");
                }
            });
        });
    });

    // Função para adicionar personagem ao sistema
    function addCharacterToSystem(systemName, characterName, level, profession, background, equipment) {
        const system = [...characterSystems].find(system => system.querySelector('h3').textContent === systemName);
        const card = system.querySelector('.character-card');
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character-item');
        characterDiv.innerHTML = `
            <span><strong>${characterName}</strong> (Nível ${level})</span>
            <p><strong>Profissão/Classe:</strong> ${profession}</p>
            <p><strong>Antecedentes:</strong> ${background}</p>
            <p><strong>Equipamento:</strong> ${equipment}</p>
            <button class="edit-character">Editar</button>
            <button class="delete-character">Excluir</button>
        `;
        card.appendChild(characterDiv);

        // Editar personagem
        const editButton = characterDiv.querySelector('.edit-character');
        editButton.addEventListener('click', () => {
            openModal(`
                <h4>Editar Personagem</h4>
                <label for="edit-character-name">Nome do Personagem:</label>
                <input type="text" id="edit-character-name" value="${characterName}">
                
                <label for="edit-level">Nível:</label>
                <input type="number" id="edit-level" value="${level}">
                
                <label for="edit-profession">Profissão/Classe:</label>
                <input type="text" id="edit-profession" value="${profession}">
                
                <label for="edit-background">Antecedentes:</label>
                <textarea id="edit-background">${background}</textarea>
                
                <label for="edit-equipment">Equipamento:</label>
                <textarea id="edit-equipment">${equipment}</textarea>
                
                <button id="save-edited-character" class="btn-save">Salvar</button>
            `);

            // Salvar edição
            document.getElementById('save-edited-character').addEventListener('click', () => {
                const newCharacterName = document.getElementById('edit-character-name').value;
                const newLevel = document.getElementById('edit-level').value;
                const newProfession = document.getElementById('edit-profession').value;
                const newBackground = document.getElementById('edit-background').value;
                const newEquipment = document.getElementById('edit-equipment').value;

                if (newCharacterName && newLevel && newProfession && newBackground && newEquipment) {
                    characterDiv.querySelector('span').innerHTML = `<strong>${newCharacterName}</strong> (Nível ${newLevel})`;
                    characterDiv.querySelector('p').innerHTML = `
                        <strong>Profissão/Classe:</strong> ${newProfession} 
                        <br><strong>Antecedentes:</strong> ${newBackground} 
                        <br><strong>Equipamento:</strong> ${newEquipment}`;
                    closeModalWindow();
                } else {
                    alert("Preencha todos os campos.");
                }
            });
        });

        // Excluir personagem
        const deleteButton = characterDiv.querySelector('.delete-character');
        deleteButton.addEventListener('click', () => {
            if (confirm(`Tem certeza que deseja excluir o personagem ${characterName}?`)) {
                characterDiv.remove();
            }
        });
    }

    // Edição de informações do usuário
    const editInfoButton = document.querySelector('.edit-info');
    editInfoButton.addEventListener('click', () => {
        openModal(`
            <h4>Editar Informações do Usuário</h4>
            <label for="edit-username">Nome:</label>
            <input type="text" id="edit-username" value="${document.getElementById('username').textContent}">
            <label for="edit-email">Email:</label>
            <input type="email" id="edit-email" value="${document.getElementById('email').textContent}">
            <button id="save-info" class="btn-save">Salvar</button>
        `);

        // Salvar informações editadas
        document.getElementById('save-info').addEventListener('click', () => {
            const newUsername = document.getElementById('edit-username').value;
            const newEmail = document.getElementById('edit-email').value;
            document.getElementById('username').textContent = newUsername;
            document.getElementById('email').textContent = newEmail;
            closeModalWindow();
        });
    });

    // Prevenir o fechamento do modal ao clicar dentro dele
    modalInfo.addEventListener('click', (e) => {
        if (e.target === modalInfo) {
            closeModalWindow();
        }
    });
});

// Função para editar a foto de perfil
document.querySelector('.edit-pic').addEventListener('click', function() {
    // Criar um input para selecionar a imagem local
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';  // Restringe a seleção para arquivos de imagem
    
    input.click();  // Simula o clique no input para abrir o explorador de arquivos

    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                // Altera a imagem de perfil com o arquivo selecionado
                document.querySelector('.profile-pic img').src = e.target.result;
            };

            reader.readAsDataURL(file);  // Converte o arquivo para uma URL de imagem
        }
    });
});
