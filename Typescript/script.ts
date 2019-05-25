window.alert("Kanns losgehen?");
var msg: string = "Hello World"; //An dieser Stelle schonmal der erste Kommentar nur zur Sicherheit
console.log(msg);

document.write("Woher komme ich bloß?Achja.Typescript"); //Oha braucht man dieses Html jetzt überhaupt noch??!!

window.onload = function () { //Hier passiert etwas bei Seitenstart
    console.log('This is where the fun begins'); //Das ist eine Lüge
    document.getElementById("oof").addEventListener("click", changeStuff);
     console.log(document.getElementById("demo"));
     console.log("Konsolenausgabe 2: " + document.body.getElementsByClassName("class1"));
}
function changeStuff(){
    let _id : string = "oof"; 
    let stringVariable : string = "o";
    let name : string = "bruh";
    let number1 : number = 1;
    let number2 : number = 2;

    name += name;
    console.log(name);

    console.log("Hier könnteihre Werbung stehen" + stringVariable);

    let _numberTotal : number = number1 + number2;
    let _boolean : boolean = true; 

    console.log(number1 + number2);
    console.log(number1 + _id);

    document.getElementById(_id).innerHTML += "u"; 
    document.getElementById(_id).className = "centered";
}
document.write("         Heeeey ich bin auch so ein Typescript Ding"); 
window.onclick = function classchange() //Hier wird dann die Klasse gewechselt
{
  console.log("Puh Class Change")
  document.getElementById("Class-changer").innerHTML="Soeben habe ich meine Klasse gewechselt";
  document.getElementById("Class-changer").className="NeueKlasse"
function Rechnung() // Und hier wird gerechnet 
{
  let Wort1 : string = "Kerzen"; 
  console.log(Wort1);
  let Wort2 : string ="Halter"; 
  console.log(Wort2);
  let number1 : number = 420;
  console.log(number1);
  let number2 : number = 69;
  number1 =2718;
  console.log(number1);
  console.log(number2);
  console.log(Wort1+Wort2); 
  console.log(number1+number2); 
  console.log(Wort1+number1); 
}
window.onclick = function () //Hier verändern wir ein Html Dingens 
{
    document.getElementById('Dumm').innerHTML = 'Das ist meine finale Form!'; 
}

}