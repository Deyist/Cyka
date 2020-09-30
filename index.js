//First
/* let button = document.querySelector("button")
let body = document.querySelector("body")

const colors = ["Red", "Orange", "Salmon", "Green", "blue", "yellow", "magenta", "aqua", "cyan", "black", "brown", "gray", "pink", "tomato"]
button.style.backgroundColor=colors[4]
body.style.backgroundColor = colors[2]
button.addEventListener("click", color)
 //body.addEventListener("click", alertt)
function alertt(){
    alert("Wow");
}
function color(){
    const colorPicker = Math.floor(Math.random()*13)
    body.style.backgroundColor = colors[colorPicker]
    
}*/
//end of first

//start of second
//Attempt to reverse



//Buttons

let button = document.querySelector (".button")

let button2= document.querySelector (".button2")

let button3= document.querySelector (".button3")

let button4= document.querySelector (".button4")

let button5= document.querySelector (".button5")

let butstop = document.querySelector (".butstop")









//Body
let body = document.querySelector("body")


//Audio
var idi = document.getElementById("idi")

let caramel = document.getElementById("caramel")

var tri = document.getElementById("tri")

var Russia = document.getElementById("Russia")

var Cheeki = document.getElementById("Cheeki")


//Color Arrays
const colors = ["Red", "Orange", "Salmon", "purple", "Green", "blue", "yellow", "magenta", "aqua", "cyan", "Chartreuse", "CornflowerBlue", "Crimson", "pink", "tomato", "DarkOrchid", "DarkMagenta", "DarkSlateBlue", "DarkOrange", "DarkSalmon", "DarkViolet", "DeepPink", "DodgerBlue", "ForestGreen", "Gold", "Indigo", "LightSeaGreen", "Lime", "MediumSpringGreen", "MidnightBlue", "Navy", "OrangeRed", "Plum", "RebeccaPurple", "PowderBlue", "YellowGreen", "Turquoise", "Teal", "Thistle", "SteelBlue", "Snow", "PaleVioletRed", ]

const colors2 = ["Orange","Yellow","Green","Indigo","Magenta","Crimson","purple","pink"]


//Gradient Arrays + variabls
let grad1 = ""
const colors3 = ["#00ffff", "#03f5ff", "#05ebff","#08e0ff", "#0ad6ff", "#0dccff", "#0fc2ff", "#12b8ff", "#14adff", "#17a3ff", "#1a99ff", "#1f85ff", "#217aff", "#2470ff", "#2666ff", "#295cff", "#2b52ff", "#2e47ff", "#303dff", "#3333ff", "#f0e6ff", "#e0ccff", "#d1b3ff", "#c299ff",	 "#b380ff", "#a366ff", "#944dff", "#8533f", "#751aff", "#6600ff", "#5c00e6", "#5200cc", "#4700b3", "#3d0099", "#330080", "#290066", "#1f004d"]

//const imgArray4 = ["gopnik.jpg", "gopnik2.jpg", "gopnik3.jpg", "gopnik4.jpg"]
const colors4=["#ff00ff", "#ff0df2", "#ff1ae6" , "#ff26d9", "#ff33cc" , "#ff40bf", "#ff4cb2", "#ff59a6", "#ff6699", "#ff738c", "#ff8080", "#ff8c73", "#ff9966", "#ffa659", "#ffb24d", "#ffbf40", "#ffcc33", "#ffd926", "#ffe619", "#fff20d", "#ffff00", "#e6ffe6", "#ccffcc", "#b3ffb3#", "99ff99", "#80ff80", "#66ff66", "#4dff4d", "#33ff33", "#1aff1a", "#00ff00", "#00e600", "#00cc00", "#00b300", "#009900", "#008000", "#006600", "#004d00", "#003300", "#001a00"]


const colors5 = [ "#ffcce6", "#ffb3d9",	"#ff99cc", "#ff80bf", "#ff66b3", "#ff4da6",	 "#ff3399",	 "#ff1a8c",	 "#ff0080",	 "#e60073",	 "#cc0066",	 "#b30059",	 "#99004d", "#800040", "#660033", "#4d0026", "#cc33ff", "#cf36f2", "#d138e6", "#d43bd9", "#d63dcc", "#d940bf", "#db42b2","#de45a6", "#e04799", "#e34a8c", "#e64c80", "#e84f73", "#eb5266", "#ed5459", "#f0574d", "#f25940", "#f55c33", "#f75e26", "#fa6119", "#fc630d", "#ff6600"]



