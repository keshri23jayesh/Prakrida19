import React, { Component } from 'react';
import anime from 'animejs';
import Particles from 'react-particles-js';
import { particles } from '../HomePage/config';
import { Link } from 'react-router-dom';


class Informal extends Component{
    
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
        console.log(target);
        anime({
            targets: '.'+target,
            width: ['140px', '200px'],
            scale: 1.2
        })
    };
    onLeave = (e)=>{
        const target = e.target.classList.value.split(' ')[0].split('_')[0];
        console.log(target);
        anime({
            targets: '.'+target,
            width: ['200px', '140px'],
            scale: 1
        })
    };
    render(){
        const particlesParams = particles; 
        return (
            <div className="event_container2">
                <h4 className="event_title">PRAKRIDA'19 INFORMAL EVENTS</h4>
                <Particles
                        className="particles"
                        params={particlesParams}
                    />
                <div className="row">
                    <div className="event">
                        <div className="back basketball">
                        </div>
                        <p className="event_name">CSGO</p>
                        <img 
                            className="pl cs_pl" 
                            alt="pl" src={require("../../images/cs.png")}/>
                        <div 
                            className="cs_details details" 
                            onMouseEnter={(e)=>this.onEnter(e)}
                            onMouseLeave={(e)=>this.onLeave(e)}
                            >
                            <Link to={'/events_detail/cs'} className="ui button primary">
                                DETAILS
                            </Link>
                        </div>
                    </div>
                    <div className="event">
                        <div className="back tennis">
                        </div>
                        <p className="event_name">FIFA 19</p>
                        <img 
                            className="pl fifa_pl" 
                            alt="pl" src={require("../../images/fifa.png")}/>
                        <div 
                            className="fifa_details details"
                            onMouseEnter={(e)=>this.onEnter(e)}
                            onMouseLeave={(e)=>this.onLeave(e)}
                            >
                            <Link to={'/events_detail/fifa'} className="ui button primary">
                                DETAILS
                            </Link>
                        </div>
                    </div>
                    <div className="event">
                        <div className="back volley">
                        </div>
                        <p className="event_name">PUBG</p>
                        <img 
                            className="pl pub_pl" 
                            alt="pl" src={require("../../images/pubg.png")}/>
                        <div 
                            className="pub_details details"
                            onMouseEnter={(e)=>this.onEnter(e)}
                            onMouseLeave={(e)=>this.onLeave(e)}
                            >
                            <Link to={'/events_detail/pubg'} className="ui button primary">
                                DETAILS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Informal;