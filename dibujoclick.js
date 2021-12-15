var d = document.getElementById("canvas");
var paper = d.getContext("2d");

var colorBorder="black";

document.addEventListener("click",click);

function drawLine(xi,yi,xf,yf,color){
    paper.beginPath();
    paper.strokeStyle = color;
    paper.lineWidth = 10;
    paper.moveTo(xi,yi);
    paper.lineTo(xf,yf);
    paper.stroke();
    paper.closePath();
}

function click(event){
    console.log(event);
}

drawLine(0,0,1000,0,colorBorder);
drawLine(1000,0,1000,500,colorBorder);
drawLine(1000,500,0,500,colorBorder);
drawLine(0,0,0,500,colorBorder);