// JavaScript for hover effect on buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = "#28a745"; // Changer la couleur du bouton au survol
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = "#32cd32"; // Réinitialiser la couleur
        });
    });
});