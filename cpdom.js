function increaseQuantity(button) {
    const quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantity += 1;
    quantityElement.textContent = quantity;
    updateTotal();
}
function decreaseQuantity(button) {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);

    if (quantity > 0) {
        quantity -= 1;
        quantityElement.textContent = quantity;
        updateTotal();
    }
}
function updateTotal() {
    const productCards = document.querySelectorAll('.card-body');
    let totalPrice = 0;
    for (let i = 0; i < productCards.length; i++) {
        const card = productCards[i];
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        const unitPrice = parseInt(card.querySelector('.unit-price').textContent.replace(' $', ''));
        totalPrice += (quantity * unitPrice)/2;
    }
    document.querySelector('.total').textContent = `${totalPrice} $`;
}
function deleteItem(button) {
    const card = button.closest('.card-body');
    card.remove();
    updateTotal();
}
function toggleLike(button) {
    button.classList.toggle('liked');
}
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("fa-plus-circle")) {
        increaseQuantity(event.target);
    } else if (event.target.classList.contains("fa-minus-circle")) {
        decreaseQuantity(event.target);
    } else if (event.target.classList.contains("fa-trash-alt")) {
        deleteItem(event.target);
    } else if (event.target.classList.contains("fa-heart")) {
        toggleLike(event.target);
    }
});