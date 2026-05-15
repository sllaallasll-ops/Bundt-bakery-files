// ADD TO CART

const addCartButton = document.querySelector(".add-cart-btn");

if (addCartButton) {

    addCartButton.addEventListener("click", function () {

        const product = {
            name: "Mango Cheesecake",
            price: 250,
            image: "images/mango.png",
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProduct = cart.find(item => item.name === product.name);

        if (existingProduct) {
            existingProduct.quantity += 1;
        }

        else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Mango Cheesecake added to cart!");

    });

}



// DISPLAY CART ITEMS

const cartItemsContainer = document.getElementById("cart-items");

const cartTotal = document.getElementById("cart-total");


if (cartItemsContainer) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;


    if (cart.length === 0) {

        cartItemsContainer.innerHTML =
            "<p class='empty-cart'>Your cart is empty.</p>";

    }

    else {

        cart.forEach(function (item) {

            total += item.price * item.quantity;

            cartItemsContainer.innerHTML += `

                <div class="cart-item">

                    <img src="${item.image}" alt="${item.name}">

                    <div>
                        <h3>${item.name}</h3>

                        <p>Price: ${item.price} SAR</p>

                        <p>Quantity: ${item.quantity}</p>
                    </div>

                </div>

            `;
        });

    }

    cartTotal.textContent = "Total: " + total + " SAR";

}



// CLEAR CART

function clearCart() {

    localStorage.removeItem("cart");

    alert("Cart cleared successfully!");

    location.reload();

}



// CHECKOUT

function checkout() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty.");

    }

    else {

        alert("Thank you! Your order has been placed.");

        localStorage.removeItem("cart");

        location.reload();

    }

}