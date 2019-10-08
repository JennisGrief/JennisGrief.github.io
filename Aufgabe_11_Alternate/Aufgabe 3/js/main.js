//Hello world
var h7 = {
    bild: 1,
    value: 7,
    position: "nichts",
};
var h8 = {
    bild: 1,
    value: 8,
    position: "nichts",
};
var h9 = {
    bild: 1,
    value: 9,
    position: "nichts",
};
var h10 = {
    bild: 1,
    value: 10,
    position: "nichts",
};
var hB = {
    bild: 1,
    value: 11,
    position: "nichts",
};
var hD = {
    bild: 1,
    value: 12,
    position: "nichts",
};
var hK = {
    bild: 1,
    value: 13,
    position: "nichts",
};
var hA = {
    bild: 1,
    value: 14,
    position: "nichts",
};
var kr7 = {
    bild: 2,
    value: 7,
    position: "nichts",
};
var kr8 = {
    bild: 2,
    value: 8,
    position: "nichts",
};
var kr9 = {
    bild: 2,
    value: 9,
    position: "nichts",
};
var kr10 = {
    bild: 2,
    value: 10,
    position: "nichts",
};
var krB = {
    bild: 2,
    value: 11,
    position: "nichts",
};
var krD = {
    bild: 2,
    value: 12,
    position: "nichts",
};
var krK = {
    bild: 2,
    value: 13,
    position: "nichts",
};
var krA = {
    bild: 2,
    value: 14,
    position: "nichts",
};
var p7 = {
    bild: 3,
    value: 7,
    position: "nichts",
};
var p8 = {
    bild: 3,
    value: 8,
    position: "nichts",
};
var p9 = {
    bild: 3,
    value: 9,
    position: "nichts",
};
var p10 = {
    bild: 3,
    value: 10,
    position: "nichts",
};
var pB = {
    bild: 3,
    value: 11,
    position: "nichts",
};
var pD = {
    bild: 3,
    value: 12,
    position: "nichts",
};
var pK = {
    bild: 3,
    value: 13,
    position: "nichts",
};
var pA = {
    bild: 3,
    value: 14,
    position: "nichts",
};
var ka7 = {
    bild: 4,
    value: 7,
    position: "nichts",
};
var ka8 = {
    bild: 4,
    value: 8,
    position: "nichts",
};
var ka9 = {
    bild: 4,
    value: 9,
    position: "nichts",
};
var ka10 = {
    bild: 4,
    value: 10,
    position: "nichts",
};
var kaB = {
    bild: 4,
    value: 11,
    position: "nichts",
};
var kaD = {
    bild: 4,
    value: 12,
    position: "nichts",
};
var kaK = {
    bild: 4,
    value: 13,
    position: "nichts",
};
var kaA = {
    bild: 4,
    value: 14,
    position: "nichts",
};
/* 2. Arrays */
var deck = [h7, h8, h9, h10, hB, hD, hK, hA, kr7, kr8, kr9, kr10, krB, krD, krK, krA, p7, p8, p9, p10, pB, pD, pK, pA, ka7, ka8, ka9, ka10, kaB, kaD, kaK, kaA];
var hand = [];
var handGegner = [];
var obersteKarte;
var ablagestapel = [];
/* 3. Funktion Spielstart */
function spielstart() {
    var kartenanzahl;
    do {
        kartenanzahl = parseInt(prompt("Kartenanzahl angeben (Zahl von 1 bis 6 eingeben)"));
    } while (isNaN(kartenanzahl) || kartenanzahl > 6 || kartenanzahl < 1);
    console.log("kartenanzahl: " + kartenanzahl);
    for (var n = 0; n < kartenanzahl; n++) { /* so lange die Variable n kleiner ist als die Anzahl der Karten, wird die Funktion "karteZiehen" ausgeführt */
        karteZiehen();
    }
    console.log(hand);
    nachziehstapelGenerieren();
    var i = Math.floor(Math.random() * (deck.length));
    obersteKarte = deck[i];
    deck.splice(i, 1);
    ablagestapelGenerieren();
    document.getElementById("Sortieren").addEventListener("click", kartenSortieren);
    handkarten();
    gegnerKarten();
}
/* 4. Funktion zum Karte ziehen */
function karteZiehen() {
    if (deck.length > 0) {
        var i = Math.floor(Math.random() * (deck.length));
        hand.push(deck[i]); /* Karte aus dem Deck wird den Handkarten hinzugefügt */
        deck.splice(i, 1);
        handkarten();
        // gegnerKarten();
        console.log(hand);
    }
    else {
        alert("Der Nachziehstpel ist leer.");
    }
}
/* 5. Funktion um den Ablagestapel zu generieren */
function ablagestapelGenerieren() {
    var write = "";
    write += "<div class=\"cards\">";
    switch (obersteKarte.bild) {
        case 1:
            write += "<img src=\"img/herz.jpeg\" class=\"symbol\" alt=\"\u2665\">\n                <div class=\"rot\">";
            break;
        case 2:
            write += "<img src=\"img/kreuz.jpeg\" class=\"symbol\" alt=\"\u2663\"> \n                <div class=\"schwarz\">";
            break;
        case 3:
            write += "<img src=\"img/pik.jpeg\" class=\"symbol\" alt=\"\u2660\">\n                <div class=\"schwarz\">";
            break;
        case 4:
            write += "<img src=\"img/karo.jpeg\" class=\"symbol\" alt=\"\u2666\">\n                <div class=\"rot\">";
            break;
        default:
            console.log("Bild konnte nicht geladen werden");
    }
    switch (obersteKarte.value) {
        case 7:
            write += "7</div>";
            break;
        case 8:
            write += "8</div>";
            break;
        case 9:
            write += "9</div>";
            break;
        case 10:
            write += "10</div>";
            break;
        case 11:
            write += "B</div>";
            break;
        case 12:
            write += "D</div>";
            break;
        case 13:
            write += "K</div>";
            break;
        case 14:
            write += "A</div>";
            break;
        default:
            console.log("value konnte nicht geladen werden");
    }
    write += "</div>";
    document.getElementById("Stapel").innerHTML = "" + write;
}
/* 6. Funktion um den Nachziehstapel zu generieren */
function nachziehstapelGenerieren() {
    document.getElementById("Deck").addEventListener("click", karteZiehen); /* durch das click-event wird die Funktion karteZiehen ausgeführt */
    document.getElementById("Deck").innerHTML = "<div class=\"cards\">\n    <img src=\"img/r\u00FCckseite.jpeg\" alt=\"MISSING TEXTURE\" class=\"kartenr\u00FCckseite\">\n    </div>";
}
/* 7. Funktion um die Handkarten zu generieren */
function handkarten() {
    document.getElementById("kartenAufHand").addEventListener("click", karteLegen);
    document.getElementById("kartenAufHand").innerHTML = "";
    for (var n = 0; n < hand.length; n++) {
        hand[n].position = "position" + n;
        var write = "";
        write += "<div class=\"cards\" id=\"position" + n + "\">";
        switch (hand[n].bild) {
            case 1:
                write += "<img src=\"img/herz.jpeg\" class=\"symbol\" alt=\"\u2665\">\n                <div class=\"rot\">";
                break;
            case 2:
                write += "<img src=\"img/kreuz.jpeg\" class=\"symbol\" alt=\"\u2663\"> \n                <div class=\"schwarz\">";
                break;
            case 3:
                write += "<img src=\"img/pik.jpeg\" class=\"symbol\" alt=\"\u2660\">\n                <div class=\"schwarz\">";
                break;
            case 4:
                write += "<img src=\"img/karo.jpeg\" class=\"symbol\" alt=\"\u2666\"> \n                <div class=\"rot\">";
                break;
            default:
                console.log("Bild konnte nicht geladen werden");
        }
        switch (hand[n].value) {
            case 7:
                write += "7</div>";
                break;
            case 8:
                write += "8</div>";
                break;
            case 9:
                write += "9</div>";
                break;
            case 10:
                write += "10</div>";
                break;
            case 11:
                write += "B</div>";
                break;
            case 12:
                write += "D</div>";
                break;
            case 13:
                write += "K</div>";
                break;
            case 14:
                write += "A</div>";
                break;
            default:
                console.log("value konnte nicht geladen werden");
        }
        write += "</div>";
        document.getElementById("kartenAufHand").innerHTML += "" + write;
    }
}
function gegnerKarten() {
    document.getElementById("gegnerKarten").addEventListener("click", karteLegen);
    document.getElementById("gegnerKarten").innerHTML = "";
    for (var n = 0; n < handGegner.length; n++) {
        handGegner[n].position = "position" + n;
        var write = "";
        write += "<div class=\"cards\" id=\"position" + n + "\">";
        switch (handGegner[n].bild) {
            case 1:
                write += "<img src=\"img/herz.jpeg\" class=\"symbol\" alt=\"\u2665\">\n                <div class=\"rot\">";
                break;
            case 2:
                write += "<img src=\"img/kreuz.jpeg\" class=\"symbol\" alt=\"\u2663\"> \n                <div class=\"schwarz\">";
                break;
            case 3:
                write += "<img src=\"img/pik.jpeg\" class=\"symbol\" alt=\"\u2660\">\n                <div class=\"schwarz\">";
                break;
            case 4:
                write += "<img src=\"img/karo.jpeg\" class=\"symbol\" alt=\"\u2666\"> \n                <div class=\"rot\">";
                break;
            default:
                console.log("Bild konnte nicht geladen werden");
        }
        switch (handGegner[n].value) {
            case 7:
                write += "7</div>";
                break;
            case 8:
                write += "8</div>";
                break;
            case 9:
                write += "9</div>";
                break;
            case 10:
                write += "10</div>";
                break;
            case 11:
                write += "B</div>";
                break;
            case 12:
                write += "D</div>";
                break;
            case 13:
                write += "K</div>";
                break;
            case 14:
                write += "A</div>";
                break;
            default:
                console.log("value konnte nicht geladen werden");
        }
        write += "</div>";
        document.getElementById("gegnerKarten").innerHTML += "" + write;
    }
}
/* 8. Funktion zum legen einer Karte */
function karteLegen() {
    var gewählteKarteID = event.target;
    for (var i = 0; i < hand.length; i++) {
        if (String(gewählteKarteID.getAttribute("id")) == hand[i].position) {
            if (hand[i].bild == obersteKarte.bild || hand[i].value == obersteKarte.value) {
                ablagestapel.push(obersteKarte);
                obersteKarte = hand[i];
                hand[i].position = "nichts";
                hand.splice(i, 1);
                handkarten();
                ablagestapelGenerieren();
            }
            else {
                alert("diese Karte kann nicht gespielt werden.");
            }
        }
    }
}
/* 9. Funktionen zum sortieren der Karten */
function kartenSortieren() {
    hand.sort(sortByvalue);
    hand.sort(sortBybild);
    handkarten();
}
function sortByvalue(_x, _y) {
    var value_x = _x.value; /* die Variablen werden definiert */
    var value_y = _y.value;
    if (value_x < value_y)
        return -1;
    if (value_x > value_y)
        return 1;
    if (value_x == value_y)
        return 0;
}
function sortBybild(_x, _y) {
    var bild_x = _x.value;
    var bild_y = _y.value;
    if (bild_x < bild_y)
        return -1;
    if (bild_x > bild_y)
        return 1;
    if (bild_x == bild_y)
        return 0;
}
/* 10. Funktion zum Karten ziehen beim Drücken der Leertaste */
function whatKey(event) {
    if (event.keyCode == 32)
        karteZiehen();
}
/* 11. Funktion zum initialisieren */
function init() {
    spielstart();
}
/* 12. Eventlisteners */
document.addEventListener("DOMContentLoaded", init);
document.addEventListener("keydown", whatKey);
//# sourceMappingURL=main.js.map