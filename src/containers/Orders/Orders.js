import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';

const Orders = props => {

    const { onFetchOrders, token } = props;

    useEffect(()=> {
       onFetchOrders(token);
    }, [onFetchOrders, token]);

    let orders = <Spinner />

    if(!props.loading) {
        orders = props.orders.map(order => (
            <Order  
                key={order.id} 
                price={+order.price}
                ingredients={order.ingredients}
                customer={order.customer} />
        ))
    }
    return orders;
};

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));