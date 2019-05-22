console.log('Dokument ist vermutlich noch nicht geladen');
window.onload = function () {
    console.log('Dokument ist geladen');
    document.getElementById("demo").addEventListener("click", changeStuff);
    // console.log(document.getElementById("demo"));
    // console.log("Konsolenausgabe 2: " + document.body.getElementsByClassName("class1"));
};
function changeStuff() {
    // Variablen-Deklaration
    /*
        Syntax beachten!
        Hinter (fast) jeder Zeile kommt ein Semikolon. Später werden wir andere Fälle lernen.
    */
    var _id = "demo"; // Unterstrich vor Variable ist keine Konvention. Konvention für Variablen-Namen ist hier normalerweise der camelCase.
    var stringVariable = "";
    var name = "adrian";
    var number1 = 1;
    var number2 = 2;
    // Ein paar Zuweisungen - gehen sowohl mit strings als auch mit numbers!
    number1 = 2; // Kommentar
    number1 = number1 + 2; // Werte können sich selbst auch nehmen, um sich "neu" zu berechnen
    number1 += 2; // Selbe zeile wie obendrüber, nur kompakter geschrieben.
    name += name;
    console.log(name);
    console.log("Diese Variable ist leer: " + stringVariable);
    var _numberTotal = number1 + number2;
    var _boolean = true; // kann nur true oder false sein.
    console.log(number1 + number2);
    console.log(number1 + _id);
    document.getElementById(_id).innerHTML += " Stuff"; // Beispiel: html-string-"Wert" wird durch stuff erweitert.
    document.getElementById(_id).className = "centered";
}
//# sourceMappingURL=greeter.js.map