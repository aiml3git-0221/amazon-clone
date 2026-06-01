const productsContainer =
document.getElementById("productsContainer");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function updateCartCount() {

    const cartCount =
    document.getElementById("cartCount");

    if(cartCount){
        cartCount.textContent = cart.length;
    }
}

function displayProducts(productArray){

    productsContainer.innerHTML = "";

    productArray.forEach(product => {

        productsContainer.innerHTML += `

        <div class="product-card">

            <a href="product.html?id=${product.id}">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <h3>${product.name}</h3>

                <p class="rating">
                    ${product.rating}
                    (${product.reviews})
                </p>

                <p>
                    <strong>${product.brand}</strong>
                </p>

                <p class="price">
                    ₹${product.price}

                    <span class="old-price">
                        ₹${product.oldPrice}
                    </span>
                </p>

                <p style="color:green;">
                    ${product.discount}
                </p>

            </a>

            <button
                onclick="addToCart(${product.id})"
            >
                Add To Cart
            </button>

        </div>

        `;
    });

}

displayProducts(products);

function addToCart(id){

    const product =
    products.find(item => item.id === id);

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert("Product Added To Cart");
}

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener(
    "keyup",
    function(){

        const value =
        searchInput.value.toLowerCase();

        const filteredProducts =
        products.filter(product =>

            product.name
            .toLowerCase()
            .includes(value)

            ||

            product.category
            .toLowerCase()
            .includes(value)

            ||

            product.brand
            .toLowerCase()
            .includes(value)

        );

        displayProducts(filteredProducts);

    }
);



const footerTop =
document.querySelector(".footer-top");

footerTop.addEventListener(
    "click",
    function(){

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }
);