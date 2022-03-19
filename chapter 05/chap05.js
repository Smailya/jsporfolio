var it1;
var it2;
var it3;

document.getElementById("changeList").onclick = promptUser; //event listener
//document.getElementById("changeList").addEventListener= promptUser;

function promptUser(){
    it1 = prompt("Enter first item");
    it2 = prompt("Enter second item");
    it3 = prompt("Enter third item");
    updateList();
}

function updateList(){
document.getElementById("first").innerHTML = it1;
document.getElementById("second").innerHTML = it2;
document.getElementById("third").innerHTML = it3;

}

