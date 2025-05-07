const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkOutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressinput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")


//Abrir Modal do Carrinho
cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex"
})

//Quando clicar fora
cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

// Botão Fechar
closeModalBtn.addEventListener("click", function() {
    cartModal.style.display = "none"
})

// Botão Add ao Carrinho
menu.addEventListener("click", function(event) {
    // console.log(event.target)
    let parentButton = event.target.closest(".add-to-cart-btn")
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))

   
        
    }

})