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
    texto: 'Nosso segundo passeio em familía,dessa vez com a minha,que venham muitos outros!!💖',
  },
  {
    imagem: 'imagens/IMG-20250417-WA0008.jpg',
    texto: 'Só você me faz sentir assim,tão completo,seu sorriso me contagia,uma luz que ilumina o dia.No brilho doce do seu olhar,encontro um dos infinitos motivos para te amar.! ✨',
  },
  {
    imagem: 'imagens/IMG-20250608-WA0014.jpg',
    texto: 'Momentos simples, mas cheios de amor 💕',
  },
  {
    imagem: 'imagens/IMG-20250608-WA0007.jpg',
    texto: 'Te amo por quem você é, cada pedacinho seu. 💌',
  },
  {
    imagem: 'imagens/IMG-20250608-WA0015.jpg',
    texto: 'O dia mais importante da minha vida,o dia que voce disse sim para mim! ❤️🌹',
  }
];

// Função para scroll suave com easing e duração controlada
function smoothScrollTo(element, duration = 800) {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

dias.forEach((dia, index) => {
  dia.addEventListener('click', () => {
    const conteudo = conteudos[index];
    if (conteudo) {
      // Removi tabindex do carta
      cartinhaAberta.innerHTML = `
        <div class="carta">
          <div class="frente">
            <img src="${conteudo.imagem}" alt="Foto do dia ${index + 1}">
          </div>
          <div class="verso">
            <p>${conteudo.texto}</p>
            <button class="seta-virar" aria-label="Virar carta">&#x21bb;</button>
          </div>
        </div>
      `;

      fotosGaleria.forEach(foto => foto.classList.remove('selecionada'));

      fotosGaleria.forEach(foto => {
        if (foto.src.includes(conteudo.imagem)) {
          foto.classList.add('selecionada');
        }
      });

      setTimeout(() => {
        smoothScrollTo(cartinhaAberta, 1000);
      }, 100);

      const carta = cartinhaAberta.querySelector('.carta');
      const btnVirar = cartinhaAberta.querySelector('.seta-virar');

      btnVirar.addEventListener('click', (e) => {
        e.preventDefault();
        carta.classList.toggle('flipped');
      });

      carta.addEventListener('click', () => {
        carta.classList.toggle('flipped');
      });
    }
  });
});
