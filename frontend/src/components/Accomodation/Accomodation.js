import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Accomodation extends Component{
    render(){
        return (
            <div className="detail_container">
                <div className="detail_contents">
            <div className="single">
               <div className="header">
                    <h1 className="single_title">Accomodation
                        <span className="close_icon">
                            <Link to={'/'}><i className="fa fa-times"></i></Link>
                        </span>
                   </h1>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Accomodation Details
                    </h3>
                    <ul className="single_list">
                        <li>Accomodation includes Fooding as well as lodging to the student accessing.</li> 
							<li>Individuals will be provided with a room and mess facilities for the following three days:
                                <ul>
                                    <li>15th Feb, 2019</li>
                                    <li>16th Feb, 2019</li>
                                    <li>17th Feb, 2019</li>
                                </ul>
                        
                        
                        </li>
                        <li>
                            Mess facilities will include 4 meals a day.
                        </li>
                        <li>
                            Amount : 700/- per person
                        </li>
                        <li>
                            Security money : 200/- per person (Payable at the time of check-in)
                        </li>
                        <li>
                            Security money is refundable until and unless you harm the college or hostel premises, if found strict actions will be taken against the one involved. 
                        </li>
                        <li>
                            Accommodation for Boys will be provided in Boys hostel-1, Boys hostel-2 and Boys Hostel-3.
                        </li>
                        <li>
                            Accommodation for Girls will be provided in Girls hostel -1.
                        </li>
                    </ul>
               </div>
                </div>
               
           </div>
            </div>
        );
    }
}
export default Accomodation;