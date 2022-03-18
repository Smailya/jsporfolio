var carname = document.getElementById("carname");
var year = document.getElementById("Years");
var seat = document.getElementById("Seats");
var type = document.getElementById("Types");
var price = document.getElementById("Prices");

var car = {
    thecarname:"Mercedes",
    theyear:2020,
    theseat:2,
    thetype:"sport",
    theprice:700000

}


carname.innerHTML = car.thecarname;
year.innerHTML = car.theyear;
seat.innerHTML = car.theseat;
type.innerHTML = car.thetype;
price.innerHTML = car.theprice;