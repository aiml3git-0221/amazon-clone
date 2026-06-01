const productDetails =
document.getElementById("productDetails");

const params =
new URLSearchParams(
window.location.search
);

const productId =
parseInt(params.get("id"));

const product =
products.find(
item => item.id === productId
);

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

updateCartCount();

function updateCartCount(){

const count =
document.getElementById("cartCount");

if(count){
count.textContent = cart.length;
}

}

if(product){

productDetails.innerHTML = `

<div class="product-container">

    <div class="product-image">

        <img
            src="${product.image}"
            alt="${product.name}"
        >

    </div>

    <div class="product-info">

        <h1>
            ${product.name}
        </h1>

        <div class="rating">
            ${product.rating}
        </div>

        <div class="reviews">
            ${product.reviews} ratings
        </div>

        <hr>

        <div class="product-price">

            ₹${product.price}

            <span class="old-price">
                ₹${product.oldPrice}
            </span>

            <span class="discount">
                ${product.discount}
            </span>

        </div>

        <p>
            Brand:
            <strong>
                ${product.brand}
            </strong>
        </p>

        <p style="margin-top:15px;">
            Category:
            <strong>
                ${product.category}
            </strong>
        </p>

        <div class="product-description">

            <h3>
                About this item
            </h3>

            <ul>

                <li>
                    ${product.description}
                </li>

                <li>
                    Premium quality product
                    with excellent durability.
                </li>

                <li>
                    Fast delivery and
                    secure packaging.
                </li>

                <li>
                    Trusted by thousands
                    of customers.
                </li>

                <li>
                    Easy return and
                    replacement policy.
                </li>

            </ul>

        </div>

    </div>

    <div class="buy-box">

        <div class="price">
            ₹${product.price}
        </div>

        <p class="delivery">
            FREE Delivery
        </p>

        <p class="stock">
            In Stock
        </p>

        <button
            class="add-cart"
            onclick="addToCart(${product.id})"
        >
            Add To Cart
        </button>

        <button
            class="buy-now"
            onclick="buyNow(${product.id})"
        >
            Buy Now
        </button>

    </div>

</div>

`;

}

function addToCart(id){

const selectedProduct =
products.find(
item => item.id === id
);

cart.push(selectedProduct);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert(
`${selectedProduct.name} added to cart`
);

}

function buyNow(id){

addToCart(id);

window.location.href =
"cart.html";

}

document
.querySelector(".footer-top")
.addEventListener(
"click",
function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}
);