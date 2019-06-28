// Und los geht die wilde Fahrt meine Freunde.

interface Monster {
    monsterName : string; // Name des Monsters
    monsterExperience : number; // Erfahrungspunkte bei besiegen des Monsters
    monsterModifier : string []; // Monster-Verstärker. Diese sind in diesem Fall nur Text! (Da hier einfacher Zufall für die Auswahl genutzt wird, kann der gleiche Eintrag auch doppelt vorkommen)
    monsterImage : string;  // Btrachtet diese wundervollen Bilder!!!! Danke Flaticon!
    monsterItem : string;  // Monster Item, viel mehr  als dorsch braucht es da allerdings nicht!
    monsterLevel : number; //soooo hier die ominöse Monster Level Variable 
    monsterHealthPoints : number; // Lebenspunkte
}
let monsterHolder : string = "monsterHoldingCell";                                  // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.

let playerName : string = "Spieler";                                            // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP : number = 0;                                                        // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel : number = 300;  
let playerLevel : number = 1;                                              // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.

// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let prefix : string[] = ["Wald-", "Seuchen-", "Uralte(s) ", "Gift-", "Brennende(s) ", "Kniescheibenzertrümmernde(s) ","Cooles ","littes ","Mächtiges ","Schwaches ","Suchendes "]; // length = 10
let monsterName : string[] = [" Wiesel", "Karl", "Ungeziefer","Paul","Troll","Ork"]; // length = 5, da 6 Einträge. Von 0-5
let suffix : string[] = [" des Verderbens", " aus der Hölle", " der Lethalität", " mit Rheuma", " der Redundanz", " der Zerberstung", " des Todes" ," aus China" ," aus der Hölle"," der Zerfickung"," der Hoffnungslosigkeit"]; // length = 10, da hier 11 Einträge sind. Von 0-10.
let monsterModifers : string[] = ["Ist nervig", "Linkshänder", "Bier-Connoisseur", "Verfehlt häufig", "Prokrastiniert", "Müde", "Verwirrt", "Wasserscheu", "Bipolar", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let Images : string[] = ["imgs/loewe.png","imgs/elefant.png","imgs/frankenstein.png","imgs/female.png","imgs/boss.png","imgs/fluschel.png","imgs/dasAuge.png","imgs/braun.png","imgs/bigMouth.png","imgs/zunge.png","imgs/gargoyle.png","imgs/auge.png","imgs/giant.png","imgs/baum.png","imgs/drache.png","imgs/werewolf.png"];
let monsterItem : string[] = [" Wurst "," Dorsch "," Attest ", " Stachelschwert ", " mittelschwere Depression", "Sexuell übertragbare Krankheit", "guten Sinn für Humor", "Meme Page auf Intagram"  ];

//let PushArray: number[] = [];

let monsterArray : Monster[] = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray ); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.

// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    document.getElementById("weakestMonsterFightButton").addEventListener("click", fightWeakestMonster, false);
    document.getElementById("allWeakMonsterFightButton").addEventListener("click", fightAllWeakMonsters, false);
    document.getElementById("allMonsterFightButton").addEventListener("click", fightAllMonsters, false);
   
    updatePlayerLevel(0);                                                                                    // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
    console.log("" + document.getElementById("monsterSpawner").innerHTML);                                

  document.getElementById("weakestMonsterFightButton").addEventListener("click", fightWeakestMonster, false);
  document.getElementById("allWeakMonsterFightButton").addEventListener("click", fightAllWeakMonsters, false);
  document.getElementById("allMonsterFightButton").addEventListener("click", fightAllMonsters, false);
}
 
// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster()
{
    let tempRandom: number = getRNGNumber(3) + 1;      // Wieviele neue Monster erzeugt werden (Zufallszahl von 1-3)

    if (tempRandom == 1) {
        console.log("Bruder muss los.Monsteralarm.");    // Ist einfach gut zu wissen
    } else {
        console.log("Bruder schau her es sind " + tempRandom + " neue Monster gespawnt!");  //Ohoh jezt wirds wild 
    }

    for (let i: number = 0; i < tempRandom; i++) {

    let newMonsterName : string = generateMonsterName();                // Eigens-gebaute Funktion, welche einen string zurück gibt.
    let newMonsterXP : number = generateMonsterXP();                    // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
    let newMonsterModifier : string[] = generateMonsterModifer();       // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.
    let newMonsterImage : string = generateMonsterImage();     // Bilder Bilder Bilder 
    let newMonsterItem : string = generateMonsterItem();       // Gebt diesem Monster einen Schild!
    let newMonsterLevel : number = getRNGNumber(11);     // Eigens gebaute Funktion für dieses shitty level 
    let newMonsterHP : number = generateMonsterHealthPoints();

    let newMonster : Monster = {                                        // Monster wird erstellt.
        monsterName : newMonsterName, 
        monsterExperience : newMonsterXP,
        monsterModifier : newMonsterModifier,
        monsterImage : newMonsterImage,
        monsterItem : newMonsterItem,
        monsterLevel : newMonsterLevel,
        monsterHealthPoints : newMonsterHP,
    };

    monsterArray.push(newMonster);                                      // Monster wird erst in diesem Schritt zu dem Array hinzugefügt 
    console.log(monsterArray[0].monsterExperience);
}
updateHTML();  //Unsere ominöse neue funktion
}

