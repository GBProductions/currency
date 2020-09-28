import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


function convertAUD(response) {
  $('.showAUD').text((response.conversion_rates.AUD));
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
function convertEUR(response) {
  $('.showEUR').text(response.conversion_rates.EUR);
  $('.showAUD').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
function convertGBP(response) {
  $('.showGBP').text(response.conversion_rates.GBP);
}
function convertJPY(response) {
  $('.showJPY').text(response.conversion_rates.JPY);
}
function convertCHF(response) {
  $('.showCHF').text(response.conversion_rates.CHF);
}
function convertShowErrors(response) {
  $('.showErrors').text("Sorry, but " + currency + " doesn't exist!");
}


$(document).ready(function() {
  $('#submitDollar').click(function() {
    const usDollar = $('#dollarInput').val();
    $('#dollarInput').val("");

    const currency = $('#currencyInput').val();
    $('#currencyInput').val("");

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/61905536dd0b5c15fe86d220/latest/USD`;

    request.onreadystatechange = function() {
      if (currency === "AUD" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        convertAUD(response);
      } else if (currency === "EUR" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        convertEUR(response);
      } else if (currency === "GBP" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        convertGBP(response);
      } else if (currency === "JPY" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        convertJPY(response);
      } else if (currency === "CHF" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        convertCHF(response);
      } else if ((currency != "EUR" || "GBP" || "JPY" || "CHF" ) && this.readyState === 4 && this.status === 200) {
        convertShowErrors(response);
      }



    };
    request.open("GET", url, true);
    request.send();
  });
});