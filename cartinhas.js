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
      // Atualiza conteúdo da cartinha aberta
      cartinhaAberta.innerHTML = `
        <img src="${conteudo.imagem}" alt="Foto do dia ${index + 1}">
        <p>${conteudo.texto}</p>
      `;
      
      // Remove destaque de todas as fotos da galeria
      fotosGaleria.forEach(foto => foto.classList.remove('selecionada'));
      
      // Destaca a foto correspondente na galeria (busca pela src)
      fotosGaleria.forEach(foto => {
        if (foto.src.includes(conteudo.imagem)) {
          foto.classList.add('selecionada');
          // Opcional: scroll para a foto destacada
          foto.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
      });
      
      cartinhaAberta.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
