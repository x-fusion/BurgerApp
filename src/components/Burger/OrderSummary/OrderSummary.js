import React from "react";
import Auxiliary from '../../../hoc/Auxiliary';
import Button from "../../UI/Button/Button";


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
            <p><strong>Total price:{props.price.toFixed(2)}$</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType={"Danger"}
                    clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType={"Success"}
                    clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    );
};

export default OrderSummary;