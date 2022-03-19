//var trainSpeed = 250;
var trainSpeed = 250;
var trainPosition = 0;
var animation;

/*var train = document.getElementById("train");
train.addEventListener("click", speedUp); */

/*var startButtonn = document.getElementById("start");
train.addEventListener("click", startTrain )*/

document.getElementById("start").onclick= startTrain;

document.getElementById("stopButton").onclick= stopTrain;



//var stopButton = document.getElementById("stopButton");
//stopButton.addEventListener("click", stopTrain);

/*function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed); */

    function startTrain() {
        if (trainSpeed < 10) {
            trainSpeed -= 10;
        }
        console.log("train speed: " + trainSpeed);
    
        clearInterval(animation);
        animation = setInterval(frame, trainSpeed);




    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 1094) {
        alert(":O!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 1094) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}