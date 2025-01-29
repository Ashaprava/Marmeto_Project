document.addEventListener("DOMContentLoaded", function () {
    var cartItems = document.querySelectorAll(".cart-item");

    cartItems.forEach(function (cartItem) {
        var quantityInput = cartItem.querySelector(".quantity-input");
        var subtotalElement = cartItem.querySelector(".subtotal");
        var deleteBtn = cartItem.querySelector(".delete-btn");
        var basePrice = parseInt(cartItem.dataset.price);

        function updateSubtotal() {
            var quantity = parseInt(quantityInput.value);
            if (isNaN(quantity) || quantity < 1) {
                quantity = 1;
                quantityInput.value = 1;
            }
            var subtotal = basePrice * quantity;
            subtotalElement.textContent = "Rs. " + subtotal.toLocaleString() + ".00";
        }

        quantityInput.addEventListener("input", updateSubtotal);
        
        deleteBtn.addEventListener("click", function () {
            cartItem.remove();
        });

        updateSubtotal();
    });
});
