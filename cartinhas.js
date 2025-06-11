const dias = document.querySelectorAll('.dias');
const cartinhaAberta = document.getElementById('cartinhaAberta');
const fotosGaleria = document.querySelectorAll('.photo-gallery img');

const conteudos = [
  {
    imagem: 'imagens/IMG-20250608-WA0007.jpg',
    texto: 'Nosso primeiro passeio em familía juntos. Que dia lindo foi esse,mas é claro,é por que você estava comigo! 💖',
  },
  {
    imagem: 'imagens/IMG-20250603-WA0024.jpg',
    texto: 'Tudo em você me encanta,como você transforma qualquer dia só com sua presença. Seu abraço é meu refúgio, seu olhar acalma minha alma. Estar contigo é encontrar um lar. Te amar é fácil, porque você transborda amor. 💖',
  },
  {
    imagem: 'imagens/IMG-20250417-WA0008.jpg',
    texto: 'Só você me faz sentir assim,tão completo,seu sorriso me contagia,uma luz que ilumina o dia.No brilho doce do seu olhar,encontro um dos infinitos motivos para te amar.! ✨',
  },
  {
    imagem: 'imagens/IMG-20250602-WA0003.jpg',
    texto: 'Seu riso é melodia,que faz pulsar meu coração.Nesse Dia dos Namorados,você é minha inspiração,mas nao só nesse dia,em todos eles,meu primeiro pensamento é voce! 💕',
  },
  {
    imagem: 'imagens/IMG-20250608-WA0014.jpg',
    texto: 'É como se nossos corações tivessem encontrado o caminho um até o outro. É no toque, no riso fácil, na paz que só existe quando você está por perto. Nosso amor é algo que não se explica, só se sente. E eu sinto... com todo o meu coração. 💌',
  },
  {
    imagem: 'imagens/IMG-20250608-WA0015.jpg',
    texto: 'O dia mais importante da minha vida,o dia que voce disse sim para mim,meu maior amor,eu te amo eternamente! ❤️🌹',
  }
];

dias.forEach((dia, index) => {
  dia.addEventListener('click', () => {
    const conteudo = conteudos[index];
    if (conteudo) {
      // Monta o card flip na div cartinhaAberta
      cartinhaAberta.innerHTML = `
        <div class="carta" tabindex="0">
          <div class="frente">
            <img src="${conteudo.imagem}" alt="Foto do dia ${index + 1}">
          </div>
          <div class="verso">
            <p>${conteudo.texto}</p>
            <button class="seta-virar" aria-label="Virar carta">&#x21bb;</button>
          </div>
        </div>
      `;

      // Remove destaque de todas as fotos da galeria
      fotosGaleria.forEach(foto => foto.classList.remove('selecionada'));

      // Destaca a foto correspondente na galeria (busca pela src)
      fotosGaleria.forEach(foto => {
        if (foto.src.includes(conteudo.imagem)) {
          foto.classList.add('selecionada');
          
        }
      });

      // Evento para virar o card
      const carta = cartinhaAberta.querySelector('.carta');
      const btnVirar = cartinhaAberta.querySelector('.seta-virar');

      btnVirar.addEventListener('click', (e) => {
        e.stopPropagation();
        carta.classList.toggle('flipped');
      });

      // Também vira o card ao clicar na carta (opcional)
      carta.addEventListener('click', () => {
        carta.classList.toggle('flipped');
      });

      // Rola para o card aberto
      setTimeout(() => {
        const rect = cartinhaAberta.getBoundingClientRect();
        const padding = 20;
        const foraDoViewport = rect.top < padding || rect.bottom > window.innerHeight;

        if (foraDoViewport) {
          cartinhaAberta.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  });
});
