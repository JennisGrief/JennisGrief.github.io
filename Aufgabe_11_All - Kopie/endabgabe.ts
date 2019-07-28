//Aww Shit here we go again
interface card {   //So hier kommt unser Interface für die Karten 
    cardWorth: number;  //Der Wert der Karte 1-8
    cardColour: String; // Die Farbe der Karte 
}
let opponentDeck: card[] = [];   //Gegnerisches Deck 
let drawPile: card[] = [];       //Nachziehstapel
let discardPile: card[] = [];    //Ablagestapel
let playerDeck: card[] = [];     //Spielerdeck
 
window.onload = function (){     //Funktion staret als allererstes 
    document.getElementById("drawPile").addEventListener("click",drawCard,false);  //Der Zieg stapel wird klickbar gemacht 
    letsGo(); //StarterFunktion wird gestartet 
}

function generateCards(){ //Hierfindet die Generierung der Karten ohne Html statt 
    let Color: string;
    for(let i=1; i<=8; i++){  //Sobald i=8 wird nicht weitergezählt so kommen wir auf unsere Kartenzahl 1-8
        for (let c=1; c<=4; c++){ //Gleiches Spiel für die divesren Farben jeder c wert gibt eine andere Farbe aus 
            
            if(c==1){
                Color = "Blue"
            }

            if(c==2){
                Color = "Red"
            }

            if(c==3){
                Color = "Yellow"
            }

            if(c==4){
                Color = "Green"
            }

            let NewCard: card = { //Zack hier sind rie druckfrischen Karten
                cardColour: Color,   cardWorth: i
            }
            drawPile.push(NewCard); //Und dann kommen sie in den Nachziehstapel 
        }
    } 
}

function generateCardHTML(Card: card, Target: string, index: number){   //Die Generierung des Karten Html findet hier statt 
    let holdingDiv: HTMLElement = document.createElement("div");        //Erstmal ein div erstellen 
    holdingDiv.setAttribute("class", "Card" + " " + Card.cardColour);   //An dieser Stelle wird die Farbe "festgelegt"
    document.getElementById(Target).appendChild(holdingDiv);           

    let Number: HTMLElement = document.createElement("p");     //Hier kommt die Zahl auf die Karte 
    Number.setAttribute("class", "cardWorth");                
    Number.innerHTML = "" + Card.cardWorth;
    holdingDiv.appendChild(Number);

    if(Target == "playerDeck"){      //kommen die Karten ins Spielerdeck werden sie klickbar gemacht 
        holdingDiv.addEventListener("click", function() {playCard(Card, index)}, false); //Und der Click trigger die Karte legen Funktion
    }
}

function turnedCard(card: card, Target: string, index: number){  //Gleiches Spiel nochmal für die karten die der Spieler nicht sehen kann 
    let holdingDiv: HTMLElement = document.createElement("div"); //Ein div wurd erstellt 
    holdingDiv.setAttribute("class", "card" + " " + "turned"); 
    document.getElementById(Target).appendChild(holdingDiv); //Und rein da 
}
function letsGo(){  //Funktion für den Start des Spiels 
    generateCards();   //Karten werden erstellt
    drawPile = mixItUp(drawPile); //Karten im Nachzeihstapel werden gemischt 
    for(let i=0; i<4; i++){   //i wird hochgezählt bis auf 4 was uns dann 5 Karten auf der Hand beschert 
        playerDeck.push(drawPile[i]); //Dann kommen die Karten vo Deck auf die Hand
        opponentDeck.push(drawPile[i+4]);  //Gleiches Spiel für die gegner Hand 
    }

    discardPile.push(drawPile[10]);   //Jetzt kommen die Karten auf die STapel 
     drawPile.splice(0,11);  

     console.log(opponentDeck);
    console.log(playerDeck);
    
    for(let i=0; i<playerDeck.length; i++) {      //Jetzt werden die  Karten im HTML erstellt  
        generateCardHTML(playerDeck[i],"playerDeck",i);
    }
    for(let i=0; i<opponentDeck.length; i++) {
        turnedCard(opponentDeck[i],"opponentDeck",i); //das gleiche wie beim Spieler nur sind die karten hier turned 
    }

    generateCardHTML(discardPile[discardPile.length-1],"discardPile",discardPile.length-1);  //Html für den Ablagestapel wird generiert
    turnedCard(drawPile[drawPile.length-1],"drawPile",drawPile.length-1);   //Und der nahchziehstapel wird generiert
}

function playCard(card: card, index: number){ //Funktion zum legen von Karten
    if(card.cardWorth == discardPile[discardPile.length-1].cardWorth || card.cardColour == discardPile[discardPile.length-1].cardColour){ //Gleiche Zahl oder gleiche Farbe undso 
        discardPile.push(card);  //Auf den Ablagestapel mit der Karte!
        playerDeck.splice(index, 1); //Spielerdeck wird klein 
        if(playerDeck.length < 1){spielEnde(true);}  //hier wird die Siegesfunktion getriggert wenn die Karten des Spielers unter 1 kommen 
        updateHTML("discardPile"); //UPDATE
        updateHTML("playerDeck");  //UPDATE
        opponentTurn();
    }
}

