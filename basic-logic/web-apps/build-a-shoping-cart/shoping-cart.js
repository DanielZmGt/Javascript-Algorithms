const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const products = [
    {
        id: 1,
        name: "All-Mountain Snowboard",
        price: 499.99,
        category: "Snowboard",
        image: "https://images.unsplash.com/photo-1523315572836-e414c9c1b9b1?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Snowboard Bindings",
        price: 199.99,
        category: "Snowboard",
        image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Snowboard Boots",
        price: 249.99,
        category: "Snowboard",
        image: "https://images.unsplash.com/photo-1521671413015-ce2b0103c8c7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Snowboard Helmet",
        price: 89.99,
        category: "Snowboard",
        image: "https://images.unsplash.com/photo-1596706788220-30fc719a868f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Snow Goggles",
        price: 129.99,
        category: "Snowboard",
        image: "https://images.unsplash.com/photo-1558227845-81d7ebf0581f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Climbing Harness",
        price: 79.99,
        category: "Rock Climbing",
        image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Climbing Rope (60m)",
        price: 159.99,
        category: "Rock Climbing",
        image: "https://images.unsplash.com/photo-1532431602446-c0c4a0fc35b9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Carabiners (5 Pack)",
        price: 49.99,
        category: "Rock Climbing",
        image: "https://images.unsplash.com/photo-1588698940801-4978ab484501?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Chalk Bag",
        price: 19.99,
        category: "Rock Climbing",
        image: "https://images.unsplash.com/photo-1529124483758-294715f33336?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Climbing Shoes",
        price: 139.99,
        category: "Rock Climbing",
        image: "https://images.unsplash.com/photo-1621508212134-4536f987d605?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Belay Device",
        price: 29.99,
        category: "Rock Climbing",
        image: "https://images.unsplash.com/photo-1556041696-6e2dbf77c442?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Quickdraws (6 Pack)",
        price: 89.99,
        category: "Rock Climbing",
        image: "https://images.unsplash.com/photo-1605333177699-2a91219b109e?auto=format&fit=crop&w=600&q=80"
    },
];

products.forEach(
    ({ name, id, price, category, image }) => {
        dessertCards.innerHTML += `
      <div class="dessert-card" style="background-image: url('${image}');">
        <h2>${name}</h2>
        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart
        </button>
      </div>
    `;
    }
);

class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.taxRate = 8.25;
    }

    addItem(id, products) {
        const product = products.find((item) => item.id === id);
        const { name, price } = product;
        this.items.push(product);

        const totalCountPerProduct = {};
        this.items.forEach((dessert) => {
            totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
        })

        const currentProductCount = totalCountPerProduct[product.id];
        const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

        currentProductCount > 1
            ? currentProductCountSpan.textContent = `${currentProductCount}x`
            : productsContainer.innerHTML += `
      <div id="dessert${id}" class="product">
        <p>
          <span class="product-count" id="product-count-for-id${id}"></span>${name}
        </p>
        <p>${price}</p>
      </div>
      `;
    }

    getCounts() {
        return this.items.length;
    }

    clearCart() {
        if (!this.items.length) {
            alert("Your shopping cart is already empty");
            return;
        }

        const isCartCleared = confirm(
            "Are you sure you want to clear all items from your shopping cart?"
        );

        if (isCartCleared) {
            this.items = [];
            this.total = 0;
            productsContainer.innerHTML = "";
            totalNumberOfItems.textContent = 0;
            cartSubTotal.textContent = 0;
            cartTaxes.textContent = 0;
            cartTotal.textContent = 0;
        }
    }

    calculateTaxes(amount) {
        return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
    }

    calculateTotal() {
        const subTotal = this.items.reduce((total, item) => total + item.price, 0);
        const tax = this.calculateTaxes(subTotal);
        this.total = subTotal + tax;
        cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
        cartTaxes.textContent = `$${tax.toFixed(2)}`;
        cartTotal.textContent = `$${this.total.toFixed(2)}`;
        return this.total;
    }
};

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach(
    (btn) => {
        btn.addEventListener("click", (event) => {
            cart.addItem(Number(event.target.id), products);
            totalNumberOfItems.textContent = cart.getCounts();
            cart.calculateTotal();
        })
    }
);

cartBtn.addEventListener("click", () => {
    isCartShowing = !isCartShowing;
    showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
    cartContainer.style.display = isCartShowing ? "block" : "none";
});

clearCartBtn.addEventListener("click", cart.clearCart.bind(cart))