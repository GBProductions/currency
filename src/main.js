import $ from 'jquery'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {

  $('#AUD').click(function() {
    let request = new XMLHttpRequest();
    const url = 'https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD'
  }




}




$('#get-date').click(function() {
  let request = new XMLHttpRequest();
  const url = `https://api.nasa.gov/insight_weather/?api_key=${process.env.API_KEY}&feedtype=json&ver=1.0`
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      displayData(response);
    }
  };  
  request.open("GET", url, true);
  request.send();
  $('#data').toggle();
})  