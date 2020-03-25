var today = todayDate();
var presentDate = today.getDate() + "." + (today.getMonth() + 1) + today.getFullYear();
var cities = [JSON.parse(localStorage.getItem("cities"))];
var APIkey = "b9c9094662e2b96ef8e56de156eb952e";
var city = $("#search").val();

$("button").on("click", function(e){
    e.preventDefault();
    generateForcast();
})
















//a search button that listens to a botton submit and also a working eventlistener for the search button
//create an array of items for cities
//create variables for weather api to get results
//create a function that handles returning api information of temperture, humidity, windspeed, uv index
//create a function that handles going through the array of cities to return information
//append it to body
//local storage to save result of searches

