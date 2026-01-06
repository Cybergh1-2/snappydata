function payWithPaystack(){

let amount = document.getElementById("amount").value;

let handler = PaystackPop.setup({
key: 'pk_test_2d0bf42287c58cbad1284d5a6955eb7a84ea207b',

email: "user@email.com",

amount: amount * 100,

currency: "GHS",

callback: function(response){

alert("Payment successful: " + response.reference);

// send reference to backend
},

onClose: function(){
alert("Transaction cancelled");
}

});

handler.openIframe();

}
