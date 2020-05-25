import React from 'react'
import './OrderList.css'
import IPhone from '../../common/images/iphone1.jpg'

const OrderList = ()=>{

    return(
        <div className="container">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-4 p-3">
						<h2>Order <b>Details</b></h2>
					</div>
                </div>
            </div>
			<div className="table-filter">
				<div className="row">
                    <div className="col-sm-3">
						<div className="show-entries">
							<span>Show Entries</span>
							<select className="form-control">
								<option>5</option>
								<option>10</option>
								<option>15</option>
								<option>20</option>
							</select>
						</div>
					</div>
                    <div className="col-sm-9">
                    <div className="row">
                        <div className="col-sm-6">
                        <div className="filter-group">
							<label>Name</label>
                            <div className="row">
                            <div className="col-md-11 d-flex justify-content-end"><input type="text" className="form-control"/></div>
                            <div className="col-md-1 d-flex justify-content-start"><button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                            </div>
                            </div>
						</div>
                        </div>
                        <div className="col-sm-6">
                        <div className="filter-group">
                        <span className="filter-icon"><i className="fa fa-filter"></i></span>
							<label>Status</label>
							<select className="form-control">
								<option>Any</option>
								<option>Delivered</option>
								<option>Shipped</option>
								<option>Pending</option>
								<option>Cancelled</option>
							</select>
						</div>
						
                        </div>
                    </div>
							
						
                    </div>
                </div>
			</div>
            <table className="table  table-hover">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Item</th>
						<th>Order Date</th>						
                        <th>Status</th>						
						<th>Net Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                        <a href="#"><img src={IPhone} width="150" height = "200" className="avatar p-1" alt="Avatar"/> 
                        <p>Michael Holz</p></a></td>
                        <td>Jun 15, 2017</td>                        
						<td><span className="status text-success">&bull; Delivered</span> </td>
						<td>$254</td>
				    </tr>
					<tr>
                        <td>2</td>
                        <td>
                        <a href="#"><img src={IPhone} width="150" height = "200" className="avatar p-1" alt="Avatar"/> 
                        <p>Michael Holz</p></a>
                        </td>
                        <td>Jun 21, 2017</td>
						<td><span className="status text-info">&bull;Shipped</span> </td>
						<td>$1,260</td>
                    </tr>
					<tr>
                        <td>3</td>
                        <td>
                        <a href="#"><img src={IPhone} width="150" height = "200" className="avatar p-1" alt="Avatar"/> 
                        <p>Michael Holz</p></a>
                        </td>
                        <td>Jul 04, 2017</td>
                        <td><span className="status text-danger">&bull; Cancelled</span> </td>
						<td>$350</td>
						</tr>
					<tr>
                        <td>4</td>
                        <td>
                        <a href="#"><img src={IPhone} width="150" height = "200" className="avatar p-1" alt="Avatar"/> 
                        <p>Michael Holz</p></a>
                        </td>
                        <td>Jul 16, 2017</td>	
                        				
						<td><span className="status text-warning">&bull; Pending</span> </td>
						<td>$1,572</td>
                    </tr>
					<tr>
                        <td>5</td>
                        <td>
                        <a href="#"><img src={IPhone} width="150" height = "200" className="avatar pt-3" alt="Avatar"/> 
                        <p>Michael Holz</p></a>
                        </td>
                        <td>Aug 04, 2017</td>
						<td><span className="status text-success">&bull; Delivered</span> </td>
						<td>$580</td>
				   </tr>
                </tbody>
            </table>
			<div className="clearfix">
                <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul className="pagination">
                    <li className="page-item disabled"><a href="#">Previous</a></li>
                    <li className="page-item"><a href="#" className="page-link">1</a></li>
                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                    <li className="page-item"><a href="#" className="page-link">3</a></li>
                    <li className="page-item active"><a href="#" className="page-link">4</a></li>
                    <li className="page-item"><a href="#" className="page-link">5</a></li>
					<li className="page-item"><a href="#" className="page-link">6</a></li>
					<li className="page-item"><a href="#" className="page-link">7</a></li>
                    <li className="page-item"><a href="#" className="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>     
    )
}


export default OrderList