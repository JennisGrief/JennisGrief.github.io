window.alert("Kanns losgehen?");
var msg = "Hello World"; //An dieser Stelle schonmal der erste Kommentar nur zur Sicherheit
console.log(msg);
document.write("Woher komme ich bloß?Achja.Typescript"); //Oha braucht man dieses Html jetzt überhaupt noch??!!
window.onload = function () {
    console.log('This is where the fun begins'); //Das ist eine Lüge
    document.getElementById("oof").addEventListener("click", changeStuff);
    console.log(document.getElementById("demo"));
    console.log("Konsolenausgabe 2: " + document.body.getElementsByClassName("class1"));
};
function changeStuff() {
    let _id = "oof";
    let stringVariable = "o";
    let name = "bruh";
    let number1 = 1;
    let number2 = 2;
    name += name;
    console.log(name);
    console.log("Hier könnteihre Werbung stehen" + stringVariable);
    let _numberTotal = number1 + number2;
    let _boolean = true;
    console.log(number1 + number2);
    console.log(number1 + _id);
    document.getElementById(_id).innerHTML += "u";
    document.getElementById(_id).className = "centered";
}
document.write("         Heeeey ich bin auch so ein Typescript Ding");
window.onclick = function classchange() {
    console.log("Puh Class Change");
    document.getElementById("Class-changer").innerHTML = "Soeben habe ich meine Klasse gewechselt";
    document.getElementById("Class-changer").className = "NeueKlasse";
    function Rechnung() {
        let Wort1 = "Kerzen";
        console.log(Wort1);
        let Wort2 = "Halter";
        console.log(Wort2);
        let number1 = 420;
        console.log(number1);
        let number2 = 69;
        number1 = 2718;
        console.log(number1);
        console.log(number2);
        console.log(Wort1 + Wort2);
        console.log(number1 + number2);
        console.log(Wort1 + number1);
    }
    window.onclick = function () {
        document.getElementById('Dumm').innerHTML = 'Das ist meine finale Form!';
    };
};
//# sourceMappingURL=script.js.map