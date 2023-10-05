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
saoPauloDateElement.innerHTML = saoPauloDate; //something is happening here

let dublinTime = moment().tz("Europe/Dublin").format("hh:mm:ss A");
let dublinDate = moment().tz("Europe/Dublin").format("dddd Do MMMM YYYY");
let dublinTimeElement = document.querySelector("#dublin");
dublinTimeElement.innerHTML = "ANYONE?!";
let dublinDateElement = document.querySelector("#dublin-date");
dublinDateElement.innerHTML = "Hello!!";

let karachiTime = moment().tz("Asia/Karachi").format("hh:mm:ss A");
let karachiDate = moment().tz("Asia/Karachi").format("dddd Do MMMM YYYY");
let karachiTimeElement = document.querySelector("#karachi");
karachiTimeElement.innerHTML = karachiTime;
let karachiDateElement = document.querySelector("#karachi-date");
karachiDateElement.innerHTML = karachiDate;

let tokyoTime = moment().tz("Asia/Tokyo").format("hh:mm:ss A");
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