function updateHTML() {             //Diese funktion löst die anderen aus 
             
    clearMonsterCell();            //Diese funktion löscht nachher alles für uns
    monsterGenerateHTMLAll();      //Diese funktion stellt es wieder her allerding nachher ohne das monster das bekämpft wurde
     getMonsterCount();            // na wie viele sinds denn?
   
}
function clearMonsterCell() {
    console.log(monsterArray);
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

function getMonsterCount() : number       ///Was haben wir denn da?
{
    let monsterCount : number = monsterArray.length;
    return monsterCount;
}

function monsterGenerateHTML(count: number) 
{
    let holdingDiv : HTMLElement = document.createElement("div");       // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" + count );     // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
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
    monsterItem.innerHTML = "vorsicht! er/sie/es hat ein(e)(n) " + monsterArray[count - 1].monsterItem;
    holdingDiv.appendChild(monsterItem);

    let monsterBtn : HTMLElement = document.createElement("BUTTON");    // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen! ";                        // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn);   
                               
   //let monsterCount : number = count -1  ; //ACHTUNG ACHTUNG HIER STAND MAL -1 

    monsterBtn.addEventListener(                                        // Füge dem Monster eine Funktion hinzu.
        'click', function() {                                           // Wird bei Maus-Click ausgelöst.
            fightMonster(count -1);                                 // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
        }, false);    
                                    
      //Ier beginnt die genrierng von html  

   let monsterLevel : HTMLElement = document.createElement("p");    //Hier erstellen wir ein Html Element für das Level so dass sder Spieler es auch sehen kann 
      monsterLevel.innerHTML = "Level: " + monsterArray[count-1].monsterLevel   //Hier war mal ein -1
      holdingDiv.appendChild(monsterLevel);
    


   let monsterHealth : HTMLElement = document.createElement("p");     
      monsterHealth.innerHTML = "Lebenspunkte: " ;
      
      for (let i = 1; i <= monsterArray[count-1].monsterHealthPoints; i++){
        let HP : HTMLElement = document.createElement("span");
        monsterHealth.appendChild(HP);
    }
    holdingDiv.appendChild(monsterHealth);
    }

    //nun füllen wir das html 

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
function generateMonsterHealthPoints() : number
{
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
    let tempMonsterHP : number = 2 + getRNGNumber(6);
    return tempMonsterHP;
}

function generateMonsterXP() : number
{
    let tempMonsterXP : number = 200 + getRNGNumber(420);  //Naja ich hab das mal ein wenig erhöht
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

//Fighting Zone!!

function fightAllMonsters(){                          //Erste neue Funktion lässt den Spieler gegen ein Monster kämpfen und regelt über den Xp change ob es klappt und weitergeht
    for (let i = 0; i < monsterArray.length; i++){
        let prevPlayerXP : number = 0;
        fightMonster(i);              //Die normal  
        if (playerXP > prevPlayerXP){ // wenn die xp nun größer sind als die vrherigen hat der spieler gewonnen nd das nöchste monster wird abgefragt  
            i = i-1;
        }
    }
}

function fightWeakestMonster(){     // Erstellt einen index und vergleicht diesen dann mit den anderen monstern um das schwächste zu bekämpfen
    let indexWeakest : number = 0;
    for (let i = 1; i < monsterArray.length; i++){
        if (monsterArray[i].monsterLevel < monsterArray[indexWeakest].monsterLevel){
            indexWeakest = i;
        }
    }
    console.log("Leichtestes Opfer: " + indexWeakest)
    fightMonster(indexWeakest);
}

function fightAllWeakMonsters(){       //Perfekter Button um das Spiel schnell zu gewinnen undso 
    let untergrenze : number = playerLevel; //Hier werden alle Monster die unter dem Leveldes Spielers liegen rausgeucht und gesmashed 
    for (let i = 0; i < monsterArray.length; i++){
        let prevPlayerXP : number = 0;
        if (untergrenze > monsterArray[i].monsterLevel){
            fightMonster(i); 
            i = i-1;
        }
        

        if (i >= monsterArray.length){
            break;
        }
    }
}

function fightMonster(index : number)
{
console.log (monsterArray);      //unsere altbekannte fight funktion jetzt allerdengs plus bedingnungen oder so

if (playerLevel >= monsterArray[index].monsterLevel){  //Hab das mal ein wneig beschleunigt
    if (monsterArray[index].monsterHealthPoints == 1){  
        console.log("Bruder du hast es geschafft!");
        updatePlayerLevel(monsterArray[index].monsterExperience);
        monsterArray.splice(index,1);
        updateHTML();
    }
    else {
        console.log("Guter Hit Bro, das  Monster verliert einen LebensPunkt");
        monsterArray[index].monsterHealthPoints -= 1;
        updateHTML(); 
    }
     }

     else if(playerLevel < monsterArray[index].monsterLevel){
       alert("Nimm die Beine in die Hand Brudi das gewinnst du niemals!");
        updatePlayerLevel( -100);    //Habe die "Strafe" jetzt mal abgeschwächt sonst ist das einfach nur stressig!
    }

    }
 

// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel (XPchange : number)    //Sooo dann hier auch mal diese Funktion überarbeitet 
{
  let oldPlayerLevel : number = playerLevel;
    playerXP += XPchange; 

    if (Math.floor)(playerXP / playerXPperLevel) +1 >= 1;{
       playerLevel = Math.floor(playerXP / playerXPperLevel) +1;
    }
    let extendedXP : number = playerXPperLevel * playerLevel;
    document.getElementById("xpCounter").innerHTML = "Spieler-Level " + playerLevel + " (XP: " + playerXP + " / " + extendedXP + ")";       // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + " hat nun Level " + playerLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)");        // Spieler-Level in der Konsole.

    if (playerLevel == 20 && playerLevel > oldPlayerLevel){    //Puh dieses Level 20 dauert schon
        alert("Level 20? Hätte nicht gedacht das du es so weit schaffst!!!1!11! Viel spaß im Lategame!");
    }
}    
    


//function pusher() {            //Hier mal ein anderer Pusher
 //   PushArray.push(Math.random());
 //   console.log(PushArray)
