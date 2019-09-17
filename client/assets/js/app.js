function generateCode() {
  /**Replace this function block with logic for retrieving the generated code from the server */
  let generateCode = document.querySelector('.generated-code');
  generateCode.innerHTML = Math.round(Math.random() * 1000000);
}

function validateCode() {
  /**Replace this function block with logic for validating the token. You should replace the "validated-code-status" with the result of your validation */
  let validatedCodeStatus = document.querySelector(".validated-code-status");
  let status = ["The code you supplied is true", "The code you supplied is not correct"];
  validatedCodeStatus.innerHTML = status[Math.round(Math.random())];
}