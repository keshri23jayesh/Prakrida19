import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import anime from 'animejs';

class Sidebar extends React.Component{
    state = {open: false};
    openSideMenu = () => {
        console.log('clicked');
        if(!this.state.open){
            anime({
                targets: '.sidebar_cont',
                width: ['80px', '300px']
            });
            this.setState({ open: true});
        }else{
            anime({
                targets: '.sidebar_cont',
                width: ['300px', '80px']
            });
            this.setState({ open: false});
        }
        
    }
    
    renderIcon(){
        if(!this.state.open){
            return (
                <i className="fa fa-bars" onClick={this.openSideMenu}></i>
            );
        }else{
            return (
                <i className="fa fa-times" onClick={this.openSideMenu}></i>
            );
        }
    }
    render(){
        let listShown = "";
        if(this.state.open){
            listShown = "shown"
        }else{
            listShown = "not_shown"
        }
        return (
            <div className="sidebar_cont">
                <div className={listShown}>
                    <ul className="list">
                        <li onClick={()=>this.openSideMenu()}><Link to={'/'}>Home</Link></li>
                        <li onClick={()=>this.openSideMenu()}><Link to={'/events'}>Events</Link></li>
                        <li onClick={()=>this.openSideMenu()}><Link to={'/informal'}>Informal Events</Link></li>
                        <li onClick={()=>this.openSideMenu()}><Link to={'/accomodation'}>Accommodation</Link></li>
                        <li onClick={()=>this.openSideMenu()}><Link to={'/payments'}>Payment Details</Link></li>
                        <li onClick={()=>this.openSideMenu()}><Link to={'/rules'}>General Rules</Link></li>
                        <li onClick={()=>this.openSideMenu()}><Link to={'/team'}>Our Team</Link></li>
                        <li onClick={()=>this.openSideMenu()}><Link to={'/sponsor'}>Our Sponsors</Link></li>
                    </ul>
                </div>
                <div className="sidebar">
                    <div className="top">
                        {this.renderIcon()}

                    </div>
                    <div className="bottom">
                        <a 
                            target="_blank" href="https://www.facebook.com/prakrida2019"><i className="fa fa-facebook-f"></i></a>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/prakrida_bitp"
                            >
                            <i className="fa fa-instagram"></i>
                        </a>
                        
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Sidebar;