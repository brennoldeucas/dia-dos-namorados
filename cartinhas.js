const dias = document.querySelectorAll('.dias');
const cartinhaAberta = document.getElementById('cartinhaAberta');
const fotosGaleria = document.querySelectorAll('.photo-gallery img');

const conteudos = [
  {
    imagem: 'imagens/IMG-20250417-WA0008.jpg',
    texto: 'Nosso primeiro passeio juntos. Que dia lindo foi esse! 💖',
  },
  {
    imagem: 'imagens/IMG-20250603-WA0024.jpg',
    texto: 'Aquele sorriso seu que me derrete... 😍',
  },
  {
    imagem: 'imagens/IMG-20250608-WA0004.jpg',
    texto: 'Só você me faz sentir assim, tão completo(a)! ✨',
  },
  {
    imagem: 'imagens/IMG-20250608-WA0005.jpg',
    texto: 'Momentos simples, mas cheios de amor 💕',
  },
  {
    imagem: 'imagens/IMG-20250608-WA0007.jpg',
    texto: 'Te amo por quem você é, cada pedacinho seu. 💌',
  },
  {
    imagem: 'imagens/IMG-20250608-WA0012.jpg',
    texto: 'E que venham muitos dias dos namorados ao seu lado! 🌹',
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

      // ✅ NOVO CÓDIGO: Destaca a imagem e faz scroll manual SUAVE sem interferir no vertical
      fotosGaleria.forEach(foto => {
        if (foto.src.includes(conteudo.imagem)) {
          foto.classList.add('selecionada');

          const galeria = foto.parentElement;

          const fotoCenter = foto.offsetLeft + foto.offsetWidth / 2;
          const scrollTarget = fotoCenter - galeria.offsetWidth / 2;

          galeria.scrollTo({
            left: scrollTarget,
            behavior: 'smooth'
          });
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

      // ✅ NOVO CÓDIGO: Só faz scroll se a carta não estiver visível (evita pulo)
      const rect = cartinhaAberta.getBoundingClientRect();
      const padding = 20;
      const foraDoViewport = rect.top < padding || rect.bottom > window.innerHeight;

      if (foraDoViewport) {
        cartinhaAberta.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
