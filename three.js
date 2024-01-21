// script.js
function validateForm() {
    var cardNumber = document.getElementById("card").value;
    var expiryDate = document.getElementById("expiry").value;
    var cvv = document.getElementById("cvv").value;
  
    // Simple validation: Check if card number, expiry date, and cvv are numeric
    if (!isNumeric(cardNumber) || !isNumeric(expiryDate) || !isNumeric(cvv)) {
      alert("Please enter valid numeric values for card details.");
      return;
    }
  
    // If validation passes, submit the form
    document.getElementById("paymentForm").submit();
  }
  
  function isNumeric(value) {
    return /^\d+$/.test(value);
  }
  