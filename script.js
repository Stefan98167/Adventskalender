//Datensturktur für jedes Türchen
var tuerchenInhalt = [
    {
        id: "number1",
        titel: "Günter Hämmerle",
        bild: "assets/teachers/Guenter_Haemmerle.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: "number2",
        titel: "Titel für Türchen 2",
        bild: "assets/teachers/bild2.jpg",
        text: "Text für Türchen 2"
    },
    {
        id: "number3",
        titel: "Titel für Türchen 3",
        bild: "assets/teachers/bild3.jpg",
        text: "Text für Türchen 3"
    },
    {
        id: "number4",
        titel: "Titel für Türchen 4",
        bild: "assets/teachers/bild4.jpg",
        text: "Text für Türchen 4"
    },
    {
        id: "number5",
        titel: "Titel für Türchen 5",
        bild: "assets/teachers/bild5.jpg",
        text: "Text für Türchen 5"
    },
    {
        id: "number6",
        titel: "Titel für Türchen 6",
        bild: "assets/teachers/bild6.jpg",
        text: "Text für Türchen 6"
    },
    {
        id: "number7",
        titel: "Titel für Türchen 7",
        bild: "assets/teachers/bild7.jpg",
        text: "Text für Türchen 7"
    },
    {
        id: "number8",
        titel: "Titel für Türchen 8",
        bild: "assets/teachers/bild8.jpg",
        text: "Text für Türchen 8"
    },
    {
        id: "number9",
        titel: "Titel für Türchen 9",
        bild: "assets/teachers/bild9.jpg",
        text: "Text für Türchen 9"
    },
    {
        id: "number10",
        titel: "Titel für Türchen 10",
        bild: "assets/teachers/bild10.jpg",
        text: "Text für Türchen 10"
    },
    {
        id: "number11",
        titel: "Titel für Türchen 11",
        bild: "assets/teachers/bild11.jpg",
        text: "Text für Türchen 11"
    },
    {
        id: "number12",
        titel: "Titel für Türchen 12",
        bild: "assets/teachers/bild12.jpg",
        text: "Text für Türchen 12"
    },
    {
        id: "number13",
        titel: "Titel für Türchen 13",
        bild: "assets/teachers/bild13.jpg",
        text: "Text für Türchen 13"
    },
    {
        id: "number14",
        titel: "Titel für Türchen 14",
        bild: "assets/teachers/bild14.jpg",
        text: "Text für Türchen 14"
    },
    {
        id: "number15",
        titel: "Titel für Türchen 15",
        bild: "assets/teachers/bild15.jpg",
        text: "Text für Türchen 15"
    },
    {
        id: "number16",
        titel: "Titel für Türchen 16",
        bild: "assets/teachers/bild16.jpg",
        text: "Text für Türchen 16"
    },
    {
        id: "number17",
        titel: "Titel für Türchen 17",
        bild: "assets/teachers/bild17.jpg",
        text: "Text für Türchen 17"
    },
    {
        id: "number18",
        titel: "Titel für Türchen 18",
        bild: "assets/teachers/bild18.jpg",
        text: "Text für Türchen 18"
    },
    {
        id: "number19",
        titel: "Titel für Türchen 19",
        bild: "assets/teachers/bild19.jpg",
        text: "Text für Türchen 19"
    },
    {
        id: "number20",
        titel: "Titel für Türchen 20",
        bild: "assets/teachers/bild20.jpg",
        text: "Text für Türchen 20"
    },
    {
        id: "number21",
        titel: "Titel für Türchen 21",
        bild: "assets/teachers/bild21.jpg",
        text: "Text für Türchen 21"
    },
    {
        id: "number22",
        titel: "Titel für Türchen 22",
        bild: "assets/teachers/bild22.jpg",
        text: "Text für Türchen 22"
    },
    {
        id: "number23",
        titel: "Titel für Türchen 23",
        bild: "assets/teachers/bild23.jpg",
        text: "Text für Türchen 23"
    },
    {
        id: "number24",
        titel: "Titel für Türchen 24",
        bild: "assets/teachers/bild24.jpg",
        text: "Text für Türchen 24"
    }
];



//Modal-Element und Close-Button Element holen
var modal = document.getElementById('modal1');
var closeBtn = document.getElementById('close');

//Event Listener für das Schließen des Modals
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

//Funktion, um das Modal zu öffnen und mit Inhalten zu füllen
function openModal(tuerchenId) {
    var tuerchen = tuerchenInhalt.find(t => t.id === tuerchenId);
    if (tuerchen) {
        document.getElementById("modal-title").textContent = tuerchen.titel;
        document.getElementById("teacher_photo").src = tuerchen.bild;
        document.getElementById("modal-text").textContent = tuerchen.text;
        modal.style.display = 'block';
    }
}

//Funktion, um das Modal zu schließen
function closeModal() {
    modal.style.display = 'none';
}

//Funktion, um das Modal zu schließen, wenn außerhalb des Modals geklickt wird
function clickOutside(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

//Event Listener für alle Bilder/Türchen hinzufügen
document.addEventListener('DOMContentLoaded', function() {
    var images = document.getElementsByClassName("number");
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function() {
            openModal(this.id);
        });
    }
});