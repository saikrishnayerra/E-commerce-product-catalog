const products = [

{
id:1,
name:"iPhone 15 Pro",
price:1299,
category:"Electronics",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},

{
id:2,
name:"Gaming Laptop",
price:1499,
category:"Electronics",
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
},

{
id:3,
name:"Wireless Headphones",
price:199,
category:"Electronics",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},

{
id:4,
name:"Smart Watch",
price:249,
category:"Electronics",
image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12"
},

{
id:5,
name:"Running Shoes",
price:120,
category:"Shoes",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},

{
id:6,
name:"Casual Sneakers",
price:99,
category:"Shoes",
image:"https://images.unsplash.com/photo-1549298916-b41d501d3772"
},

{
id:7,
name:"Men's Jacket",
price:89,
category:"Fashion",
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
},

{
id:8,
name:"Women's Handbag",
price:79,
category:"Fashion",
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3"
},

{
id:9,
name:"Sunglasses",
price:49,
category:"Accessories",
image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083"
},

{
id:10,
name:"Backpack",
price:69,
category:"Accessories",
image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
},

{
id:11,
name:"Mechanical Keyboard",
price:149,
category:"Electronics",
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
},

{
id:12,
name:"Bluetooth Speaker",
price:89,
category:"Electronics",
image:"https://images.unsplash.com/photo-1589003077984-894e133dabab"
}

];

const productContainer =
document.getElementById("productContainer");

function displayProducts(items){

productContainer.innerHTML = "";

items.forEach(product=>{

const card =
document.createElement("div");

card.classList.add("product-card");

card.innerHTML = `

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p class="price">
$${product.price}
</p>

<p>
${product.category}
</p>

<div class="product-actions">

<button
class="cart-btn"
onclick="addToCart(${product.id})">
Add To Cart
</button>

<button
class="wishlist-btn"
onclick="addToWishlist(${product.id})">
❤
</button>

</div>

</div>

`;

productContainer.appendChild(card);

});

}

displayProducts(products);