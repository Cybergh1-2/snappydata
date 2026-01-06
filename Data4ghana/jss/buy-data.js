let selectedNetwork = "MTN";
let cart = [];

function selectNetwork(el){

document.querySelectorAll(".network").forEach(n=>{
n.classList.remove("active");
});

el.classList.add("active");

selectedNetwork = el.innerText;

}

function addToCart(){

let phone = document.getElementById("phone").value;
let bundle = document.getElementById("bundle").value;

if(phone === "" || bundle === ""){
alert("Fill all fields");
return;
}

let item = selectedNetwork + " - " + bundle + "GB - " + phone;

cart.push(item);

displayCart();

}

function displayCart(){

let cartDiv = document.getElementById("cartItems");

cartDiv.innerHTML = "";

cart.forEach(item=>{
let p = document.createElement("p");
p.innerText = item;
cartDiv.appendChild(p);
});

}
