import React, { useEffect, useState, useContext } from 'react'
import { connect, useDispatch } from 'react-redux'
import { addToCart, fetchCart, addQuantity, reduceQuantity, removeItemFromCart } from '../../store/actions/cartActions'
import './Cart.css'
import { useHistory } from "react-router-dom";
import {AuthContext} from '../auth/AuthContext';
import OrderPopUp from '../order/OrderPopUp'

const CartList = ({ cartDetail, fetchCart, }) => {

    useEffect(() => {
        fetchCart()
    }, [])

    const {user, setUser} = useContext(AuthContext)

    const dispatch = useDispatch()
    const cartItems = cartDetail.cart
    const cartItemsCount = cartItems.length
    const history = useHistory();


    const cartTotal = Object.values(cartDetail.cart).reduce((result, cartItem) =>
        result + cartItem.mobile.price * cartItem.quantity, 0)

    const cartTax = cartTotal * 2 / 100;
    const shippingCharges = 100;
    const cartGrandTotal = cartTotal + cartTax + shippingCharges;


    const handleRemoveItemFromCart = (index) => {
        dispatch(removeItemFromCart(index))
    }

    const hadleGoToShopping = () => {
        history.push("/");
    }


    const handlePlaceOrder = ()=>{
        if(user)
        {
            history.push("/orderPopUp")
        }
        else{
            history.push("/signin");
        }
    }
    return cartItemsCount > 0 ? (
        <div className="row">
            <div className="container main-section">
                <div className="row">
                <div className="col-lg-5 pt-3 pb-2">
                        <h4><button type="button" onClick={hadleGoToShopping} className="btn btn-outline-dark">Continue Shopping! <span className="fas fa-shopping-bag" ></span></button> </h4>
                    </div>
                    <div className="col-lg-7 pt-3 pb-2">
                        <h4>Cart Details ({cartItemsCount}) </h4>
                    </div>
                    <div className="col-lg-12 pl-3 pt-3">
                        <table className="table table-hover border bg-white">
                            <thead style={{ backgroundColor: "#A9A9A9" }}>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th style={{ width: "10%" }}>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((cartItem, index) => {
                                    return (
                                        <tr>
                                            <td>
                                                <div className="row">

                                                    <div className="col-lg-3 Product-img">
                                                        <img src={cartItem.mobile.image} height="200" width="150" className="img-responsive pr-2" />
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <h4 className="nomargin">{cartItem.mobile.modelName} ({cartItem.mobile.color}, {cartItem.mobile.storage})</h4>
                                                        <p>Model: {cartItem.mobile.modelNumber}, Seller: SuperComNet </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td> {cartItem.mobile.price} </td>
                                            <td>
                                                <div class="number-input md-number-input">
                                                    <button onClick={() => dispatch(reduceQuantity(index))} class="minus"></button>
                                                    <input className="quantity" min="0" name="quantity" value={cartItem.quantity} type="number" />
                                                    <button onClick={() => dispatch(addQuantity(index))} class="plus"></button>
                                                </div>
                                            </td>
                                            <td>{cartItem.price}</td>
                                            <td className="actions" data-th="" style={{ width: "10%" }}>
                                                <button className="btn btn-danger btn-sm" onClick={() => handleRemoveItemFromCart(index)}><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="1" className="hidden-xs"></td>
                                    <td>
                                        <p>Total : </p>
                                        <p>Tax(2%) : </p>
                                        <p>Shipping : </p>
                                        <p><strong>Grand Total :</strong> </p>
                                    </td>
                                    <td colSpan="2" className="hidden-xs text-right">
                                        <p>Rs. {cartTotal}</p>
                                        <p>Rs. {cartTax} </p>
                                        <p>Rs. {shippingCharges} </p>
                                        <p><strong>Rs. {cartGrandTotal}</strong></p>
                                    </td>
                                    <td colSpan="1" className="hidden-xs"></td>
                                </tr>
                                <tr>
                                    <td colSpan="3" className="hidden-xs"></td>
                                    <td colSpan="2" className="hidden-xs  text-right"><div style={{ width: "100%" }} className="btn btn-success btn-block" onClick={handlePlaceOrder}>Place Order <i className="fa fa-angle-right"></i></div></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    ) : (

            <div className="container ">
                <div className=" py-2 ">
                    <div className="card customCard p-5">
                        <div className="card-body">
                            <h1 className="row justify-content-center text-secondary">Empty Cart <span className=" p-2 fas fa-frown-open"></span></h1>
                        </div>
                        <div className="card-footer">
                            <div className="row justify-content-center">
                                <div className=" justify-content-center"><button type="button" onClick={hadleGoToShopping} className="btn btn-secondary">Lets Shop! </button> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
}

const mapStateToPros = (state) => {
    return {
        cartDetail: state.cartReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart: () => dispatch(fetchCart()),
        addToCart: () => dispatch(addToCart())
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(CartList)