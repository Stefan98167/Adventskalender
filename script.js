//Modal Element holen
var modal = document.getElementById('modal1');
//Modal button holen
var modalBtn = document.getElementById('number1');
//Close button holen
var close = document.getElementById('close');

//EventListener hinzufügen für öffnen
modalBtn.addEventListener('click', openModal);
//EventListener hinzufügen für schließen
close.addEventListener('click', closeModal);
//EventListener hinzufügen für außen click
window.addEventListener('click', clickOutside)

//Funktion für Modal öffnen
function openModal() {
    modal.style.display = 'block';
}

//Funktion für Modal schließen
function closeModal() {
    modal.style.display = 'none';
}

//Funktion für Modal schließen wenn außen click
function clickOutside(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}