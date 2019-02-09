import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../../actions';
import Loader from '../../Loader/Loader';
import { particles } from '../HomePage/config';
import Particles from 'react-particles-js';
import './Team.css';


class Team extends Component{
    
    componentDidMount(){
        this.props.fetchTeams();
    }
    render(){
        if(!this.props.team.length){
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
                <h4 className="event_title">OUR TEAM</h4>
                <Particles
                        className="particles"
                        params={particlesParams}
                    />
                <div className="indi_cont">
                    <div className="indi">
                        {this.renderIndividual()}
                    </div>
                </div>
            </div>
        );
    }
    renderIndividual(){
        return this.props.team.map(individual => {
            let src = 'http://prakridabit.in'+individual.url;
            return (
                <div className="indi_card">
                    <div className="indi_inside">
                        <img src={src}/>
                        <h1>{individual.post}</h1>
                        <h4>{individual.name}</h4>
                    </div>
                </div>
            );
        })
    }
}
const mapStateToProps = ({ team }) => {
    console.log(team);
    return { team };
}

export default connect(mapStateToProps, { fetchTeams })(Team);