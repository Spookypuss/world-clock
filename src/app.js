// make function to fomat time to hh:mm A
// and format date to dddd Do MMMM

// make function to update times every second
/*function displayLocal() {
let localTime = moment();
let localTimeElement = document.querySelector("#local-time");
localTimeElement.innerHTML = localTime.format("h:mm:ss [<small>]A[</small>]");
let localDateElement = document.querySelector("#local-date");
localDateElement.innerHTML = localTime.format("dddd Do MMMM YYYY");
}

displayLocal();
setInterval(displayLocal, 1000); //updates function every second*/

function displayWorld() {

let saoPauloTime = moment().tz("America/Sao_Paulo");
let saoPauloTimeElement = document.querySelector("#sao-paulo-time");
saoPauloTimeElement.innerHTML = saoPauloTime.format("h:mm:ss [<small>]A[</small>]");
let saoPauloDateElement = document.querySelector("#sao-paulo-date");
saoPauloDateElement.innerHTML = saoPauloTime.format("dddd Do MMMM YYYY"); //something is happening here

/*let dublinTime = moment().tz("Europe/Dublin");
let dublinTimeElement = document.querySelector("#dublin-time");
dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss [<small>]A[</small>]");
let dublinDateElement = document.querySelector("#dublin-date");
dublinDateElement.innerHTML = dublinTime.format("dddd Do MMMM YYYY");*/

let karachiTime = moment().tz("Asia/Karachi");
let karachiTimeElement = document.querySelector("#karachi-time");
karachiTimeElement.innerHTML = karachiTime.format("h:mm:ss [<small>]A[</small>]");
let karachiDateElement = document.querySelector("#karachi-date");
karachiDateElement.innerHTML = karachiTime.format("dddd Do MMMM YYYY");

/*let tokyoTime = moment().tz("Asia/Tokyo");
let tokyoTimeElement = document.querySelector("#tokyo-time");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
let tokyoDateElement = document.querySelector("#tokyo-date");
tokyoDateElement.innerHTML = tokyoTime.format("dddd Do MMMM YYYY");*/

let aucklandTime = moment().tz("Pacific/Auckland");
let aucklandTimeElement = document.querySelector("#auckland-time");
aucklandTimeElement.innerHTML = aucklandTime.format("h:mm:ss [<small>]A[</small>]");
let aucklandDateElement = document.querySelector("#auckland-date");
aucklandDateElement.innerHTML = aucklandTime.format("dddd Do MMMM YYYY");

}

displayWorld();
setInterval(displayWorld, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
}

    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1]; // replaces _ with space, then splits into array (by /) and uses second array item

    console.log(cityTime.format("h:mm:ss A"));

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
                <div class="row">
                    <div class="col"> <!-- location and date first -->
                        <div class="row location">
                        ${cityName}
                        </div>
                        <div class="row date">${cityTime.format("dddd Do MMMM YYYY")}
                    </div>
                </div>
                <div class="col"> <!-- time second -->
                    <div class="clock">${cityTime.format("h:mm:ss [<small>]A[</small>]")}
                    </div>
                </div>
                <hr />`
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);