
//Hello world



/* 1. Interface Karten */
interface karten {
    bild: number;
    value: number;
    position: string;
}


let h7:karten={
    bild:1,
    value:7,
    position: "nichts",
}

let h8:karten={
    bild: 1,
    value: 8,
    position: "nichts",
}

let h9:karten={
    bild: 1,
    value: 9,
    position: "nichts",
}

let h10:karten={
    bild: 1,
    value: 10,
    position: "nichts",
}

let hB:karten={
    bild: 1,
    value: 11,
    position: "nichts",
}

let hD:karten={
    bild: 1,
    value: 12,
    position: "nichts",
}

let hK:karten={
    bild: 1,
    value: 13,
    position: "nichts",
}

let hA:karten={
    bild: 1,
    value: 14,
    position: "nichts",
}

let kr7:karten={
    bild: 2,
    value: 7,
    position: "nichts",
}

let kr8:karten={
    bild: 2,
    value: 8,
    position: "nichts",
}

let kr9:karten={
    bild: 2,
    value: 9,
    position: "nichts",
}

let kr10:karten={
    bild: 2,
    value: 10,
    position: "nichts",
}

let krB:karten={
    bild: 2,
    value: 11,
    position: "nichts",
}

let krD:karten={
    bild: 2,
    value: 12,
    position: "nichts",
}

let krK:karten={
    bild: 2,
    value: 13,
    position: "nichts",
}

let krA:karten={
    bild: 2,
    value: 14,
    position: "nichts",
}

let p7:karten={
    bild: 3,
    value: 7,
    position: "nichts",
}

let p8:karten={
    bild: 3,
    value: 8,
    position: "nichts",
}

let p9:karten={
    bild: 3,
    value: 9,
    position: "nichts",
}

let p10:karten={
    bild: 3,
    value: 10,
    position: "nichts",
}

let pB:karten={
    bild: 3,
    value: 11,
    position: "nichts",
}

let pD:karten={
    bild: 3,
    value: 12,
    position: "nichts",
}

let pK:karten={
    bild: 3,
    value: 13,
    position: "nichts",
}

let pA:karten={
    bild: 3,
    value: 14,
    position: "nichts",
}

let ka7:karten={
    bild: 4,
    value: 7,
    position: "nichts",
}

let ka8:karten={
    bild: 4,
    value: 8,
    position: "nichts",
}

let ka9:karten={
    bild: 4,
    value: 9,
    position: "nichts",
}

let ka10:karten={
    bild: 4,
    value: 10,
    position: "nichts",
}

let kaB:karten={
    bild: 4,
    value: 11,
    position: "nichts",
}

let kaD:karten={
    bild: 4,
    value: 12,
    position: "nichts",
}

let kaK:karten={
    bild: 4,
    value: 13,
    position: "nichts",
}

let kaA:karten={
    bild: 4,
    value: 14,
    position: "nichts",
}


/* 2. Arrays */
let deck:karten[]=[h7, h8, h9, h10, hB, hD, hK, hA, kr7, kr8, kr9, kr10, krB, krD, krK, krA, p7, p8, p9, p10, pB, pD, pK, pA, ka7, ka8, ka9, ka10, kaB, kaD, kaK, kaA];

let hand:karten[]=[];
let handGegner:karten[]=[];

let obersteKarte:karten;

let ablagestapel:karten[]=[];


/* 3. Funktion Spielstart */
function spielstart():void {
    let kartenanzahl: number;

    do { 
        kartenanzahl = parseInt(prompt("Kartenanzahl angeben (Zahl von 1 bis 6 eingeben)")); 
        }
    
    while(isNaN(kartenanzahl) || kartenanzahl > 6 || kartenanzahl < 1);

    console.log("kartenanzahl: " +kartenanzahl);

    for(let n:number=0; n<kartenanzahl; n++){ /* so lange die Variable n kleiner ist als die Anzahl der Karten, wird die Funktion "karteZiehen" ausgeführt */
        karteZiehen();
    }

    console.log(hand);

    nachziehstapelGenerieren();

    let i:number = Math.floor(Math.random() * (deck.length));
    obersteKarte=deck[i];
    deck.splice(i,1);

    ablagestapelGenerieren();

    document.getElementById("Sortieren").addEventListener("click", kartenSortieren);

    handkarten();
    gegnerKarten();
}


