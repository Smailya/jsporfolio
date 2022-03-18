document.getElementById("start").onclick= game;

function game(){
    
   
    var answer = prompt ("Please guess the secret number (1-10)");
    var guess = parseInt (answer);
    var secretnum = 7;

     if(guess === secretnum){
         alert("You entered" + " " + guess +"  " +"Correct! the secret number is : " + 7 );
         won()

     } else if(guess<=6){
           alert(guess + "  is too low")
     } else if(guess<=8){
        alert(guess + "  is too high")
  }
     
     else {
        alert("Sorry, incorrect! "+ " " + guess +"  " + "is not the secret number");
     } 


/*
     // with the random number starts here
     var secret = math.floor(math.random()* 10) + 1;
 // var startbtn = document.getElementById("start");
 // startbtn.onclick = myguess;

  function myguess(){
      var answer = prompt("Please guess a number between 1 and 10");
      answer = Number(answer);
      checkAnswer(answer);
  }

  //check answer function
 /* function checkAnswer(guess){
      if(guess == secret){
          alert("correct! your gues" + guess + "is right.");
          document.getElementById("output").innerHTML = "Well done you got it";

      } else if (guess < secret){
        alert("incorrect! your gues is too low");
        myguess();
      }  else if (guess < secret){
        alert("incorrect! your gues is too high");
        myguess();
       } else{
            alert("invalid input");
            myguess();
        }
  }


     //second part
    /* while(guess !== secretnum ) {
        number = parseInt(prompt('Guess again a number from 1 to 10: '));
        if(guess === secretnum) {
            alert("You entered" + " " + guess +"  " +"Correct! the secret number is : " + 7 );
             break;
        }
    }*/

    // generating a random integer from 1 to 10
   /* const random = Math.floor(Math.random() * 10) + 1;
    var guesnum = prompt("Please guess the secret number (1-10)");
    var guess =  parseInt(guesnum);*/
    // take the input until the guess is correct
   /* while(guess !== random) { 
         if(guess === random) {
        alert('You guessed the correct number.');
     }
        guess = parseInt(prompt('Guess a number from 1 to 10: '));
    } */

    // check if the guess is correct
   


}

function won(){
    document.getElementById("status").innerHTML = "You won";
}