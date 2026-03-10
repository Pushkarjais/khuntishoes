// ================= CART STORAGE =================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================= ADD TO CART =================

function addToCart(name, price){

let item = {

name:name,

price:price

};

cart.push(item);

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert(name + " added to cart");

}

// ================= CART COUNT =================

function updateCartCount(){

let count=document.getElementById("cart-count");

if(count){

count.innerText=cart.length;

}

}

updateCartCount();

// ================= SHOW CART ITEMS =================

if(document.getElementById("cart-items")){

let container=document.getElementById("cart-items");

container.innerHTML="";

let total=0;

cart.forEach(item=>{

let div=document.createElement("div");

div.innerHTML=item.name + " - ₹" + item.price;

container.appendChild(div);

total+=item.price;

});

document.getElementById("total-price").innerText="Total: ₹"+total;

}

// ================= CLEAR CART =================

function clearCart(){

localStorage.removeItem("cart");

location.reload();

}
// ================= BUY NOW =================

function buyNow(){

if(cart.length===0){

alert("Cart is empty");

return;

}

alert("Order placed successfully!");

localStorage.removeItem("cart");

location.href="index.html";

}

// ================= SEARCH =================

let searchInput=document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let filter=searchInput.value.toLowerCase();

let cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

card.style.display=text.includes(filter)?"block":"none";

});

});

}

// ================= DARK MODE =================

let toggle=document.getElementById("themeToggle");

if(toggle){

toggle.onclick=function(){

document.body.classList.toggle("light");

};

}
//--chatbot--
/* ================= CHATBOT TOGGLE ================= */

let chatIcon = document.getElementById("chat-icon");
let chatBox = document.getElementById("chatbot");

if(chatIcon){
chatIcon.onclick = function(){

if(chatBox.style.display === "block"){
chatBox.style.display = "none";
}
else{
chatBox.style.display = "block";
}

}
}


/* ================= CHATBOT MESSAGE ================= */

let chatInput = document.getElementById("chat-input");
let chatBody = document.getElementById("chat-body");

if(chatInput){

chatInput.addEventListener("keypress",function(e){

if(e.key === "Enter"){

let userText = chatInput.value;

chatBody.innerHTML += "<p><b>You:</b> "+userText+"</p>";

chatBody.innerHTML += "<p><b>Bot:</b> Please check our products section or contact us for more details.</p>";

chatInput.value="";

chatBody.scrollTop = chatBody.scrollHeight;

}

});

}
