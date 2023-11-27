//Datensturktur für jedes Türchen
var tuerchenInhalt = [
    {
        id: "number1",
        datum: "11-01",
        titel: "Rainer Längle",
        bild: "assets/teachers/Rainer_Laengle.jpg",
        text: "Im Schlosshofen Unternehmen übernimmt dieser Goofy allein 7 Abteilungen. Jedes Wochenende zerstört er den Schüler mit der sogenannten Wochenmail, die von ¾ der Klasse nicht einmal als Benachrichtigung angezeigt wird. Mit seinen Sätzen wie: „Mal der Enver“ oder “Mal der Paul bitte“ oder auch „mal der Stefan“ (gemeint ist Ishan), macht diesen Lehrer einzigartig. Auch der reverse Fade steht im sehr gut auf dem Kopf."
    },
    {
        id: "number2",
        datum: "12-02",
        titel: "Ronaldo Zarwarsch",
        bild: "assets/teachers/Ronaldo_Zarwarsch.jpg",
        text: "Dieser Typ ist ein Ligma. Er steht schräger als der Turm von Pisa und hat den umgekehrten Drip. Zusammen mit seinem Dripteammate Hattler werden diese beiden bald im Magazin von 1971 erscheinen. Wenn es Fragen zu einer Aufgabe während des Unterrichts gibt, setzt er seine 60 Dezibel Stimme ein. Nach dem Geschreie von ihm geht man zu seinem Platz mit minus Informationen. Also es bringt es sogut wie gar nix."
    },
    {
        id: "number3",
        datum: "12-03",
        titel: "Hristo Valentino Nišev",
        bild: "assets/teachers/Hristo_Nishev.png",
        text: "Dieser Macher hat mit seinen 70ger Arme das Fitnessstudio außeinander genommen. Mit seiner bulgarischen Gene lockt er jeden Gymbro an. Als Turnlehrer an der HTL ist der in der Rangliste der Top 1. Dieser Lehrer hat keine negativen Eigenschaften und zählt zu den chilligsten Lehrer an der Schule. Da wir ihn nur in der 1.Klasse hatten, haben wir leider keine weiteren coolen Ereignisse mit ihm erlebt."
    },
    {
        id: "number4",
        datum: "12-04",
        titel: "Kenan Bayar",
        bild: "assets/teachers/Kenan_Bayar.jpg",
        text: "Der Lehrer mit den meisten Lebensgeschichten, entführte uns für 2 Jahre an der HTL. Er erzählt Geschichten, wie man im Auto unter einem LKW landet oder wie er von der Polizei angerufen wird, um einem Unfall zu beschreiben. Mit seiner Monocock-Geschichte brachte er viele Schüler zum Lachen, und bat um eine Erklärung, weshalb der Monocock in einem F1 Auto (Monocoque) lustig sei.  Egal er war auch einer der größten Macher."
    },
    {
        id: "number5",
        datum: "12-05",
        titel: "Erika Schwarzbach",
        bild: "assets/teachers/Erika_Schwarzbach.jpg",
        text: "Mit ihrem Tinder Profilbild auf Teams zählt Frau Schwarzbach zu dem produktivsten Lehrer an der HTL. Sie geht freiwillig rundenrennen auf der Birkenwiese und fährt auch gerne ihr 2000€ E-Mountainbike. Vergesslichkeit ist eine der stärksten Eigenschaften von Fr. Schwarzbach. Und vergisst nicht, sie ist nie falsch in einem Klassenraum."
    },
    {
        id: "number6",
        datum: "12-06",
        titel: "Günter Hämmerle",
        bild: "assets/teachers/Guenter_Haemmerle.jpg",
        text: "Günter ist seit diesem Jahr wegen der ersten Klassenreihe, sehr genervt von uns. Er ist auch gut, die Schüler beim Zocken zu erwischen. Dann heisst es BÜCHSA ZUA! oder BLECH WEG!. Das erste Opfer war der Umut mit seiner 5er Mitarbeit. Griechenland ist das Land, was er jede Ferien besuchen muss. Vor kurzem kaufte er auch ein Haus am Meer in Griechenland. Er weiß auch selbst, dass wir in seinem Unterricht nichts verstehen und deshalb auch mit dem Stoff nicht weiterkommen."
    },
    {
        id: "number7",
        datum: "12-07",
        titel: "Eva Drexel",
        bild: "assets/teachers/Eva_Drexel.jpg",
        text: "Beste KV an der Schule. Mit ihrer Duomate Trunsperger ist dieses Team unzerstörbar. Sie ist sehr nett und setzt sich für jeden Schüler ein. Wir hatten sie nur ein Jahr, aber dieses Jahr war das beste bis jetzt. Die Bücherei war ihr zweites Zuhause an der HTL."
    },
    {
        id: "number8",
        datum: "12-08",
        titel: "Caroline Trunsperger",
        bild: "assets/teachers/Caroline_Trunsperger.jpg",
        text: "Frau Trunsi ist die beste Lehrerin, mit der man kommunizieren kann. Sie ist sehr nett und lustig. Ihre Arbeitsaufträge sind auch sehr einfach zu lösen. Wenn ein Schüler auf die Toilette muss, sperrt sie den Raum ab, so dass der Schüler nicht mehr reinkommt."
    },
    {
        id: "number9",
        datum: "12-09",
        titel: "Sybilele Warsch",
        bild: "assets/teachers/Sybilele_Warsch.jpg",
        text: "Seit der zweiten Klasse entführt uns diese Warsch bis zur Matura. Zu uns meinte Sie: „Ich bin euch ehrlich, ihr seid die schlimmste Klasse, die ich unterrichte“. Das heißt sie mag uns nicht. Aber aus irgendeinem Grund kann sie nicht aus ihrem Amt (KV) in unserer Klasse ausscheiden. Direkt das erste Jahr mit ihr, lies sie einen Schüler nachsitzen. Aber am 22.11.2023 gab sie schlussendlich zu, dass sie unsere Klasse doch mag."
    },
    {
        id: "number10",
        datum: "12-10",
        titel: "Thomas Hattler",
        bild: "assets/teachers/Thomas_Hattler.jpg",
        text: "Der Lehrer vergibt gerne Nicht Genügend an die Schüler, damit sie nachsitzen müssen oder damit sein Unterrichtsthema in den Gehirnen der Schüler fest steckenbleibt. Er ist auch bekannt mit seinem „Hattler Cut“, den jeder zweite Lehrer auf dem Kopf liegt. Bei seinen Tests benötigt er „Doppel-Trennwände“, damit keiner spicken kann."
    },
    {
        id: "number11",
        datum: "12-11",
        titel: "Markus Schwärzler",
        bild: "assets/teachers/Markus_Schwaerzler.jpg",
        text: "Iiijaaahhhh. Dieser Spruch macht diesen Lehrer so besonders. Mit seinen Emotes sollte es eigentlich diesen in Lehrer in Fortnite geben. Die Pickaxe von ihm ist sein Presenter und als Backblink ein Schild wo draufsteht: „Ihr seid nicht das Handyyy“. Dieses Bundle sollte theoretischer Weise für 0V-Buchs gekauft werden können. Damit freuen sich sogar die NoSkin Spieler. "
    },
    {
        id: "number12",
        datum: "12-12",
        titel: "npc Battlock",
        bild: "assets/teachers/NPC_Battlock.jpg",
        text: "Battlock ist von seiner Persönlichkeit eigentlich ein sehr netter Mann. Verlängert seine Arbeitsaufträge 3-mal pro Aufgabe. Man muss auch dazu man muss beim Aufzeigen, dass gleiche 3-mal sagen, dass er das versteht."
    },
    {
        id: "number13",
        datum: "12-13",
        titel: "Hansjörg Praxmarer",
        bild: "assets/teachers/Hansjoerg_Praxmarer.jpg",
        text: "Bei diesem Lehrer haben seit dem Schulbeginn nicht einmal Stoff gemacht. Gruppe B hat stattdessen für die Schule Steckdosen, Leitungen und weiteres gebaut, sodass die HTL Dornbirn perfekt ausgestattet ist. Sein Masch macht diesen Lehrer so einzigartig, damit wir hinterherrennen müssen. Dieser Lehrer zählt du den chilligsten Lehrer an der Lehranstalt."
    },
    {
        id: "number14",
        datum: "12-14",
        titel: "Xynthea Gajo",
        bild: "assets/teachers/Xynthea_Gajo.jpeg",
        text: "Diese English-Lehrerin hat uns verkauft, damit sie eine jüngere Klasse unterrichtet. Ihr Unterricht war chillig aber ab und zu hatte man gar kein Bock auf English. Sie kann English und noch andere Sprachen vor allem Spanisch. cool"
    },
    {
        id: "number15",
        datum: "12-15",
        titel: "Magdalena Ehe",
        bild: "assets/teachers/Magdalena_Ehe.jpg",
        text: "Best Friend von Warschi. Geschichte war das Fach, dass sie uns beigebracht hat. Sie achtet seht auf die Grammatik und auf den Inhalt. Ich weiß nicht was ich schreiben soll."
    },
    {
        id: "number16",
        datum: "12-16",
        titel: "Mario Fink",
        bild: "assets/teachers/Mario_Fink.jpg",
        text: "Ab der dritten Klasse treffen wir diesen Lehrer jeden Dienstag in der ersten Stunde. Er ist eigentlich voll nett und sportlich (erkennt man an seinem Style vor allem die orange Brille). Seit diesem Jahr ist er in Test strenger geworden. Alle Handys müssen abgegeben und Trennwände müssen aufgestellt werden. Netter Kerl"
    },
    {
        id: "number17",
        datum: "12-17",
        titel: "Emma Kolb",
        bild: "assets/teachers/Emma_Kolb.jpg",
        text: "Wir hatten sie zwar nur ein Jahr, aber sie gehört zu einer der nettesten Personen an der Schule. Nach uns in der ersten Klasse, hat sie aufgehört SWP zu unterrichten. Dadurch haben sich die Mathestunden in Webuntis bei ihr vermehrt."
    },
    {
        id: "number18",
        datum: "12-18",
        titel: "Wolfgang Amadeus Kostyak",
        bild: "assets/teachers/Wolfgang_Kostyak.jpg",
        text: "Kosti würde dich zum McDonalds schicken, wenn du 3-mal in der Werkstätte gefehlt hast. Sein Geschreie kann man nicht ernst nehmen, da schon die Hälfte der Klasse schon am Lachen ist. Seine Kaffeepausen, die nur er verrichten kann, dauert für ihn 2 Lichtjahre. Wenn man während dem Unterricht am Spielen ist, reagiert er nicht viel drauf und sagt: „Jo sinda scho fertig“, und klatscht uns noch mehr Aufgaben."
    },
    {
        id: "number19",
        datum: "12-19",
        titel: "Wolfgang Neff",
        bild: "assets/teachers/Wolfgang_Neff.jpeg",
        text: "Neff Abe ist in dem meisten Zeiten brutal Braindead. Sein NWES-Unterricht war einer der langweiligsten Fächer in der Schule. Mit seiner „offiziellen Begrüßung“ fängt der Lehrer mit dem Unterricht an. Bei fragen während der Programmierung, kommt man mit weniger Informationen zurück zu seinem Platz. Wenn er den Code vor dir auf seinem PC schreibt, darfst du kein Bild davon machen. Auch wenn man ein Bild davon macht, es funktioniert nicht."
    },
    {
        id: "number20",
        datum: "12-20",
        titel: "Michael Leeb",
        bild: "assets/teachers/Michael_Leeb.jpg",
        text: "Der möchte gern Hacker hat diesen Jugendhumor. Auf Instagram ist seine Onlyfans Seite zu finden. Wenn jemand zu spät kommt, muss er Liegestütze machen, während Musik auf voller Lautstärke im Hintergrund läuft. Wenn ihr kein Bock mehr auf SWP habt, denkt euch einfach ein Programmierprojekt aus und ihr müsst ein halbes Jahr lang nichts mehr machen und kriegt eine free 1 im Zeugnis."
    },
    {
        id: "number21",
        datum: "12-21",
        titel: "Flora Bolter",
        bild: "assets/teachers/Flora_Bolter.jpg",
        text: "In der ersten Klasse war Bolters Unterricht sehr gemütlich. Jetzt möchte sie in einer Mathestunde so viel schaffen wie möglich. Auch wenn es nur 3 Minuten zum Schluss sind, meint sie „Eine Aufgabe geht sich noch aus“ und fängt and wie Flash zu schreiben. Im Unterricht verwechselt sie gerne dunkelhäutige Schüler. In Chemie versteht seit Monaten keiner mehr was und alle sind afk."
    },
    {
        id: "number22",
        datum: "12-22",
        titel: "Christian Stenech",
        bild: "assets/teachers/Christian_Stenech.jpg",
        text: "Dieser Typ ist bekannt mit seiner 1980 Kamera. Wird die Tafel vollgeschrieben, so schießt er 2 Fotos und lädt sie auf Teams hoch. Er hat auch den Drip von damals im Jahr 1980. Sein cooles Bandana steht ihm genauso gut. Das Schwätzen muss immer eingestellt sein und die Stenographie muss selber entziffert werden."
    },
    {
        id: "number23",
        datum: "12-23",
        titel: "Robert Soster",
        bild: "assets/teachers/Robert_Soster.png",
        text: "Wir hatten zwar den Lehrer nur einmal während der Mathe Schularbeit aber der Lehrer hat jedem im Visier. Während der Schularbeit mit diesem Lehrer hat man keine Chance in irgendeine Richtung zu schauen. Willst du kurz zu deinem Kolleg rüber schauen? Während du gerade nach der Lösung fragen willst, hörst du schon sein Geschrei von der anderen Seite des Klassenraumes."
    },
    {
        id: "number24",
        datum: "12-24",
        titel: "Thomas Mohr",
        bild: "assets/teachers/Thomas_Mohr.jpg",
        text: "Der Wifi Profi kommt gern zu spät zum Unterricht aber lässt uns dafür auch früher gehen. Es ist sehr einfach ihn vom Unterricht abzulenken. Gerne erzählt er wie er Paragleiten war oder wie er mit seinem Hund Campen geht. Zum Glück lässt er sich aber mit Süßigkeiten einfach bestechen. Fazit: einer der besten Lehrer."
    }
];



