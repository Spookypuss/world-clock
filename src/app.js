// make function to fomat time to hh:mm A
// and format date to dddd Do MMMM

// make function to update times every second
function displayLocal() {
let localTime = moment();
let localTimeElement = document.querySelector("#local-time");
localTimeElement.innerHTML = localTime.format("h:mm:ss [<small>]A[</small>]");
let localDateElement = document.querySelector("#local-date");
localDateElement.innerHTML = localTime.format("dddd Do MMMM YYYY");
}

displayLocal();
setInterval(displayLocal, 1000); //updates function every second

function displayWorld() {
let vancouverTime = moment().tz("America/Vancouver");
let vancouverTimeElement = document.querySelector("#vancouver-time");
vancouverTimeElement.innerHTML = vancouverTime.format("h:mm:ss [<small>]A[</small>]");
let vancouverDateElement = document.querySelector("#vancouver-date");
vancouverDateElement.innerHTML = vancouverTime.format("dddd Do MMMM YYYY");

let saoPauloTime = moment().tz("America/Sao_Paulo");
let saoPauloTimeElement = document.querySelector("#sao-paulo-time");
saoPauloTimeElement.innerHTML = saoPauloTime.format("h:mm:ss [<small>]A[</small>]");
let saoPauloDateElement = document.querySelector("#sao-paulo-date");
saoPauloDateElement.innerHTML = saoPauloTime.format("dddd Do MMMM YYYY"); //something is happening here

let dublinTime = moment().tz("Europe/Dublin");
let dublinTimeElement = document.querySelector("#dublin");
dublinTimeElement.innerHTML = "hello?";
let dublinDateElement = document.querySelector("#dublin-date");
dublinDateElement.innerHTML = dublinTime.format("dddd Do MMMM YYYY");

}

displayWorld();
setInterval(displayWorld, 1000);



let karachiTime = moment().tz("Asia/Karachi").format("hh:mm:ss A");
let karachiDate = moment().tz("Asia/Karachi").format("dddd Do MMMM YYYY");
let karachiTimeElement = document.querySelector("#karachi");
karachiTimeElement.innerHTML = karachiTime;
let karachiDateElement = document.querySelector("#karachi-date");
karachiDateElement.innerHTML = karachiDate;

let tokyoTime = moment().tz("Asia/Tokyo").format("h:mm:ss A");
let tokyoDate = moment().tz("Asia/Tokyo").format("dddd Do MMMM YYYY");
let tokyoTimeElement = document.querySelector("#tokyo");
tokyoTimeElement.innerHTML = tokyoTime;
let tokyoDateElement = document.querySelector("#tokyo-date");
tokyoDateElement.innerHTML = tokyoDate;

let aucklandTime = moment().tz("Pacific/Auckland").format("hh:mm:ss A");
let aucklandDate = moment().tz("Pacific/Auckland").format("dddd Do MMMM YYYY");
let aucklandTimeElement = document.querySelector("#auckland");
aucklandTimeElement.innerHTML = aucklandTime;
let aucklandDateElement = document.querySelector("#auckland-date");
aucklandDateElement.innerHTML = aucklandDate;