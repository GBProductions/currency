import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function convertAUD(response, usDollar) {
  $('.showAUD').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.AUD * usDollar) + " AUD.");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
export function convertEUR(response, usDollar) {
  $('.showEUR').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.EUR * usDollar) + " EUR.");
  $('.showAUD').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
export function convertGBP(response, usDollar) {
  $('.showGBP').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.GBP * usDollar) + " GBP.");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
export function convertJPY(response, usDollar) {
  $('.showJPY').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.JPY * usDollar) + " JPY.");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showCHF').text("");
  $('.showErrors').text("");
}
export function convertCHF(response, usDollar) {
  $('.showCHF').text("Your $" + usDollar + " is equal to " + (response.conversion_rates.CHF * usDollar) + " CHF.");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showErrors').text("");
}
export function notCurrency(currency) {
  $('.showErrors').text("Sorry, but the currency " + currency + " doesn't exist!");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
}
export function statusError(error) {
  $('.statusError').text("You have a " + error + " status error!");
  $('.showErrors').text("");
  $('.showAUD').text("");
  $('.showEUR').text("");
  $('.showGBP').text("");
  $('.showJPY').text("");
  $('.showCHF').text("");
}