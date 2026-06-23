/* SEARCH */

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const value =
    searchInput.value.toLowerCase();

    const filtered =
    products.filter(product =>
        product.name
        .toLowerCase()
        .includes(value)
    );

    displayProducts(filtered);

});

/* CATEGORY FILTER */

const categoryButtons =
document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
        button.dataset.category;

        if(category === "All"){

            displayProducts(products);
            return;

        }

        const filtered =
        products.filter(product =>
            product.category === category
        );

        displayProducts(filtered);

    });

});

/* DARK MODE */

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.textContent = "☀️";

    }else{

        themeBtn.textContent = "🌙";

    }

});

/* SHOP NOW BUTTON */

const shopBtn =
document.querySelector(".shop-btn");

shopBtn.addEventListener("click", () => {

    document
    .getElementById("products")
    .scrollIntoView({
        behavior:"smooth"
    });

});