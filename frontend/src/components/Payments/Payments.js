import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Payments extends Component{
    render(){
        return (
            <div className="detail_container">
                <div className="detail_contents">
            <div className="single">
               <div className="header">
                    <h1 className="single_title">Payment Details
                        <span className="close_icon">
                            <Link to={'/'}><i className="fa fa-times"></i></Link>
                        </span>
                   </h1>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Name of the Bank:
                    </h3>
                    <ul className="single_list">
                        <li>PUNJAB NATIONAL BANK.</li> 
                    </ul>
               </div>
                <div className="single_content">
                    <h3 className="sub">
                        IFSC Code:
                    </h3>
                    <ul className="single_list">
                        <li>PUNB0445800</li> 
                    </ul>
               </div>
                <div className="single_content">
                    <h3 className="sub">
                        Bank Account No:
                    </h3>
                    <ul className="single_list">
                        <li>4458002100001452</li> 
                    </ul>
               </div>
                <div className="single_content">
                    <h3 className="sub">
                        Account Holder Name:
                    </h3>
                    <ul className="single_list">
                        <li>BIRLA INSTITUTE OF TECHNOLOGY</li> 
                    </ul>
               </div>
                </div>
               
           </div>
            </div>
        );
    }
}
export default Payments;