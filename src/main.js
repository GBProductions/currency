import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function convertAUD(response) {
  $('.showAUD').text(response.conversion_rates.AUD);
}

$(document).ready(function() {
  $('#submitDollar').click(function() {

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/61905536dd0b5c15fe86d220/latest/USD`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        convertAUD(response);
      }
    };
    request.open("GET", url, true);
    request.send();


  });
});