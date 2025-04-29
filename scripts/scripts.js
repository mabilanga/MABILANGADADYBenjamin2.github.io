// Menu Responsive (optionnel si tu ajoutes un b
outon)
const menuToggle= document.querySelector('.menu-toggle');
const nav= document.querySelector('nav ul');
menuToggle.addEventListener('click',()=>{
    nav.classList.toggle('show')
});
// Attendre que la page soit completement chargee
document.addEventListener('DOMContentLoaded', function(){
    const form= document.querySelector('.contact-form');
    form.addEventListener('submit', function(event){
        event.preventDefault(); // Empechee l'envoi reel du contact
        // Afficher une alerte de confirmation
        alert('Merci pour votre message!!! Nous allons vous repondres tres bientot.');
        // Reitialiser les champs du contact
        form.reset();
    });
});