//Button Color
button.style.backgroundColor=colors[0]

//body.style.backgroundColor = colors[2]

//Change Buttons
button2.addEventListener("click", but2)

button3.addEventListener("click", but3)

button4.addEventListener("click", but4)

button5.addEventListener("click", but5)

butstop.addEventListener("click", stopIt)

button.addEventListener("click", alertt)
 //body.addEventListener("click", alertt)

//Stripes if playing func

function stripes(){
    var img = document.querySelector(".adid");

    if(Russia.paused == true){
        src.removeChild(img);
    }else if(Russia.paused == false){
        src.appendChild(img);
    }
}
 //For Button 1
function alertt(){
    alert("Idi Na hyu");
    idi.volume = 0.1;
    
        idi.play();
        idi.loop();
        
}
//For button 2

function but2(){
   
    
    const colorPicker = Math.floor(Math.random()*38)
    button.style.backgroundColor = colors3[colorPicker]
    tri.volume = 0.1;
    
    tri.play();
    tri.loop();
}
/*tri.volume = 0.1;
    
tri.play();
tri.loop();

const colorPicker = Math.floor(Math.random()*40)
button.style.backgroundColor = colors[colorPicker]*/

//For button 3
function but3(){
    
    const colorPicker = Math.floor(Math.random()*41)
    button.style.backgroundColor = colors4[colorPicker]
    Russia.volume = 0.1;
    
    Russia.play();
    Russia.loop();
}

//For button 4
function but4(){
   
    const colorPicker = Math.floor(Math.random()*40)
    button.style.backgroundColor = colors5[colorPicker]
    Cheeki.volume = 0.1;
    
    Cheeki.play();
    Cheeki.loop();
}

//For button 5
function but5(){
    
    const colorPicker = Math.floor(Math.random()*8)
    button5.style.backgroundColor = colors[colorPicker]
    const colorPicker2 = Math.floor(Math.random()*40)
    button.style.backgroundColor = colors[colorPicker2]

    caramel.volume = 0.1;
    
    caramel.play();
    caramel.loop();

}
//For stop button
function remove(){
    adidas.removechild(img);
}
function stopIt(){
    tri.pause();
    idi.pause();
    Russia.pause();
    Cheeki.pause();
    caramel.pause();
    tri.currentTime = 0;
     idi.currentTime = 0;
     Russia.currentTime = 0;
     Cheeki.currentTime = 0;
     caramel.currentTime = 0;
    button.style.backgroundColor = colors[0]
    
}



 /*   function pauseIt();{
        tri.pause();
        idi.pause();
     tri.currentTime = 0;
     idi.currentTime = 0;
    const colorPicker = Math.floor(Math.random()*40)
    button.style.backgroundColor = colors[colorPicker]
} */

//Original color and audio
/*
function color(){
    
    const colorPicker = Math.floor(Math.random()*40)
        button.style.backgroundColor = colors[colorPicker]
        tri.volume = 0.1;
    
        tri.play();
        tri.loop();
        
        
}*/




/*var color2;

for (color2 = 0; i < 10; color2++){
    const colorPicker = Math.floor(Math.random()*13)
    button.style.backgroundColor = colors[colorPicker]
    caramel.volume = 0.1;
    caramel.play();
    caramel.loop();
}*/
/* //prototype
var colors = ["Red", "Orange", "Salmon", "Green", "blue", "yellow", "magenta", "aqua", "cyan", "Chartreuse", "CornflowerBlue", "Crimson", "pink", "tomato", "DarkOrchid", "DarkMagenta", "DarkSlateBlue", "DarkOrange", "DarkSalmon", "DarkViolet", "DeepPink", "DodgerBlue", "ForestGreen", "Gold", "Indigo", "LightSeaGreen", "Lime", "MediumSpringGreen", "MidnightBlue", "Navy", "OrangeRed", "Plum", "RebeccaPurple", "PowderBlue", "YellowGreen", "Turquoise", "Teal", "Thistle", "SteelBlue", "Snow", "PaleVioletRed"];
var arrayLength = colors.length;
for (var i = 0; i < arrayLength; i++) {
    colors[i]
} */
//https://jsfiddle.net/zp2785sa/#run