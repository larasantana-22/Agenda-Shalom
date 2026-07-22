document.addEventListener("DOMContentLoaded", () => {
  
  // Efeito de clique nos cards de evento
  const cards = document.querySelectorAll('.evento-item');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.style.transform = 'scale(0.97)';
      setTimeout(() => {
        card.style.transform = 'translateY(-6px)';
      }, 150);
    });
  });

  console.log("✨ Site da Shalom São José pronto!");
});