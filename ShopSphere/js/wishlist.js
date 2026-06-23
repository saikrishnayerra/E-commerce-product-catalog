let wishlist = JSON.parse(
localStorage.getItem("wishlist")
) || [];

function addToWishlist(id){

const product =
products.find(item =>
item.id === id
);

const exists =
wishlist.find(item =>
item.id === id
);

if(exists){

alert("Already in wishlist");
return;

}

wishlist.push(product);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

renderWishlist();

alert(
`${product.name} added to wishlist`
);

}

function renderWishlist(){

const wishlistContainer =
document.getElementById("wishlistItems");

if(!wishlistContainer) return;

if(wishlist.length === 0){

wishlistContainer.innerHTML = `
<p class="empty">
Wishlist is empty
</p>
`;

return;

}

wishlistContainer.innerHTML = "";

wishlist.forEach((item,index)=>{

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
onclick="removeFromWishlist(${index})">
Remove
</button>

</div>

`;

wishlistContainer.appendChild(div);

});

}

function removeFromWishlist(index){

wishlist.splice(index,1);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

renderWishlist();

}

renderWishlist();