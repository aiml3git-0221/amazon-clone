let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const cartItemsContainer =
document.getElementById("cartItems");

const totalItems =
document.getElementById("totalItems");

const totalPrice =
document.getElementById("totalPrice");

const cartCount =
document.getElementById("cartCount");

function updateCartCount(){

    if(cartCount){
        cartCount.textContent =
        cart.length;
    }

}

function displayCart(){

    if(cart.length === 0){

        cartItemsContainer.innerHTML = `

        <div class="empty-cart">

            <h2>
                Your Amazon Cart is Empty
            </h2>

            <p>
                Add some products to continue shopping.
            </p>

            <br>

            <a href="index.html">
                Continue Shopping
            </a>

        </div>

        `;

        totalItems.textContent = "0";
        totalPrice.textContent = "₹0";

        return;
    }

    cartItemsContainer.innerHTML = "";

    let total = 0;

    cart.forEach((product,index)=>{

        total += product.price;

        cartItemsContainer.innerHTML += `

        <div class="cart-item">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="cart-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    Brand:
                    ${product.brand}
                </p>

                <p class="rating">
                    ${product.rating}
                    (${product.reviews})
                </p>

                <p class="price">
                    ₹${product.price}
                </p>

                <button
                    class="remove-btn"
                    onclick="removeItem(${index})"
                >
                    Remove
                </button>

            </div>

        </div>

        `;

    });

    totalItems.textContent =
    cart.length;

    totalPrice.textContent =
    `₹${total}`;

}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    displayCart();

}

updateCartCount();
displayCart();



const checkoutBtn =
document.getElementById("checkoutBtn");

if(checkoutBtn){

    checkoutBtn.addEventListener(
        "click",
        function(){

            if(cart.length === 0){

                alert(
                    "Your cart is empty."
                );

                return;
            }

            alert(
                "Order placed successfully!"
            );

            localStorage.removeItem(
                "cart"
            );

            cart = [];

            updateCartCount();

            displayCart();

        }
    );

}



const footerTop =
document.querySelector(".footer-top");

if(footerTop){

    footerTop.addEventListener(
        "click",
        function(){

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        }
    );

}