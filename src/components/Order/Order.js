import React from 'react';

import classes from './Order.css';

const Order = (props) => {

    let transformedIngredients = [];

    for (let ingredientName in props.ingredients) {
        transformedIngredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

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