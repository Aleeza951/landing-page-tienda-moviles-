function loadCart() {
    // Obtener carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    // Limpiar el contenido actual
    cartItems.innerHTML = "";

    // Si no hay productos, mostrar mensaje
    if (cart.length === 0) {
        cartItems.innerHTML = "<li>El carrito está vacío</li>";
        cartTotal.innerText = "$0";
        return;
    }

    // Calcular total y crear los productos
    let total = 0;
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - $${item.price}
            <button class="delete-btn" onclick="removeFromCart(${index})">
                <img src="bin.png" alt="Eliminar" class="bin-sticker">
            </button>
        `;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Actualizar el total
    cartTotal.innerText = `$${total}`;
}

function removeFromCart(index) {
    // Obtener carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Eliminar el producto seleccionado
    cart.splice(index, 1);
    // Actualizar carrito en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    // Recargar carrito
    loadCart();
}

function clearCart() {
    // Eliminar el carrito completo
    localStorage.removeItem("cart");
    loadCart();
}

// Cargar carrito al iniciar la página
document.addEventListener("DOMContentLoaded", loadCart);
