var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");


//creating a time object



// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();
setInterval(disptime,1000)
function disptime(){
    document.getElementById("livetime").innerHTML =(new Date().toLocaleTimeString());

}
function displayDate() {
   todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    // find out the day of the week.
    var dayOfWeek = d.getDay();

    /* set a variable, called youShould, with a different
       string based on what day of the week it is. */
    var youShould;

    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy. You've earned it.";
            break;
        case 1:
            youShould = "Gotta do what ya gotta do!";
            break;
        case 2:
            youShould = "Take time to smell the roses!";
            break;
        case 3:
            youShould = "Don't forget to eat breakfast!";
            break;
        case 4:
            youShould = "Learn something new today!";
            break;
        case 5:
            youShould = "Make a list of things you like to do.";
            break;
        case 6:
            youShould = "Do one thing from your list of things you like to do.";
            break;
        default:
            youShould = "Hmm. Something has gone wrong.";
            break;
    }

    // output the value of youShould into the thingToDo div    
    document.getElementById("thingToDo").innerHTML = youShould;

   
   
   /* function displaytime(){   
        var tm = new Date();
  var h = tm.getHours();
  var m = tm.getMinutes();
  var s = tm.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('livetime').innerHTML =  h + ":" + m + ":" + s;
setTimeout(displaytime, 1000);
    }

    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }*/
    
}

