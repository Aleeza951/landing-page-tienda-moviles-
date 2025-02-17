// Lista de productos
const products = [
    { id: 1, name: "iPhone 14", category: "movil", price: 999, img: "iphone.jpg" },
    { id: 2, name: "Samsung Galaxy S23", category: "movil", price: 799, img: "samsung.jpg" },
    { id: 3, name: "Smartwatch Series 8", category: "reloj", price: 299, img: "smartwatch.jpg" },
    { id: 4, name: "Audífonos Bluetooth", category: "audifono", price: 99, img: "audifonos.jpg" },
    { id: 5, name: "Cargador Rápido", category: "cargador", price: 49, img: "cargador.jpg" },
    { id: 6, name: "USB 64GB", category: "usb", price: 29, img: "usb.jpg" },
    { id: 7, name: "Funda para iPhone", category: "funda", price: 19, img: "funda.jpg" }
];

// Carrito de compras
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para renderizar productos
function renderProducts(filter = 'all') {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter);
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product', product.category);

        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Añadir al carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Añadir productos al carrito
function addToCart(id, name, price) {
    cart.push({ id, name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartInfo();
    alert(`${name} ha sido añadido al carrito.`);
}

// Actualizar la información del carrito
function updateCartInfo() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Ver el carrito (redirigir a la página del carrito)
function viewCart() {
    window.location.href = 'cart.html'; // Redirige al carrito (deberías crear la página cart.html)
}

// Filtrar productos
function filterProducts(category) {
    renderProducts(category);
}

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartInfo();
});
