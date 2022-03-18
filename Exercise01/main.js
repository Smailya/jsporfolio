var firstname;
var larstname;
var Ema;

document.getElementById("submitButton").onclick = userInput;
document.getElementById("reset").onclick=resetInput;

function userInput(){
    
    firstname = document.getElementById("name").value;
    larstname = document.getElementById("surname").value;
    Ema= document.getElementById("email").value;
    Display();
}


function Display(){
    document.getElementById("outputName").innerHTML = firstname;
    document.getElementById("outputSurname").innerHTML = larstname;
    document.getElementById("outputEmail").innerHTML = Ema;

}

function resetInput(){
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";

}