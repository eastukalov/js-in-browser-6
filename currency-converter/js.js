'use strict';

const request = new XMLHttpRequest();
const from = document.getElementById('from');
const to = document.getElementById('to');
const loader = document.getElementById('loader');
const content = document.getElementById('content');
const result = document.getElementById('result');
const source = document.getElementById('source');


request.open('GET', 'https://neto-api.herokuapp.com/currency', true);
request.addEventListener('load', getRequest);

function calculation () {
  result.value = Math.round(Number(from.value) / Number(to.value) * source.value * 100) / 100;
}

source.addEventListener('change', calculation);
from.addEventListener('change', calculation);
to.addEventListener('change', calculation);

function getRequest() {
  if (this.status === 200) {

    for(let el of JSON.parse(this.responseText)) {
      let option = document.createElement('option');
      option.value=el.value;
      option.innerHTML = el.code;
      from.appendChild(option);
      option = document.createElement('option');
      option.value=el.value;
      option.innerHTML = el.code;
      to.appendChild(option);
    }

    calculation();
    loader.classList.add('hidden');
    content.classList.remove('hidden');
  }
}

loader.classList.remove('hidden');
request.send();