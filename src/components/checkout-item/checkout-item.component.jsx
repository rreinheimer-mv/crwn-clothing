import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart,addItem, removeItem } from '../../redux/cart/cart.actions';

import { 
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, price, quantity } = cartItem;
    return (<CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item' />
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <span onClick=
                {() => removeItem(cartItem)}>
                &#10094;
            </span>
            <span>{quantity}</span>
            <span onClick=
                {() => addItem(cartItem)}>
                &#10095;
            </span>
        </QuantityContainer>
        <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer 
            onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>);
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(
    null, 
    mapDispatchToProps)
    (CheckoutItem);