// make function to fomat time to hh:mm A
// and format date to dddd Do MMMM

// make function to update times every second

let localTime = moment().format("hh:mm:ss A");
let localDate = moment().format("dddd Do MMMM YYYY");
let localTimeElement = document.querySelector("#local-time");
let localTimeZone = moment.tz.guess();
localTimeElement.innerHTML = localTime;
let localDateElement = document.querySelector("#local-date");
localDateElement.innerHTML = localDate;

let vancouverTime = moment().tz("America/Vancouver").format("hh:mm:ss A");
let vancouverDate = moment().tz("America/Vancouver").format("dddd Do MMMM YYYY");
let vancouverTimeElement = document.querySelector("#vancouver-time");
vancouverTimeElement.innerHTML = vancouverTime;
let vancouverDateElement = document.querySelector("#vancouver-date");
vancouverDateElement.innerHTML = vancouverDate;

let saoPauloTime = moment().tz("America/Sao_Paulo").format("hh:mm:ss A");
let saoPauloDate = moment().tz("America/Sao_Paulo").format("dddd Do MMMM YYYY");
let saoPauloTimeElement = document.querySelector("#sao-paulo-time");
saoPauloTimeElement.innerHTML = saoPauloTime;
let saoPauloDateElement = document.querySelector("#sao-paulo-date");
saoPauloDateElement.innerHTML = saoPauloDate;

let dublinTime = moment().tz("Europe/Dublin").format("dddd HH:mm");
let dublinElement = document.querySelector("#dublin");
dublinElement.innerHTML = `Dublin: ${dublinTime}`;

let karachiTime = moment().tz("Asia/Karachi").format("dddd HH:mm");
let karachiElement = document.querySelector("#karachi");
karachiElement.innerHTML = `Karachi: ${karachiTime}`;

let tokyoTime = moment().tz("Asia/Tokyo").format("dddd HH:mm");
let tokyoElement = document.querySelector("#tokyo");
tokyoElement.innerHTML = `Tokyo: ${tokyoTime}`;

let aucklandTime = moment().tz("Pacific/Auckland").format("dddd HH:mm");
let aucklandElement = document.querySelector("#auckland");
aucklandElement.innerHTML = `Auckland: ${aucklandTime}`;