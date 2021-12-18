const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const catrCloseBtn = cartModal.querySelector('.cart-close')

    const openCart = () => {
        cartModal.style.display = 'flex'
    }

    const closeCart = () => {
        cartModal.style.display = ''
    }

    cartBtn.addEventListener('click', openCart)
    catrCloseBtn.addEventListener('click', closeCart)
}

export default cart