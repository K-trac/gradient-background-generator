//javascript can read from the Dom and write it out

var css=document.querySelector("h3");

var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var color3=document.querySelector(".color3");
var color4=document.querySelector(".color4");
var color5=document.querySelector(".color5");
var color6=document.querySelector(".color6");
var color7=document.querySelector(".color7");
var color8=document.querySelector(".color8");
var color9=document.querySelector(".color9");
var color10=document.querySelector(".color10");

var body=document.getElementById("gradient");

var button1=document.getElementById("ranCol");
var button2=document.getElementById("vertical");
var button3=document.getElementById("diag");
var button4=document.getElementById("elipse");
var button5=document.getElementById("circle");

// use the consol.log to check the vars are catching the correct data..

console.log(css);
console.log(color1);
console.log(color2);
console.log(body);

// Original coding, works but is too bulky
// function toRight(){
// 	var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var randomColor1 = "rgb(" + x + "," + y + "," + z + ")";
//     var x2 = Math.floor(Math.random() * 256);
//     var y2 = Math.floor(Math.random() * 256);
//     var z2 = Math.floor(Math.random() * 256);
//     var randomColor2 = "rgb(" + x2 + "," + y2 + "," + z2 + ")";
//     body.style.background = "linear-gradient(to right,"+randomColor1+", "+randomColor2+")"
// 	css.textContent = body.style.background + ";";
// 	var color1=document.querySelector(".color1");
// };

// function switchDir(){
// 	var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var randomColor1 = "rgb(" + x + "," + y + "," + z + ")";
//     var x2 = Math.floor(Math.random() * 256);
//     var y2 = Math.floor(Math.random() * 256);
//     var z2 = Math.floor(Math.random() * 256);
//     var randomColor2 = "rgb(" + x2 + "," + y2 + "," + z2 + ")";
// 	body.style.background = "linear-gradient("+randomColor1+", "+randomColor2+")"
// 	css.textContent = body.style.background + ";";
// };

// function toDiag(){
// 	var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var randomColor1 = "rgb(" + x + "," + y + "," + z + ")";
//     var x2 = Math.floor(Math.random() * 256);
//     var y2 = Math.floor(Math.random() * 256);
//     var z2 = Math.floor(Math.random() * 256);
//     var randomColor2 = "rgb(" + x2 + "," + y2 + "," + z2 + ")";
//     body.style.background = "linear-gradient(to bottom right,"+randomColor1+", "+randomColor2+")"
// 	css.textContent = body.style.background + ";";
// };

// function elipse(){
// 	var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var randomColor1 = "rgb(" + x + "," + y + "," + z + ")";
//     var x2 = Math.floor(Math.random() * 256);
//     var y2 = Math.floor(Math.random() * 256);
//     var z2 = Math.floor(Math.random() * 256);
//     var randomColor2 = "rgb(" + x2 + "," + y2 + "," + z2 + ")";
//     body.style.background = "radial-gradient("+randomColor1+", "+randomColor2+")"
// 	css.textContent = body.style.background + ";";
// };

// function circle(){
// 	var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var randomColor1 = "rgb(" + x + "," + y + "," + z + ")";
//     var x2 = Math.floor(Math.random() * 256);
//     var y2 = Math.floor(Math.random() * 256);
//     var z2 = Math.floor(Math.random() * 256);
//     var randomColor2 = "rgb(" + x2 + "," + y2 + "," + z2 + ")";
//     body.style.background = "radial-gradient(circle,"+randomColor1+", "+randomColor2+")"
// 	css.textContent = body.style.background + ";";
// };

// function randomColor(){
// 	var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256); {
//    	var randomColor = "rgb(" + x + "," + y + "," + z + ")";{
//     }
//     return randomColor1;
// }  This doesn't work cause color.value needs the hex code!! 


function randomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function toRight(){
	color1.value = randomColor();
	color2.value = randomColor();
	linRight();
};

function linRight(){
	body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")"
	css.textContent = body.style.background + ";";
};


function switchDir(){
	color3.value = randomColor();
	color4.value = randomColor();
	linBottom();
};

function linBottom(){
	body.style.background = "linear-gradient("+color3.value+", "+color4.value+")"
	css.textContent = body.style.background + ";";
};


function toDiag(){
	color5.value = randomColor();
	color6.value = randomColor();
	linDiag();
};

function linDiag(){
	body.style.background = "linear-gradient(to bottom right,"+color5.value+", "+color6.value+")"
	css.textContent = body.style.background + ";";
};


function elipse(){
	color7.value = randomColor();
	color8.value = randomColor();
	linElipse();
};

function linElipse(){
	body.style.background = "radial-gradient("+color7.value+", "+color8.value+")"
	css.textContent = body.style.background + ";";
};


function circle(){
	color9.value = randomColor();
	color10.value = randomColor();
	linCircle();
};

function linCircle(){
	body.style.background = "radial-gradient(circle,"+color9.value+", "+color10.value+")"
	css.textContent = body.style.background + ";";
};


color1.addEventListener("input", linRight);
color2.addEventListener("input", linRight);
button1.addEventListener("click", toRight);


color3.addEventListener("input", linBottom);
color4.addEventListener("input", linBottom);
button2.addEventListener("click", switchDir);


color5.addEventListener("input", linDiag);
color6.addEventListener("input", linDiag);
button3.addEventListener("click", toDiag);


color7.addEventListener("input", linElipse);
color8.addEventListener("input", linElipse);
button4.addEventListener("click", elipse);


color9.addEventListener("input", linCircle);
color10.addEventListener("input", linCircle);
button5.addEventListener("click", circle);

