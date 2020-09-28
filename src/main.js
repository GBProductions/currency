import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// function Money(usDollar) {
//   this.usDollar = usDollar;
// }


function convertAUD(response) {
  $('.showAUD').text(((response.conversion_rates.AUD) + " AUD"));
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
function convertEUR(response) {
  $('.showEUR').text(response.conversion_rates.EUR + " EUR");
  $('.showAUD').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
function convertGBP(response) {
  $('.showGBP').text(response.conversion_rates.GBP + " GBP");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
function convertJPY(response) {
  $('.showJPY').text(response.conversion_rates.JPY + " JPY");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
function convertCHF(response) {
  $('.showCHF').text(response.conversion_rates.CHF + " CHF");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showErrors').text("");
}
function notCurrency(currency) {
  $('.showErrors').text("Sorry, but the currency " + currency + " doesn't exist!");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
}


//-------------------------------------------------------------------------------------------------
$(document).ready(function() {
  $('#submitDollar').click(function() {
    const usDollar = parseInt($('#dollarInput').val());
    $('#dollarInput').val("");
    //let userInput  = new Money(usDollar);

    const currency = $('#currencyInput').val();
    $('#currencyInput').val("");


    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/61905536dd0b5c15fe86d220/latest/USD`;

    request.onreadystatechange = function() {
      if (currency === "AUD" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        (convertAUD(response));
      } else if (currency === "EUR" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        (convertEUR(response));
      } else if (currency === "GBP" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        (convertGBP(response));
      } else if (currency === "JPY" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        (convertJPY(response));
      } else if (currency === "CHF" && this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        (convertCHF(response));
      } else if ((currency != "EUR" || "GBP" || "JPY" || "CHF" ) && this.readyState === 4 && this.status === 200)  {
        notCurrency(currency);
      }
    };
    request.open("GET", url, true);
    request.send();
  });
});
