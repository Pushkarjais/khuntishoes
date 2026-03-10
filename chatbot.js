// ================= CART SYSTEM =================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

cart.push({name,price});

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert(name+" added to cart");

}

function updateCartCount(){

let count=document.getElementById("cart-count");

if(count){

count.innerText=cart.length;

}

}

updateCartCount();

// ================= CART PAGE =================

if(document.getElementById("cart-items")){

let container=document.getElementById("cart-items");

let total=0;

cart.forEach(item=>{

let div=document.createElement("div");

div.innerHTML=item.name+" - ₹"+item.price;

container.appendChild(div);

total+=item.price;

});

document.getElementById("total-price").innerText="Total: ₹"+total;

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

}

}

// ================= CHATBOT TOGGLE =================

let chatIcon=document.getElementById("chat-icon");

let chatBox=document.getElementById("chatbot");

if(chatIcon){

chatIcon.onclick=function(){

if(chatBox.style.display=="block"){

chatBox.style.display="none";

}else{

chatBox.style.display="block";

}

};

}

// ================= CHATBOT RESPONSE =================

let input=document.getElementById("chat-input");

let body=document.getElementById("chat-body");

if(input){

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

let text=input.value;

body.innerHTML+="<p><b>You:</b> "+text+"</p>";

body.innerHTML+="<p><b>Bot:</b> Please check our products section.</p>";

input.value="";

}

});

}
