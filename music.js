document.getElementById('musicBtn').addEventListener('click', () => {
    const existingPlayer = document.getElementById('audioPlayer');
    
    if (existingPlayer) {
        // Remove o player e a mensagem se já estiver visível
        existingPlayer.parentElement.remove();
    } else {
        // Cria container estilizado
        const playerContainer = document.createElement('div');
        playerContainer.className = 'music-player';

        // Cria o elemento de áudio
        const audio = document.createElement('audio');
        audio.id = 'audioPlayer';
        audio.controls = true;
        

        audio.src = 'musica/Luan Santana - Incondicional (Videoclipe Oficial).mp3'

        // Mensagem romântica
        const msg = document.createElement('p');
        msg.textContent = 'Nossa trilha sonora 💖';
        msg.className = 'music-message';

        // Adiciona tudo ao container
        playerContainer.appendChild(msg);
        playerContainer.appendChild(audio);

        // Insere na página logo após o botão
        const botao = document.getElementById('musicBtn');
        botao.insertAdjacentElement('afterend', playerContainer);

        audio.play().catch(err => {
            console.warn("O navegador bloqueou a reprodução automática:", err);
        });
        
    }
});