function payWithPaystack(){

let amount = document.getElementById("amount").value;

let handler = PaystackPop.setup({
key: 'pk_test_xxxxxxxxxxxxx', // your public key

email: "user@email.com",

amount: amount * 100, // Paystack uses kobo/pesewas

currency: "GHS",

callback: function(response){

alert("Payment successful: " + response.reference);

// send reference to server
verifyPayment(response.reference);

},

onClose: function(){
alert('Transaction cancelled');
}

});

handler.openIframe();

}
