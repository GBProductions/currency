import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { convertAUD, convertEUR, convertGBP, convertJPY, convertCHF, notCurrency, statusError } from './js/service.js';
import './css/styles.css';


$(document).ready(function() {
  $('#submitDollar').click(function() {
    const usDollar = parseInt($('#dollarInput').val());
    $('#dollarInput').val("");

    const currency = $('#currencyInput').val();
    $('#currencyInput').val("");


    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

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
      if (this.readyState !== 4 && this.status !== 200)  {
        let error = this.status;
        statusError(error);
      }
    };
    request.open("GET", url, true);
    request.send();
  });
});
