// BEISPIEL UND AUFGABE:
// Dieses Skript soll als Beispiel dazu dienen, wie Interfaces und Arrays genutzt werden können.
// Hier wird ein ungefährer Aufbau eines simplen Klick-Spiels gezeigt. Der Nutzer kann dabei durch Button ein neues Monster erstellen.
// Zu beginn werden hier zuerst Interfaces, danach Variablen deklariert.
// Weiter unten kommen dann die Funktionen.

// EINGEBAUTE FEHLER: Innerhalb jedes Programmteiles wurden ein paar fiese Fehler eingebaut!
// Diese werden vermutlich erst in der Browser-Konsole angezeigt. 
// Testet also alle Funktionen, jeden Button welchen ihr finden könnt!
// Hilfe: Benutzt auf Verdacht ein Konsolen-Log oder ruft die Variable in der Konsole des Browsers auf.
// Hilfe2: Betrachtet den umliegenden Code. Trackt die Werte von Variablen, falls euch etwas komisch vorkommt!

// Monster sind vielfältig und können sehr unterschiedlich sein. Dennoch werden sie durch allgemeine Attribute, wie Name und Lebenspunkte, vereint.
// Deshalb wird hier ein interface genutzt!
// Ein interface erlaubt das erstellen von einem ungefährem Haupt-Objekt.
// Object = Komplexer Datentyp auf Grundlage primitiver Datentypen

interface Monster {
    monsterName : string; // Name des Monsters
    monsterHealthPoints : number; // Lebenspunkte
    monsterAttackPoints : number; // "Angriffspunkte" zusammen mit dem Image sollte das doch den zwei neuen Kategorien entsprechen 
    monsterExperience : number; // Erfahrungspunkte bei besiegen des Monsters
    monsterModifier : string []; // Monster-Verstärker. Diese sind in diesem Fall nur Text! (Da hier einfacher Zufall für die Auswahl genutzt wird, kann der gleiche Eintrag auch doppelt vorkommen)
    monsterImage : string;
    monsterItem : string;
}

// ------- Variablen -------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Variablen: I (1 / einer)

let monsterHolder : string = "monsterHoldingCell";                                  // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.

let playerName : string = "Spieler";                                            // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP : number = 0;                                                        // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel : number = 500;                                                // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.

// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let prefix : string[] = ["Wald-", "Seuchen-", "Uralte(s) ", "Gift-", "Brennende(s) ", "Kniescheibenzertrümmernde(s) ","Cooles ","littes ","Mächtiges ","Schwaches ","Suchendes "]; // length = 10
let monsterName : string[] = [" Wiesel", "Karl", "Ungeziefer","Paul","Troll","Ork"]; // length = 5, da 6 Einträge. Von 0-5
let suffix : string[] = [" des Verderbens", " aus der Hölle", " der Lethalität", " mit Rheuma", " der Redundanz", " der Zerberstung", " des Todes" ," aus China" ," aus der Hölle"," der Zerfickung"," der Hoffnungslosigkeit"]; // length = 10, da hier 11 Einträge sind. Von 0-10.
let monsterModifers : string[] = ["Ist nervig", "Linkshänder", "Bier-Connoisseur", "Verfehlt häufig", "Prokrastiniert", "Müde", "Verwirrt", "Wasserscheu", "Bipolar", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let Images : string[] = ["imgs/loewe.png","imgs/elefant.png","imgs/frankenstein.png","imgs/female.png","imgs/boss.png","imgs/fluschel.png","imgs/dasAuge.png","imgs/braun.png","imgs/bigMouth.png","imgs/zunge.png","imgs/gargoyle.png","imgs/auge.png","imgs/giant.png","imgs/baum.png","imgs/drache.png","imgs/werewolf.png"];
let monsterItem : string[] = [" Wurst "," Dorsch "];

let PushArray: number[] = [];

let monsterArray : Monster[] = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray ); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.

// ----------- Funktionen ----------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: III (3 / drei)

// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayerLevel(); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
    console.log("" + document.getElementById("monsterSpawner").innerHTML);                                   ///////////////////MONSTERSPAWNER BUTTONINHALT KANN NICHT AUSGEGEBEN WERDEN WENN DAS ELEMENT NOCH NICHT ERSTELLT WURDE\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    document.getElementById("Arraypusher").addEventListener("click", pusher)
}


// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster()
{
    let tempRandom: number = getRNGNumber(3) + 1;      // Wieviele neue Monster erzeugt werden (Zufallszahl von 1-3)

    if (tempRandom == 1) {
        console.log("Bruder muss los.Monsteralarm.");
    } else {
        console.log("Bruder schau her es sind " + tempRandom + " neue Monster gespawnt!");
    }

    for (let i: number = 0; i < tempRandom; i++) {
    let newMonsterName : string = generateMonsterName();                // Eigens-gebaute Funktion, welche einen string zurück gibt.
    let newMonsterHP : number = generateMonsterHitPoints();             // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
    let newMonsterXP : number = generateMonsterXP();                    // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
    let newMonsterModifier : string[] = generateMonsterModifer();       // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.
    let newMonsterAp : number = generateMonsterAp();
    let newMonsterImage : string = generateMonsterImage();
    let newMonsterItem : string = generateMonsterItem();

    let newMonster : Monster = {                                        // Monster wird erstellt.
        monsterName : newMonsterName, 
        monsterHealthPoints : newMonsterHP,
        monsterExperience : newMonsterXP,
        monsterModifier : newMonsterModifier,
        monsterAttackPoints : newMonsterAp,
        monsterImage : newMonsterImage,
        monsterItem : newMonsterItem,
    };

    monsterArray.push(newMonster);                                      // Monster wird erst in diesem Schritt zu dem Array hinzugefügt 
    console.log("Es erscheint ein Monster mit " + monsterArray[monsterArray.length - 1].monsterExperience + "XP gespawnt");
}
updateHTML();  //Unsere ominöse neue funktion
}

