import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_D9SI5SDs8nht8AxWTRGkv15L00E2UQRGDt';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now' 
            name='Crown Clothing Ltd.' 
            shippingAddress 
            billingAddress 
            image='https//svgshare.com/i/CUz.svg'  
            description={`Your total is $${price}`} 
            amount={priceForStripe} 
            panelLabel='Pay Now' 
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;