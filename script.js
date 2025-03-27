document.addEventListener("DOMContentLoaded", () => {
    console.log("Jogo carregado!");
    
    // Efeito de hover no botão de iniciar
    const startBtn = document.querySelector('.start-btn');
    startBtn.addEventListener('mouseenter', () => {
        startBtn.style.transform = 'translate(-2px, -2px)';
        startBtn.style.boxShadow = '7px 7px 0 rgba(0,0,0,0.3)';
    });
    
    startBtn.addEventListener('mouseleave', () => {
        startBtn.style.transform = '';
        startBtn.style.boxShadow = '5px 5px 0 rgba(0,0,0,0.3)';
    });
});
