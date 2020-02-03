import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngridient/BurgerIngredient';

const Burger = (props) => {
    let ingredientsArray = Object.keys(props.ingredients).map(
        key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                    return <BurgerIngredient type={key} key={key + i}/>;
                }
            );
        }
    ).reduce((arr, current) => {
        return arr.concat(current);
    }, []);
    if(ingredientsArray.length === 0) {
        ingredientsArray = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"}/>
            {ingredientsArray}
            <BurgerIngredient type={"bread-bottom"}/>
        </div>
    );
};

export default Burger;