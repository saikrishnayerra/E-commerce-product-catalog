let cart = JSON.parse(
localStorage.getItem("cart")
) || [];

function addToCart(id){

const product =
products.find(item =>
item.id === id
);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

alert(
`${product.name} added to cart`
);

}

function renderCart(){

const cartContainer =
document.getElementById("cartItems");

if(!cartContainer) return;

if(cart.length === 0){

cartContainer.innerHTML =
`
<p class="empty">
Cart is empty
</p>
`;

return;
}

cartContainer.innerHTML = "";

cart.forEach((item,index)=>{

const div =
document.createElement("div");

div.classList.add("product-card");

div.innerHTML = `

<div class="product-info">

<h3>${item.name}</h3>

<p class="price">
$${item.price}
</p>

<button
class="wishlist-btn"
onclick="removeFromCart(${index})">
Remove
</button>

</div>

`;

cartContainer.appendChild(div);

});

}

function removeFromCart(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

}

renderCart();