window.alert("Achtung Achtung was sie hier sehen werden könnte sie dauerhaft in ihrer Lebensqualität einschränken!");
var msg = "Hello World"; //An dieser Stelle schonmal der erste Kommentar nur zur Sicherheit
console.log(msg);
document.write("Woher komme ich bloß?Achja."); //Oha braucht man dieses Html jetzt überhaupt noch??!!
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
    console.log("Hier könnteihre Werbung stehen " + stringVariable);
    let _numberTotal = number1 + number2;
    let _boolean = true;
    console.log(number1 + number2);
    console.log(number1 + _id);
    document.getElementById(_id).innerHTML += "u";
    document.getElementById(_id).className = "centered";
}
//# sourceMappingURL=script.js.map