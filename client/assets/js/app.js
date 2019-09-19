/* eslint-disable require-jsdoc */
function generateCode() {
  const generate = document.querySelector('.generated-code');
  fetch('https://w-s-totp.herokuapp.com/api/totp')
    .then((response) => response.json())
    .then((body) => {
      generate.innerHTML = body.data.token;
    });
}

function validateCode() {
  const validatedCodeStatus = document.querySelector('.validated-code-status');
  const input = document.querySelector('.token-input');

  fetch('https://w-s-totp.herokuapp.com/api/totp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: input.value })
  })
    .then((response) => response.json())
    .then((body) => {
      if (body.data) {
        validatedCodeStatus.innerHTML = body.data.status;
      } else {
        validatedCodeStatus.innerHTML = body.message;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