//Modal-Element und Close-Button Element holen
var modal = document.getElementById('modal1');
var closeBtn = document.getElementById('close');

//Event Listener für das Schließen des Modals
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

//Funktion, um das Datum zu überprüfen
function isTuerchenOeffenbar(datum) {
    var heute = new Date();
    var [monat, tag] = datum.split("-");
    var tuerchenDatum = new Date(heute.getFullYear(), monat - 1, tag);

    return heute >= tuerchenDatum;
}


//Funktion, um das Modal zu öffnen und mit Inhalten zu füllen
function openModal(tuerchenId) {
    var tuerchen = tuerchenInhalt.find(t => t.id === tuerchenId);
    if (tuerchen || isTuerchenOeffenbar(tuerchen.datum)) {
        document.getElementById("modal-title").textContent = tuerchen.titel;
        document.getElementById("teacher_photo").src = tuerchen.bild;
        document.getElementById("modal-text").textContent = tuerchen.text;
        modal.style.display = 'block';
        modal.style.opacity = 0;
        setTimeout(() => modal.style.opacity = 1, 100);
    } else {
        alert("Dieses Türchen kann noch nicht geöffnet werden!");
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



function aktualisiereCountdown() {
    const jetzt = new Date();
    const weihnachten = new Date(jetzt.getFullYear(), 11, 24); // Monate sind 0-basiert in JavaScript
    const differenz = weihnachten - jetzt;

    const tage = Math.floor(differenz / (1000 * 60 * 60 * 24));
    const stunden = Math.floor((differenz / (1000 * 60 * 60)) % 24);
    const minuten = Math.floor((differenz / 1000 / 60) % 60);
    const sekunden = Math.floor((differenz / 1000) % 60);

    document.getElementById('tage').textContent = tage;
    document.getElementById('stunden').textContent = stunden;
    document.getElementById('minuten').textContent = minuten;
    document.getElementById('sekunden').textContent = sekunden;
}

setInterval(aktualisiereCountdown, 1000);
