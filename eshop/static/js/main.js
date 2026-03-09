console.log("Main JS loaded");
document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('open-cart-btn');
    const closeBtn = document.getElementById('close-cart-btn');
    const sideCart = document.getElementById('side-cart');
    const overlay = document.getElementById('cart-overlay');

    // Function to open the cart
    function openCart() {
        sideCart.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevents scrolling the main page
    }

    // Function to close the cart
    function closeCart() {
        sideCart.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = ''; // Restores scrolling
    }

    // Event Listeners
    if (openBtn) {
        openBtn.addEventListener('click', function (e) {
            e.preventDefault();
            openCart();
        });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeCart);

    // Clicking the dark overlay also closes the cart
    if (overlay) overlay.addEventListener('click', closeCart);
});