function checkCards(array : card[]) : boolean { //Funktion die überprüft ob eine Karte passt
    let correctCard : boolean = false; 
    for (let i=0; i<array.length;i++) {  //Zählt das Deck karte für karte durch 
        if (array[i].cardColour == discardPile[discardPile.length-1].cardColour || array[i].cardWorth == discardPile[discardPile.length-1].cardWorth){ //Die Regeln nach denen ein Karte passt kennen wir ja alle 
            correctCard = true; //Sobald er seine Karte hat ist schluss
            break;
        }
    }
    return correctCard; //Und er gibt diese dann zurück
}

function drawCard(){   //Lässt den Spiler ne Karte ziehen 
    if(checkCards(playerDeck)==false){  //Aber nur wenn er keine legen kann = kein krasses Metagameplay 
        playerDeck.push(drawPile[drawPile.length-1]); //Karte geht zum Spieler
        drawPile.splice(drawPile.length-1, 1); //Stapel wird eins kleiner 
        updateHTML("drawPile");   //UPDATE
        updateHTML("playerDeck"); //UPDATE
      
    }
    if(checkCards(playerDeck)==false){  //Also wenn du jetzt noch nichtkannst ist der Gegner dran
        opponentTurn();  //jup da ist er 
    }
}

function updateHTML(Target : string){  //Klassisches update HTML Wird immer gebraucht wenn sich der Aufenthaltsort von Karten verändert 
    clearHTML(Target);
    if(Target == "playerDeck"){                    //Hier für das Spielerdeck usw 
        for(let i=0; i< playerDeck.length; i++) {
            generateCardHTML(playerDeck[i],"playerDeck",i);
        }
    }
    if(Target == "opponentDeck"){
        for(let i=0; i< opponentDeck.length; i++) {
            turnedCard(opponentDeck[i],"opponentDeck",i);
        }
    }
    if(Target == "discardPile"){
        generateCardHTML(discardPile[discardPile.length-1], "discardPile",discardPile.length-1);
    }
    if(Target == "drawPile"){
        turnedCard(drawPile[drawPile.length-1], "drawPile", drawPile.length-1);
    }
}

function clearHTML(Target : string){           //Wird getriggert von updateHTML
    let Element: HTMLElement = document.getElementById(Target);
    while (Element.firstChild){
        Element.removeChild(Element.firstChild);  //da cleared es eben 
    }
}

function opponentTurn(){  //Der öminöse gegnerische Zug wird hier bearbeitet
    let i=0;    //quasi die gleiche Funktion wie checkCards
    for(i; i<opponentDeck.length;i++){  //Da zählt er durch 
        if(opponentDeck[i].cardColour == discardPile[discardPile.length-1].cardColour || opponentDeck[i].cardWorth == discardPile[discardPile.length-1].cardWorth){
            discardPile.push(opponentDeck[i]); //Auf den Ablagestapel mit der Karte 
            opponentDeck.splice(i,1);
            if(opponentDeck.length < 1){spielEnde(false);}  //Und hier die andere Option fürs SpielEnde 
            updateHTML("opponentDeck"); //UPDATE
            updateHTML("discardPile");  //UPDATE
            break;
        }
    }
    if(i >= opponentDeck.length){    //Wird durchgezählt und es findet sich nichts passendes wird gezogen 
       opponentDeck.push(drawPile[drawPile.length-1]);
        drawPile.splice(drawPile.length-1,1);
        updateHTML("opponentDeck");
        updateHTML("drawPile");
       //Die frisch gezogene karte kann der Gegner jetzt noch versuchen zu legen, kalppt das nicht ist sein zug vorbei 
    if(opponentDeck[opponentDeck.length-1].cardColour == discardPile[discardPile.length-1].cardColour || opponentDeck[opponentDeck.length-1].cardWorth == discardPile[discardPile.length-1].cardWorth){  
        discardPile.push(opponentDeck[opponentDeck.length-1]);
        opponentDeck.splice(opponentDeck.length-1,1);
        updateHTML("opponentDeck");
        updateHTML("discardPile");
    }
    }
}

function mixItUp(array : card[]){  //funktion zu Mischen der Karten
    let currentIndex = array.length;
    let TempValue;
    let randomIndex;

    while(currentIndex != 0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;

        TempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = TempValue;
    }
    return array;
}

function spielEnde(win: boolean){ //Finally ist es sowiet ein einfacher alert wenn das spiel vorbei ist 
    if(win){
        alert("Gut gespielt Brudi,dem hast du es echt gezeigt!");
    }
    else{
        alert("Hey du brauchst dich nicht zu schämen, komm einfach später wieder. Drücke Strg+r um es erneut zu versuchen!");
    }
}
