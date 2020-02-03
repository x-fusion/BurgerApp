import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p><strong>Current Price:{props.price.toFixed(2)} $</strong></p>
        {
            controls.map(
                (control => (
                    <BuildControl
                        key={control.label}
                        added={() => props.ingredientAdded(control.type)}
                        removed={() => props.ingredientRemoved(control.type)}
                        label={control.label}
                        disabled={props.disabled[control.type]}
                    />
                ))
            )
        }
        <button className={classes.OrderButton}>ORDER NOW</button>
    </div>
);

export default buildControls;