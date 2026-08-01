

const container = document.getElementById("products");

const search = document.getElementById("search");

const expensiveBtn = document.getElementById("expensiveBtn");



function displayProducts(items = products){

container.innerHTML = "";

items.forEach(product=>{

container.innerHTML += `

<div class="card">

<h2>${product.name}</h2>

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

const product = products.find(product => product.id === id);
if(!product){
return

}

favorites.push(product);

document.getElementById("favCount").innerHTML = favorites.length;

updateTotal();

}

// let total = 0;

function updateTotal(){

 let total = favorites.reduce((acc, product) => {
  return acc + product.price;
}, 0);


document.getElementById("total").innerHTML =
total;

}

search.addEventListener("keyup",function(){

const keyword = this.value.toLowerCase();

const filtered = products.filter(product =>{

return product.name.toLowerCase().includes(keyword);

});
displayProducts(filtered);

});


expensiveBtn.addEventListener("click",function(){

const expensive = products.filter(product=>{

return product.price > 500;

});

displayProducts(expensive);

});