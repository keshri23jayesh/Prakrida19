import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSponsors } from '../../actions';
import Loader from '../../Loader/Loader';
import { particles } from '../HomePage/config';
import Particles from 'react-particles-js';

class Team extends Component{
    
    componentDidMount(){
        this.props.fetchSponsors();
    }
    render(){
        if(!this.props.sponsor.length){
            return <Loader />
        }
        else{
            return <div>{this.renderTeam()}</div>
        }
    }
    renderTeam(){
        const particlesParams = particles; 
        return (
            <div className="event_container">
                <h4 className="event_title">OUR SPONSORS</h4>
                <div className="indi_cont spon_cont">
                    <div className="indi">
                        {this.renderIndividual()}
                    </div>
                </div>
            </div>
        );
    }
    renderIndividual(){
        return this.props.sponsor.map(individual => {
            let src = 'http://prakridabit.in'+individual.url;
            return (
                <div className="indi_card spon_card">
                    <div className="indi_inside">
                        <img src={src}/>
                        <h1><a href={individual.post}>{individual.post}</a></h1>
                        <h4>{individual.name}</h4>
                    </div>
                </div>
            );
        })
    }
}
const mapStateToProps = ({ sponsor }) => {
    return { sponsor };
}

export default connect(mapStateToProps, { fetchSponsors })(Team);