/* 4. Funktion zum Karte ziehen */
function karteZiehen():void {
    if (deck.length>0) { 
        let i:number = Math.floor(Math.random() * (deck.length));
        hand.push(deck[i]); /* Karte aus dem Deck wird den Handkarten hinzugefügt */
        deck.splice(i,1);
        handkarten();
       // gegnerKarten();
        console.log(hand);
        }
    else {
        alert("Der Nachziehstpel ist leer.")
    }
}


/* 5. Funktion um den Ablagestapel zu generieren */
function ablagestapelGenerieren():void {

    let write:string = "";
        write += `<div class="cards">`;


        switch (obersteKarte.bild) {
            case 1:
                write += `<img src="img/herz.jpeg" class="symbol" alt="♥">
                <div class="rot">`;
                break;
            case 2:
                write += `<img src="img/kreuz.jpeg" class="symbol" alt="♣"> 
                <div class="schwarz">`;
                break;
            case 3:
                write += `<img src="img/pik.jpeg" class="symbol" alt="♠">
                <div class="schwarz">`;
                break;
            case 4:
                write += `<img src="img/karo.jpeg" class="symbol" alt="♦">
                <div class="rot">`;
                break;
            default:
                console.log("Bild konnte nicht geladen werden")  
        }

        switch (obersteKarte.value) {
            case 7:
            write += `7</div>`;
            break;
        case 8:
            write += `8</div>`;
            break;
        case 9:
            write += `9</div>`;
            break;
        case 10:
            write += `10</div>`;
            break;        
        case 11:
            write += `B</div>`; 
            break;  
        case 12:
            write += `D</div>`; 
            break;          
        case 13:
            write += `K</div>`; 
            break;          
        case 14:
            write += `A</div>`; 
            break;
        default:
            console.log("value konnte nicht geladen werden")
        }
        write += `</div>`
document.getElementById("Stapel").innerHTML = `${write}`;

}


/* 6. Funktion um den Nachziehstapel zu generieren */
function nachziehstapelGenerieren():void{
    document.getElementById("Deck").addEventListener("click", karteZiehen); /* durch das click-event wird die Funktion karteZiehen ausgeführt */
    document.getElementById("Deck").innerHTML = `<div class="cards">
    <img src="img/rückseite.jpeg" alt="MISSING TEXTURE" class="kartenrückseite">
    </div>`;     
}


/* 7. Funktion um die Handkarten zu generieren */
function handkarten():void {

    document.getElementById("kartenAufHand").addEventListener("click", karteLegen);
    document.getElementById("kartenAufHand").innerHTML = "";

    for (let n:number = 0; n<hand.length; n++){
        hand[n].position="position"+n;
        let write:string = "";
        write += `<div class="cards" id="position${n}">`;

        switch (hand[n].bild){
            case 1:
                write += `<img src="img/herz.jpeg" class="symbol" alt="♥">
                <div class="rot">`;
                break;
            case 2:
                write += `<img src="img/kreuz.jpeg" class="symbol" alt="♣"> 
                <div class="schwarz">`;
                break;
            case 3:
                write += `<img src="img/pik.jpeg" class="symbol" alt="♠">
                <div class="schwarz">`;
                break;
            case 4:
                write += `<img src="img/karo.jpeg" class="symbol" alt="♦"> 
                <div class="rot">`;
                break;
            default:
                console.log("Bild konnte nicht geladen werden")  
            }

        switch (hand[n].value){
            case 7:
                write += `7</div>`;
                break;
            case 8:
                write += `8</div>`;
                break;
            case 9:
                write += `9</div>`;
                break;
            case 10:
                write += `10</div>`;
                break;        
            case 11:
                write += `B</div>`; 
                break;  
            case 12:
                write += `D</div>`; 
                break;          
            case 13:
                write += `K</div>`;
                break;          
            case 14:
                write += `A</div>`;
                break;
            default:
                console.log("value konnte nicht geladen werden")
            }
            write += `</div>`
        document.getElementById("kartenAufHand").innerHTML += `${write}`;        
    }
}

