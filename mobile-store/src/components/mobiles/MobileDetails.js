import React, { useEffect }from 'react'
import IPhone from '../../common/images/iphone1.jpg'
import { connect, useDispatch} from 'react-redux'
import {  fetchMobiles } from '../../store/actions/mobileActions'
import { addToCart} from '../../store/actions/cartActions'


import './Mobile.css'
import { useHistory } from "react-router-dom";

const MobileDetails = ({ mobile, fetchMobiles }) => {

    const history = useHistory();
    const dispatch = useDispatch()
   
    useEffect(() => {
        fetchMobiles()
    }, [])

    const hadleGoToShopping = () => {
        history.push("/");
    }

    const handleAddToCart = () =>{
        dispatch(addToCart(mobile));
        history.push("/cart");
    }

    return mobile? (<div className="container">
    <div className="row">
        <div className="col-sm-3 p-2">
            <div className="card">
                <img className="card-img-top" src={mobile.image}  height="500" alt="Card image cap" />
                <div className="card-footer " style={{backgroundColor: '#E8E8E8'}}>
                    <div className="row justify-content-center pl-5 pr-5">
                       
                        <div className="col-sm-2"> <button type="button " style={{backgroundColor: 'black'}} className="btn btn-default btn-circle"></button>
                       </div>
                       <div className="col-sm-2"> <button type="button " style={{backgroundColor: 'gray'}} className="btn btn-default btn-circle"></button>
                       </div>
                       <div className="col-sm-2"> <button type="button " style={{backgroundColor: 'pink'}} className="btn btn-default btn-circle"></button>
                       </div>
                       <div className="col-sm-2"> <button type="button " style={{backgroundColor: 'red'}} className="btn btn-default btn-circle"></button>
                       </div>
                         <div className="col-sm-2"> <button type="button " style={{backgroundColor: 'gold'}} className="btn btn-default btn-circle"></button>
                       </div>
                       <div className="col-sm-2"> <button type="button " style={{backgroundColor: 'white'}} className="btn btn-default btn-circle"></button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-8 p-2 mt-5">
            <div className="d-flex row pb-4 pl-5">
                <div className="col-md-6"><h3 className="card-title">{mobile.modelName} ({mobile.color}, {mobile.storage})</h3></div>
                </div>
            <div className=" col-md-10 d-flex row p-1 justify-content-center">
                <div className="col-md-4 d-flex justify-content-start">
                    Model Name:
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {mobile.modelName}
                </div>
            </div>
            <div className=" col-md-10 d-flex row p-1 justify-content-center">
                <div className="col-md-4 d-flex justify-content-start">
                    Price:
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {mobile.price}
                </div>
            </div>

            <div className=" col-md-10 d-flex row p-1 justify-content-center">
                <div className="col-md-4 d-flex justify-content-start">
                    Color:
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {mobile.color}
                </div>
            </div>

            <div className=" col-md-10 d-flex row p-1 justify-content-center">
                <div className="col-md-4 d-flex justify-content-start">
                    Model Number:
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {mobile.modelNumber}
                </div>
            </div>
            <div className=" col-md-10 d-flex row p-1 justify-content-center">
                <div className="col-md-4 d-flex justify-content-start">
                    Screen Size:
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                {mobile.screenSize}
                </div>
            </div>
            <div className=" col-md-10 d-flex row p-1 justify-content-center">
                <div className="col-md-4 d-flex justify-content-start">
                    Operating System:
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {mobile.operatingSystem}
                </div>
            </div>
            <div className=" col-md-10 d-flex row p-1 justify-content-center">
                <div className="col-md-4 d-flex justify-content-start">
                    RAM:
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {mobile.ram}
                </div>
            </div>
            <div className=" col-md-10 d-flex row p-1 justify-content-center">
                <div className="col-md-4 d-flex justify-content-start">
                    Internal Storage:
                </div>
                <div className="col-md-6 d-flex justify-content-start">
                    {mobile.storage}
                </div>
            </div>
            <div className=" col-md-10 d-flex row p-5 justify-content-center">
            </div>
            
            <div className=" col-md-10 d-flex row p-1 justify-content-center">
            <button type="button"  className="btn btn-outline-dark" onClick={hadleGoToShopping}>Continue Shopping<span className="fas fa-shopping-bag" ></span></button>
            <div className="col-md-3 d-flex justify-content-end" onClick={handleAddToCart}><div className="btn btn-outline-dark ml-2"><span className="fas fa-shopping-cart"></span> Add To Cart</div></div>
            </div>
        </div>
    </div>
</div>): (<h1>Loanding.... Mobile</h1>)
    
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchMobiles: () => dispatch(fetchMobiles())
    }
}

const mapStateToPros = (state, ownProps) => {
    const id = ownProps.match.params.id
    const mobile = state.mobileReducer.mobiles?  state.mobileReducer.mobiles[id-1]: null
    return {
        mobile: mobile
    }
}

export default connect(mapStateToPros,mapDispatchToProps)(MobileDetails)