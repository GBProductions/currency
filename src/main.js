import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './js/service.js';

function convertAUD(response, usDollar) {
  $('.showAUD').text(("Your $" + usDollar + " is equal to " + (response.conversion_rates.AUD * usDollar) + " AUD."));
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
function convertEUR(response, usDollar) {
  $('.showEUR').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.EUR * usDollar) + " EUR.");
  $('.showAUD').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
function convertGBP(response, usDollar) {
  $('.showGBP').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.GBP * usDollar) + " GBP.");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
function convertJPY(response, usDollar) {
  $('.showJPY').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.JPY * usDollar) + " JPY.");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
function convertCHF(response, usDollar) {
  $('.showCHF').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.CHF * usDollar) + " CHF.");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showErrors').text("");
}
function notCurrency(currency) {
  $('.showErrors').text(("Sorry, but the currency " + currency) + " doesn't exist!");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
}
// function statusError(error) {
//   $('.statusError').text("Sorry but you received a " + error + " error!");
//   $('.showErrors').text("");
//   $('.showAUD').text("");
//   $('.showEUR').text("");
//   $('.showGBP').text("");
//   $('.showJPY').text("");
//   $('.showCHF').text("");
// }


//-------------------------------------------------------------------------------------------------
$(document).ready(function() {
  $('#submitDollar').click(function() {
    const usDollar = parseInt($('#dollarInput').val());
    $('#dollarInput').val("");

    const currency = $('#currencyInput').val();
    $('#currencyInput').val("");


    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/61905536dd0b5c15fe86d220/latest/USD`;

    request.onreadystatechange = function() {
      if (currency === "AUD" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        convertAUD(response, usDollar);
      } else if (currency === "EUR" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        convertEUR(response, usDollar);
      } else if (currency === "GBP" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        convertGBP(response, usDollar);
      } else if (currency === "JPY" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        convertJPY(response, usDollar);
      } else if (currency === "CHF" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        convertCHF(response, usDollar);
      } else if ((currency != "EUR" || "GBP" || "JPY" || "CHF" ) && this.readyState === 4 && this.status === 200)  {
        notCurrency(currency);
      } 
    };
    request.open("GET", url, true);
    request.send();
  });
});
