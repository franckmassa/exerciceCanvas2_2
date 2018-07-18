var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

//Ligne vertical gauche
ctx.beginPath();
ctx.moveTo(2,2);
ctx.lineTo(2,398);
ctx.closePath();
ctx.stokeStyle = 'black';
ctx.stroke();
//Carré bleu
ctx.beginPath();
ctx.moveTo(10,5);
ctx.rect(10,5,380,380);
ctx.fillStyle = '#0000FF';
ctx.fill();
//Courbe haute de la soucoupe
ctx.beginPath();
ctx.moveTo(140,150);
ctx.quadraticCurveTo(170,100,200,150);
ctx.fillStyle = '#FFFFFF';
ctx.fill();
//courbe milieu de la soucoupe
ctx.beginPath();
ctx.moveTo(80,170);
ctx.quadraticCurveTo(170,120,260,170);
ctx.fillStyle = '#E0E1F3';
ctx.fill();
//courbe basse de la soucoupe
ctx.beginPath();
ctx.moveTo(80,170);
ctx.quadraticCurveTo(170,230,260,170);
ctx.fillStyle = '#E0E1F3';
ctx.fill();
