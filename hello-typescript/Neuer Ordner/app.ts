var canvas = document.querySelector("canvas");
var crc2 = canvas.getContext("2d");

crc2.fillStyle = "#FF0000"
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

crc2.beginPath();
crc2.arc(100, 120, 40, 10, 1.9 * Math.PI);
crc2.stroke();

crc2.beginPath();
crc2.ellipse(80, 50, 20, 20, 50, 50, 100,false);
crc2.stroke();

crc2.beginPath();
crc2.ellipse(130, 50, 20, 20, 50, 50, 100,false);
crc2.stroke();

crc2.beginPath();
crc2.arc(110, 60, 60, 10, 3.1 * Math.PI);
crc2.stroke();