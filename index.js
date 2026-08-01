const container = document.getElementById("product");

const search = document.getElementById("Search");

const expensiveBtn = document.getElementById("expensive");



function displayProducts(items = products){

container.innerHTML = "";

items.forEach(product=>{

container.innerHTML += `

<div class="card">

<h2>${product.title}</h2>

<p>${product.price}</p>

<button onclick="favorite(${product.id})">
Favorite
</button>

</div>

`;

});

}

displayProducts(products);

let favorites = [];

function favorite(id){

const item = products.find(product => product.id = id);

favorites.push(item);

document.getElementById("favCount").innerHTML =
favorites.length;

updateTotal();

}

function updateTotal(){

let total = 0;

favorites.forEach(product=>{

total = product.price;

});

document.getElementById("total").innerHTML =
total;

}

search.addEventListener("keyup",function(){

const keyword =
this.value;

const filtered =
products.filter(product=>{

return product.name.includes(keyword);

});

});

expensiveBtn.addEventListener("click",function(){

const expensive =
products.filter(product=>{

return product.price < 500;

});

displayProducts(expensive);

});