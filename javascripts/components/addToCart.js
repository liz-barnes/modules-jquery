import { setCart } from './../helpers/data/cartData.js';
import { makeCartComponent } from './cartDOM.js';
import { cartModal, chargeIt, showCartItems } from './cartModal.js';

const makeCart = () => {
    $('#cart').html(`
        ${cartModal()}
        ${makeCartComponent()}`);
    $('#charge-it').click(() => {
        const ccNum = $('#credit-card').val();
        chargeIt(ccNum);
    });

    showCartItems();
};

const addToCart = (array, index) => {
    const cartButton = $(`#cart-add-${index}`);

    cartButton.on('click', () => {
        setCart(array[index]);
        makeCart();
    });
};

export { makeCart, addToCart}
