// script_comunidade.js

document.addEventListener("DOMContentLoaded", () => {
    // Seleção dos elementos
    const postForm = document.getElementById('postForm');
    const postContent = document.getElementById('postContent');
    const postImage = document.getElementById('postImage');
    const postsFeed = document.querySelector('.posts-feed .container');
    
    // Função para criar um novo post no feed
    function createPost(content, image) {
      // Criação da estrutura de um novo post
      const post = document.createElement('div');
      post.classList.add('post');
      post.setAttribute('data-id', Date.now());  // Atribuindo um ID único para o post
  
      post.innerHTML = `
        <div class="post-header">
          <img src="/assets/user1.jpg" alt="Usuário" class="post-avatar">
          <div>
            <h3>Usuário Anônimo</h3>
            <span>Agora</span>
          </div>
        </div>
        <div class="post-content">
          <p>${content}</p>
          ${image ? `<img src="${image}" alt="Imagem da sessão">` : ''}
        </div>
        <div class="post-actions">
          <button class="comment-btn">💬 Comentar</button>
          <button class="like-btn">❤️ Curtir</button>
        </div>
        <div class="comments-section"></div>
      `;
      
      // Adiciona o post no feed
      postsFeed.appendChild(post);
      
      // Reassocia os eventos para os botões do novo post
      addEventListenersToPost(post);
    }
  
    // Função de gerenciamento de envio do formulário
    postForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const content = postContent.value;
      const file = postImage.files[0];
      
      // Verifica se há conteúdo para publicar
      if (content.trim() === "") {
        alert("Por favor, escreva algo para publicar.");
        return;
      }
  
      // Prepara a imagem, se houver
      let image = null;
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          image = reader.result;
          createPost(content, image);  // Cria o post com a imagem
        };
        reader.readAsDataURL(file);
      } else {
        createPost(content);  // Cria o post sem imagem
      }
  
      // Limpa o formulário após o envio
      postContent.value = '';
      postImage.value = '';
    });
  
    // Função para adicionar ouvintes de evento a um post específico
    function addEventListenersToPost(post) {
      post.querySelector('.like-btn').addEventListener('click', () => {
        const likeBtn = post.querySelector('.like-btn');
        likeBtn.textContent = likeBtn.textContent === '❤️ Curtir' ? '❤️ Curtido' : '❤️ Curtir';
      });
  
      post.querySelector('.comment-btn').addEventListener('click', () => {
        const commentsSection = post.querySelector('.comments-section');
        
        // Verifica se já existe o campo de comentário
        if (!post.querySelector('.comment-input')) {
          const commentInput = document.createElement('div');
          commentInput.classList.add('comment-input');
          commentInput.innerHTML = `
            <input type="text" placeholder="Escreva um comentário..." />
            <button class="submit-comment">Comentar</button>
          `;
          commentsSection.appendChild(commentInput);
  
          // Adiciona o evento de envio de comentário
          commentInput.querySelector('.submit-comment').addEventListener('click', () => {
            const commentInputField = commentInput.querySelector('input');
            const comment = commentInputField.value.trim();
            
            if (comment) {
              // Adiciona o comentário
              const commentElement = document.createElement('div');
              commentElement.classList.add('comment');
              commentElement.textContent = comment;
              commentsSection.appendChild(commentElement);
              
              // Limpa o campo de comentário
              commentInputField.value = '';
            } else {
              alert("Por favor, escreva um comentário.");
            }
          });
        }
      });
  
      post.querySelector('.share-btn').addEventListener('click', () => {
        // Cria uma cópia do post
        const clonedPost = post.cloneNode(true);
        postsFeed.appendChild(clonedPost);
  
        // Reassocia os eventos para o post compartilhado
        addEventListenersToPost(clonedPost);
      });
    }
  
    // Adiciona eventos aos posts já existentes no feed
    const existingPosts = postsFeed.querySelectorAll('.post');
    existingPosts.forEach(post => addEventListenersToPost(post));
  });
  