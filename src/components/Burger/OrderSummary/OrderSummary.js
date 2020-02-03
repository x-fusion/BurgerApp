import React from "react";
import Auxiliary from '../../../hoc/Auxiliary'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(key => {
        return <li key={key}><span style={{textTransform: 'capitalize'}}>{key}:</span> {props.ingredients[key]}</li>
    });

    return (
        <Auxiliary>
            <h3>Your order:</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Auxiliary>
    );
};

export default OrderSummary;