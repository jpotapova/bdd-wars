function validateRequired(valueToValidate) {
  var isValid = false;
  if ( (valueToValidate > "") && (valueToValidate !== " ") ) {
    isValid = true;
  }
  return isValid;
}

function validateMinLength(valueToValidate, minLengthRequired) {
  var isValid = false;
  if (valueToValidate.length >= minLengthRequired) {
    isValid = true;
  }
  return isValid;
}

function validateNumeric(valueToValidate) {
  var isValid = !isNaN(valueToValidate);
  return isValid;
}

function validateSpecial(valueToValidate) {
  var isValid = false;
  if (valueToValidate.indexOf("#") > -1 ) {
    isValid = true;
  }
  if (valueToValidate.indexOf("$") > -1 ) {
    isValid = true;
  }
  if (valueToValidate.indexOf("!") > -1 ) {
    isValid = true;
  }
  return isValid;
}

function validate(valueToValidate, rule){
  var isValid = false;
  if (rule == "required") {
    isValid = validateRequired(valueToValidate);
  } else if (rule == "numeric")
  return isValid;
}


$(document).ready(function(){

});