function updateHTML() {            //Diese funktion löst die anderen aus 
    clearMonsterCell();            //Diese funktion löscht nachher alles für uns
    monsterGenerateHTMLAll();      //Diese funktion stellt es wieder her allerding nachher ohne das monster das bekämpft wurde

    console.log("Soviele Monster gibt es " + getMonsterCount());
}
function clearMonsterCell() {
    console.log("");
    let monsterHoldingDiv: HTMLElement = document.getElementById(monsterHolder);
    while (monsterHoldingDiv.firstChild) {
        monsterHoldingDiv.removeChild(monsterHoldingDiv.firstChild);

    }
    console.log("LEER!");
}

function monsterGenerateHTMLAll() {
    for (let i: number = 1; i <= monsterArray.length; i++) {
        monsterGenerateHTML(i);
        console.log("schon fertig" + i);
    }
    console.log("jetzt bin ich ganz fertig!");
}

function monsterGenerateHTML(count: number) {
    let holdingDiv : HTMLElement = document.createElement("div");       // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" + count);     // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
    holdingDiv.setAttribute("class", "monster");                        // Klasse für Visuals.
    document.getElementById(monsterHolder).appendChild(holdingDiv);     // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"

    
    let monsterName : HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterName.innerHTML = monsterArray[count - 1].monsterName;                     // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    let monsterMod : HTMLElement = document.createElement("p");        // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[count - 1].monsterModifier[0] + ", " +  monsterArray[count -1].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod);                                // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.

    
    let monsterIcon : HTMLElement = document.createElement("img");       // Erstelle ein <img>-Element
    monsterIcon.setAttribute("src", monsterArray[count -1].monsterImage);              // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
    monsterIcon.setAttribute("alt", "Schreckliches Monster");            // Das alt für das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterIcon);  

    let monsterItem: HTMLElement = document.createElement("p");
    monsterItem.innerHTML = "vorsicht! es/sie hat ein " + monsterArray[count - 1].monsterItem;
    holdingDiv.appendChild(monsterItem);


    let monsterBtn : HTMLElement = document.createElement("BUTTON");    // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen! ";                        // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn);   
                               
   let monsterCount : number = count -1;  

    monsterBtn.addEventListener(                                        // Füge dem Monster eine Funktion hinzu.
        'click', function() {                                           // Wird bei Maus-Click ausgelöst.
            fightMonster(monsterCount);                                 // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
        }, false);    
                                                         
 

   let monsterHP : HTMLElement = document.createElement("p");
      monsterHP.innerHTML = "Lebenspunkte: " + monsterArray[count - 1].monsterHealthPoints;
        holdingDiv.appendChild(monsterHP);
    }

    

// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber : number) : number
{
    return Math.floor(Math.random() * _maxNumber);   //so das müsste das gleiche machen nur ein wenig kleiner 
}


// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurück.
function generateMonsterName() : string {

    let generatedMonsterName : string = ""; // Erstelle einen leeren String für das Monster

    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber : number = getRNGNumber(prefix.length);               // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber];                           // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length);                       // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber];                             // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length);                            // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber];                          // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.

    return generatedMonsterName;
}


function generateMonsterImage() :string          //ein neuer versu h für die räudigen bilder
{
    let rngNumber : number = getRNGNumber(Images.length);
    return Images[rngNumber];
}

// Wird für die Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterHitPoints() : number
{
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
    let tempMonsterHP : number = 1 + getRNGNumber(10);
    return tempMonsterHP;
}
function generateMonsterAp() : number
{
  let tempMonsterAp : number = 2 +   getRNGNumber(5);
  return tempMonsterAp;
}

function generateMonsterXP() : number
{
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
    let tempMonsterXP : number = 100 + getRNGNumber(420);
    return tempMonsterXP;
}

// Wird für die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei Einträgen zurück.
function generateMonsterModifer() : string[]
{
    let tempMonsterMod : string[] = [];                                         // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)];  // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod;                                                      // Gebe das hier zusammengesetzte Array wieder zurück.
}
function generateMonsterItem(): string {
    let tempMonsterItem: string;
    tempMonsterItem = monsterItem[getRNGNumber(monsterItem.length)];

    return tempMonsterItem;
}

// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
function fightMonster(_index : number)
{

    console.log("Spieler kämpft gegen Monster und gewinnt!");                       // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
    console.log("Das Monster weigert sich zu verschwinden.");                       // Wird nächste Stunde erweitert.
    
    playerXP += monsterArray[_index ].monsterExperience;                 	    // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.
    monsterArray.splice(_index,1);
    updatePlayerLevel();
    updateHTML();
}


// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel()
{
    let tempLevel : number = Math.floor(playerXP / playerXPperLevel +1)
    let extendedXP : number = playerXPperLevel * tempLevel                                                                        // Spieler-Level = XP / XPproLevel

    document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")";       // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)");        // Spieler-Level in der Konsole.
}
function getMonsterCount(): number {
    return monsterArray.length;
}

function pusher() {            //Hier mal ein anderer Pusher
    PushArray.push(Math.random());
    console.log(PushArray);
}