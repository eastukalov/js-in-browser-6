'use strict';

const listBox = document.querySelector('fieldset.list-block');
const inputs = listBox.querySelectorAll('input');
const output = document.getElementsByTagName('output')[0];
let count = 0;
let maxCount = 0;

for(let input of inputs) {

  if (input.checked) {
    count++;
  }

  maxCount++;

  output.value = count + ' из '+ maxCount;

  input.addEventListener('change', (elem) => {
    if (elem.currentTarget.checked) {
      count++;
    } else {
      count--;
    }

    if (count === maxCount) {
      listBox.classList.add('complete');
    } else {
      listBox.classList.remove('complete');
    }

    output.value = count + ' из '+ maxCount;
  })
}