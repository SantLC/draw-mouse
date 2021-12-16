var d = document.getElementById("canvas");
var paper = d.getContext("2d");
var colorBorder="black";
d.addEventListener("mousedown",drawFirstPoint);
d.addEventListener("mouseup",drawSecondPoint);

// var delete = document.getElementById("del");
// delete.addEventListener("click",deleteScreen);


// var text = document.getElementById("txt");
// var t = text.value;
var clr;


// function deleteScreeen(){
//     if(t=="Blue"){
//         clr="blue";
//     }
//     if(t=="Red"){
//         clr="red";
//     }
//     if(t=="Yellow"){
//         clr="yellow";
//     }
//     if(t=="Green"){
//         clr="green";
//     }
//     if(t=="Black"){
//         clr="black";
//     }
// }

function drawFirstPoint(event){
    var x = event.x;
    var y = event.y;
    x = x - 9;
    y = y - 9;
    console.log("X|Y: ", x,y);
    paper.beginPath();
    paper.strokeStyle = clr;
    paper.lineWidth = 3;
    paper.moveTo(x,y);  
}
function drawSecondPoint(event){
    var x = event.x;
    var y = event.y;
    x = x - 9;
    y = y - 9;
    paper.lineTo(x,y);
    paper.stroke();
    paper.closePath();
}  

function drawLine(xi,yi,xf,yf,color){
    paper.beginPath();
    paper.strokeStyle = color;
    paper.lineWidth = 10;
    paper.moveTo(xi,yi);
    paper.lineTo(xf,yf);
    paper.stroke();
    paper.closePath();
}


drawLine(0,0,1000,0,colorBorder);
drawLine(1000,0,1000,500,colorBorder);
drawLine(1000,500,0,500,colorBorder);
drawLine(0,0,0,500,colorBorder);