function gegnerKarten():void {
      document.getElementById("gegnerKarten").addEventListener("click", karteLegen);
    document.getElementById("gegnerKarten").innerHTML = "";

    for (let n:number = 0; n<handGegner.length; n++){
        handGegner[n].position="position"+n;
        let write:string = "";
        write += `<div class="cards" id="position${n}">`;

        switch (handGegner[n].bild){
            case 1:
                write += `<img src="img/herz.jpeg" class="symbol" alt="♥">
                <div class="rot">`;
                break;
            case 2:
                write += `<img src="img/kreuz.jpeg" class="symbol" alt="♣"> 
                <div class="schwarz">`;
                break;
            case 3:
                write += `<img src="img/pik.jpeg" class="symbol" alt="♠">
                <div class="schwarz">`;
                break;
            case 4:
                write += `<img src="img/karo.jpeg" class="symbol" alt="♦"> 
                <div class="rot">`;
                break;
            default:
                console.log("Bild konnte nicht geladen werden")  
            }

        switch (handGegner[n].value){
            case 7:
                write += `7</div>`;
                break;
            case 8:
                write += `8</div>`;
                break;
            case 9:
                write += `9</div>`;
                break;
            case 10:
                write += `10</div>`;
                break;        
            case 11:
                write += `B</div>`; 
                break;  
            case 12:
                write += `D</div>`; 
                break;          
            case 13:
                write += `K</div>`;
                break;          
            case 14:
                write += `A</div>`;
                break;
            default:
                console.log("value konnte nicht geladen werden")
            }
            write += `</div>`
        document.getElementById("gegnerKarten").innerHTML += `${write}`;        
    }
}



/* 8. Funktion zum legen einer Karte */
function karteLegen():void {
    let gewählteKarteID: HTMLElement = <HTMLElement>event.target;
    
    for (let i=0; i < hand.length; i++) {
        if (String(gewählteKarteID.getAttribute("id")) == hand[i].position) {
            if (hand[i].bild==obersteKarte.bild || hand[i].value==obersteKarte.value) {
                ablagestapel.push(obersteKarte);
                obersteKarte=hand[i];
                hand[i].position="nichts";
                hand.splice(i,1);

                handkarten();
                ablagestapelGenerieren();
            }
            else {
                alert("diese Karte kann nicht gespielt werden.")
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


function sortByvalue(_x: karten, _y: karten): number { /* die values der Karten werden miteinander verglichen */
    let value_x: number = _x.value; /* die Variablen werden definiert */
    let value_y: number = _y.value;

    if (value_x < value_y) return -1; 
    if (value_x > value_y) return 1; 
    if (value_x == value_y) return 0; 
}

function sortBybild(_x: karten, _y: karten): number { /* die Bilder der Karten werden miteinander verglichen */
    let bild_x: number = _x.value;
    let bild_y: number = _y.value;

    if (bild_x < bild_y) return -1; 
    if (bild_x > bild_y) return 1; 
    if (bild_x == bild_y) return 0; 
}


/* 10. Funktion zum Karten ziehen beim Drücken der Leertaste */
function whatKey(event: KeyboardEvent):void { /* wenn die Leertaste gedrückt wird, wird eine Karte gezogen.*/
    if (event.keyCode == 32) karteZiehen();
}


/* 11. Funktion zum initialisieren */
function init() {
    spielstart();
}


/* 12. Eventlisteners */
document.addEventListener("DOMContentLoaded", init);
document.addEventListener("keydown", whatKey);