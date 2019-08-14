import React from 'react';

import classes from './Order.css';

const Order = (props) => {
    // let transformedIngredients = Object.keys(props.ingredients)
    //     .map(igKey => {
    //         console.log(igKey);
    //         return [...Array(props.ingredients[igKey])].map((_, i) => {
    //             return <span key={igKey + i}><span style={{textTransform: 'capitalize'}}>{igKey}</span> <span>({props.ingredients[igKey]})</span> </span>
    //         })
    //     })
    //     .reduce((arr, el) => {
    //         return arr.concat(el);
    //     }, []);

    let transformedIngredients = [];

    for (let ingredientName in props.ingredients) {
        transformedIngredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }
    console.log(transformedIngredients);

    return (
        <div className={classes.Order}>
            <p>{transformedIngredients.map(ing => (
                <span
                    key={ing.name}
                    style={{textTransform: 'capitalize'}}
                    >{ing.name} ({ing.amount}) </span>
            ))}</p>
            <p>Price: <strong>USD { props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default Order;