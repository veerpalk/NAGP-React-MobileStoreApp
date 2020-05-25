import React, { useState } from 'react'
import MobileSummary from '../mobiles/MobileSummary'
import { connect, useSelector } from 'react-redux'
import { sortMobilesHighToLow, sortMobilesLowToHigh } from '../../store/actions/mobileActions'
import Pagination from '../pagination/Pagination'
import './Mobile.css'

const MobileList = ({ sortMobilesHighToLow, sortMobilesLowToHigh }) => {
    const [filteredText, setFilter] = useState("")
    const { mobileReducer } = useSelector(s => s)
    const { mobiles, filteredMobiles } = mobileReducer;

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);
    const [totalPages, setTotalPages] = useState(Math.ceil(mobiles.length / postPerPage))
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = filteredMobiles.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => {
        if((currentPage>= 1 && pageNumber>=1) && (currentPage<=totalPages && pageNumber<=totalPages))
        setCurrentPage(pageNumber)
    }
    const handleSortLowToHigh = (e) => {

        sortMobilesLowToHigh()
    }

    const handleSortHighToLow = (e) => {
        sortMobilesHighToLow()
    }

    return (
        <div className="container mobileContainer">
            <div className="d-flex row pt-5">
                <div className="col-md-4"> <h5>Apple Mobiles</h5></div>
                <div className="col-md-7 d-flex justify-content-end">
                    <div className="input-group">
                        <input type="text" onChange={(e) => setFilter(e.target.value)} className="form-control" aria-label="Amount (to the nearest dollar)" />
                        <div className="input-group-append">
                            <span className="input-group-text"><div className="fas fa-search"></div></span>
                        </div>
                    </div>
                </div>

                <div className="col-md-1 d-flex justify-content-end">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" onClick={handleSortHighToLow}>Price - High to Low<span className="fas fa-arrow-down pl-2" ></span></a>
                            <a className="dropdown-item" onClick={handleSortLowToHigh}>Price - Low to High <span className="fas fa-arrow-up pl-1" ></span></a>
                            </div>
                    </div>
                </div>

            </div>
            <div className="border-top my-3"></div>

            <div className="row">
                {filteredMobiles.length ? currentPosts.map(mobile => {
                    if (mobile.modelName.toUpperCase().indexOf(filteredText.toUpperCase()) > -1)
                        return (
                            <MobileSummary mobile={mobile} key={mobile.id} />
                        )
                }) : null}

            </div>
            <div className="row">
                <Pagination postsPerPage={postPerPage} totalPosts={mobiles.length} 
                currentPage={currentPage}
                paginate={paginate}

                />
            </div>
        </div>
    )

}
const mapStateToPros = (state) => {
    
    return {
        // mobiles: state.mobileReducer.mobiles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortMobilesHighToLow: () => dispatch(sortMobilesHighToLow()),
        sortMobilesLowToHigh: () => dispatch(sortMobilesLowToHigh())
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(MobileList)