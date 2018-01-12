'use strict';

const contents = document.getElementsByTagName('fieldset');

for(let content of contents) {

  for (let input of content.getElementsByTagName('input')) {
    input.addEventListener('change', checkEmpty);
  }

}

contents[1].getElementsByTagName('textarea')[0].addEventListener('input', checkEmpty);

contents[0].querySelector('[name="zip"]').addEventListener('keypress', event => {

  if (/\D/i.test(event.key)) {
    event.preventDefault();
  }

});

document.querySelector('form .button-contact').addEventListener('click', outForm);

document.querySelector('main .button-contact').addEventListener('click', event => {
  document.getElementsByClassName('contentform')[0].classList.remove('hidden');
  document.getElementsByTagName('main')[0].classList.add('hidden');
});

function checkEmpty () {

  for(let content of contents) {

    for (let input of content.getElementsByTagName('input')) {

      if (input.value === '') {
        checkEmptyDone();
        return;
      }

    }
  }

  if (contents[1].getElementsByTagName('textarea')[0].value === '') {
    checkEmptyDone();
    return;
  }

  checkEmptyDone(true)
}

function checkEmptyDone(done) {

  if (done) {
    document.querySelector('form .button-contact').removeAttribute('disabled');
  } else {
    document.querySelector('form .button-contact').setAttribute('disabled', '');
  }

}

function outForm(event) {
  event.preventDefault();
  document.getElementsByClassName('contentform')[0].classList.add('hidden');
  document.getElementsByTagName('main')[0].classList.remove('hidden');

  for(let content of contents) {

    for (let input of content.getElementsByTagName('input')) {
      try {  //в output нет email, поэтому для его пропуска try
        document.getElementById(input.name).value = input.value;
      } catch(e) {}
    }

  }
  document.getElementById('message').value = contents[1].getElementsByTagName('textarea')[0].value
}