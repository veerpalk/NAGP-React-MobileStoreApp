import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux'
import { fetchMobiles} from '../../store/actions/mobileActions'
import MobileList from '../mobiles/MobileList'

function Dashboard({ mobileData, fetchMobiles}) {
    useEffect(() => {
        fetchMobiles()
    }, [])
   

    return mobileData.loading ? (
        <h2>loading....</h2>
    ) : mobileData.error ? (
        <h2>{mobileData.error}</h2>
    ) :
            mobileData && mobileData.mobiles && mobileData.mobiles.length? (
                <div className="container customContainer">
                    <div className="row">
                        <MobileList mobiles={mobileData.mobiles} />
                    </div>
                </div>
            ) : (

                <div className="container ">
                <div className=" py-2 ">
                    <div className="card customCard p-5">
                        <div className="card-body">
                            <h1 className="row justify-content-center text-secondary">No Items <span className=" p-2 fas fa-frown-open"></span></h1>
                        </div>
                        <div className="card-footer">
                            <div className="row justify-content-center">
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}

const mapStateToPros = (state) => {
    return {
        mobileData: state.mobileReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMobiles: () => dispatch(fetchMobiles()),
    }
}
export default connect(mapStateToPros, mapDispatchToProps)(Dashboard)