import React, { Component } from 'react';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import Order from '../../components/Order/Order';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }

                this.setState({orders: fetchedOrders, loading: false});
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render() {
        return(
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id} 
                        price={+order.price}
                        ingredients={order.ingredients}
                        customer={order.customer} />
                ))}
            </div>
        );
    }
};

export default withErrorHandler(Orders, axios);