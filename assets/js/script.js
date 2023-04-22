'use strict'

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch('sender.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    console.log(response);
    window.open('./thanks/index.html');
  })
  .catch(error => {
    console.error(error);
    // действия при ошибке отправки формы
  });
});
