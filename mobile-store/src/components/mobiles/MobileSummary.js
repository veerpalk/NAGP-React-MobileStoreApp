import React from 'react'
import IPhone from '../../common/images/iphone1.jpg'
import { connect} from 'react-redux'
import {addToCart} from '../../store/actions/cartActions'
import { Link} from 'react-router-dom'
import './Mobile.css'
import { useHistory } from "react-router-dom";

const MobileSummary = (props) => {
    const history = useHistory();
    const {mobile} = props

   const handleAddToCart = () =>{
        props.addToCart(mobile);
        history.push("/cart");
    }

    const handleMobileView = () =>{
        props.history.push("/mobile/"+mobile.id)
    }

    return (
        <div className="col-sm-3 py-2">
            <div className="card">
            <Link to = {'/mobile/'+ mobile.id}>
                <img className="card-img-top" src={mobile.image} height="400" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title text-center">{mobile.modelName}</h5>
                    <p className="card-text text-center">Rs.{mobile.price}</p>
                </div>
                </Link>
                <div className="card-footer">
                    <div className="row justify-content-center">
                    <Link to = {'/mobile/'+ mobile.id}>
                        <small className="btn btn-outline-dark mr-2 viewBtn" onClick={handleMobileView}>
                            <span className="fas fa-eye " ></span><span >View</span>
                                </small> </Link>
                        <small className="btn btn-outline-dark ml-2 cartBtn" onClick={handleAddToCart}>
                            <span className="fas fa-shopping-cart"></span> Add To Cart
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addToCart: (mobile) => dispatch(addToCart(mobile))
    }
}

export default connect(null,mapDispatchToProps)(MobileSummary)