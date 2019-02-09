import React, { Component } from 'react';
import anime from 'animejs';
import Particles from 'react-particles-js';
import { particles } from '../HomePage/config';
import { Link } from 'react-router-dom';

import './Event.css';

class Event extends Component{
    
    constructor(props){
        super(props);
    }
    componentDidMount(){
        anime.timeline({
            
        })
        .add({
            targets: '.event_title',
            translateX: [-1200, 0],
            duration: 700,
            easing: 'easeOutQuad',
            delay: 500
        })
        .add({
            targets: '.back',
            scale: [0,1]
        }, '-=400')
        .add({
            targets: '.event_name',
            translateX: [-100,0],
            opacity: [0,1],
            easing: 'easeOutExpo'
        }, '-=600')
    }
    onEnter = (e)=>{
        const target = e.target.classList.value.split(' ')[0].split('_')[0];
        anime({
            targets: '.'+target,
            width: ['140px', '200px'],
            scale: 1.2
        })
    };
    onLeave = (e)=>{
        const target = e.target.classList.value.split(' ')[0].split('_')[0];
        anime({
            targets: '.'+target,
            width: ['200px', '140px'],
            scale: 1
        })
    };
    render(){
        const particlesParams = particles; 
        return (
            <div className="event_container">
                <h4 className="event_title">PRAKRIDA'19 EVENTS</h4>
                <Particles
                        className="particles"
                        params={particlesParams}
                    />
                <div className="row">
                    <div className="event">
                        <div className="back basketball">
                        </div>
                        <p className="event_name">BASKETBALL</p>
                        <img 
                            className="pl" 
                            alt="pl" src={require("../../images/basketball.png")}/>
                        <div 
                            className="basketball_details details" 
                            onMouseEnter={(e)=>this.onEnter(e)}
                            onMouseLeave={(e)=>this.onLeave(e)}
                            >
                            <Link to={'/events_detail/basketball'} className="ui button primary">
                                DETAILS
                            </Link>
                        </div>
                    </div>
                    <div className="event">
                        <div className="back tennis">
                        </div>
                        <p className="event_name">LAWN TENNIS</p>
                        <img 
                            className="pl" 
                            alt="pl" src={require("../../images/tennis.png")}/>
                        <div 
                            className="tennis_details details"
                            onMouseEnter={(e)=>this.onEnter(e)}
                            onMouseLeave={(e)=>this.onLeave(e)}
                            >
                            <Link to={'/events_detail/tennis'} className="ui button primary">
                                DETAILS
                            </Link>
                        </div>
                    </div>
                    <div className="event">
                        <div className="back volley">
                        </div>
                        <p className="event_name">VOLLEY BALL</p>
                        <img 
                            className="pl volley_pl" 
                            alt="pl" src={require("../../images/volley.png")}/>
                        <div 
                            className="volley_details details"
                            onMouseEnter={(e)=>this.onEnter(e)}
                            onMouseLeave={(e)=>this.onLeave(e)}
                            >
                            <Link to={'/events_detail/volley'} className="ui button primary">
                                DETAILS
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="event">
                        <div className="back badminton">
                        </div>
                        <p className="event_name">BADMINTON</p>
                        <img 
                            className="pl badminton_pl" 
                            alt="pl" src={require("../../images/badminton.png")}/>
                        <div 
                            className="badminton_details details"
                            onMouseEnter={(e)=>this.onEnter(e)}
                            onMouseLeave={(e)=>this.onLeave(e)}
                            >
                            <Link to={'/events_detail/badminton'} className="ui button primary">
                                DETAILS
                            </Link>
                        </div>
                    </div>
                    <div className="event">
                        <div className="back football">
                        </div>
                        <p className="event_name">FOOTBALL</p>
                        <img 
                            className="pl football_pl" 
                            alt="pl" src={require("../../images/player.png")}/>
                        <div 
                            className="football_details details"
                            onMouseEnter={(e)=>this.onEnter(e)}
                            onMouseLeave={(e)=>this.onLeave(e)}
                            >
                            <Link to={'/events_detail/football'} className="ui button primary">
                                DETAILS
                            </Link>
                        </div>
                    </div>
                    <div className="event">
                        <div className="back chess">
                        </div>
                        <p className="event_name">CHESS</p>
                        <img 
                            className="pl chess_pl" 
                            alt="pl" src={require("../../images/chess.png")}/>
                        <div 
                            className="chess_details details"
                            onMouseEnter={(e)=>this.onEnter(e)}
                            onMouseLeave={(e)=>this.onLeave(e)}
                            >
                            <Link to={'/events_detail/chess'} className="ui button primary">
                                DETAILS
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="event">
                        <div className="back kabaddi">
                        </div>
                        <p className="event_name">KABADDI</p>
                        <img 
                            className="pl kabaddi_pl" 
                            alt="pl" src={require("../../images/kabaddi.png")}/>
                        <div 
                            className="kabaddi_details details"
                            onMouseEnter={(e)=>this.onEnter(e)}
                            onMouseLeave={(e)=>this.onLeave(e)}
                            >
                            <Link to={'/events_detail/kabaddi'} className="ui button primary">
                                DETAILS
                            </Link>
                        </div>
                    </div>
                    <div className="event">
                        <div className="back table">
                        </div>
                        <p className="event_name">TABLE TENNIS</p>
                        <img 
                            className="pl table_pl" 
                            alt="pl" src={require("../../images/tt.png")}/>
                        <div 
                            className="table_details details"
                            onMouseEnter={(e)=>this.onEnter(e)}
                            onMouseLeave={(e)=>this.onLeave(e)}
                            >
                            <Link to={'/events_detail/table'} className="ui button primary">
                                DETAILS
                            </Link>
                        </div>
                    </div>
                    <div className="event">
                        <div className="back carrom">
                        </div>
                        <p className="event_name">CARROM</p>
                        <img 
                            className="pl carrom_pl" 
                            alt="pl" src={require("../../images/carrom.png")}/>
                        <div 
                            className="carrom_details details"
                            onMouseEnter={(e)=>this.onEnter(e)}
                            onMouseLeave={(e)=>this.onLeave(e)}
                            >
                            <Link to={'/events_detail/carrom'} className="ui button primary">
                                DETAILS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Event;