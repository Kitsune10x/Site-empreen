// Aguarda o documento estar pronto
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todas as imagens dos jogos
  const gameImages = document.querySelectorAll('.games-catalog img');

  // Adiciona um evento de clique para cada imagem
  gameImages.forEach((image) => {
    image.addEventListener('click', (event) => {
      // Cria um elemento de overlay para mostrar as informações do jogo
      const overlay = document.createElement('div');
      overlay.className = 'game-overlay';

      // Cria um elemento de conteúdo para mostrar as informações do jogo
      const content = document.createElement('div');
      content.className = 'game-content';

      // Adiciona as informações do jogo ao conteúdo
      const gameTitle = image.alt;
      const gameDescription = image.nextElementSibling.textContent;
      content.innerHTML = `
        <h2>${gameTitle}</h2>
        <p>${gameDescription}</p>
      `;

      // Adiciona o conteúdo ao overlay
      overlay.appendChild(content);

      // Adiciona o overlay ao body
      document.body.appendChild(overlay);

      // Adiciona um evento de clique para fechar o overlay
      overlay.addEventListener('click', () => {
        overlay.remove();
      });
    });
  });

  // Seleciona todos os jogos
  const jogos = document.querySelectorAll('.games-catalog li');

  // Adiciona eventos de mouseover e mouseout para cada jogo
  jogos.forEach((jogo) => {
    jogo.addEventListener('mouseover', () => {
      jogo.classList.add('hover');
    });

    jogo.addEventListener('mouseout', () => {
      jogo.classList.remove('hover');
    });
  });
});