import React from 'react'
import { useHistory } from "react-router-dom";

const OrderPopUp = ()=>{
var min = 1;
var max = 100;
var orderId =  Math.floor(min + (Math.random() * (max-min)));
const history = useHistory();

const hadleGoToShopping = () => {
    history.push("/");
}

   

    return(
        <div className="container ">
        <div className=" py-2 ">
            <div className="card customCard p-5">
                <div className="card-body">
                    <h1 className="row justify-content-center text-secondary">Great, Order Placed  Sucessfully !<span className=" p-2 fas fa-smile-wink"></span></h1>
                    <h1 className="row justify-content-center text-secondary">OrderId: {orderId} <span className=" p-2 "></span></h1>
              
                </div>
                <div className="card-footer">
                    <div className="row justify-content-center">
                        <div className=" justify-content-center"><button type="button" className="btn btn-secondary" onClick={hadleGoToShopping}>Lets Shop More! </button> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default OrderPopUp