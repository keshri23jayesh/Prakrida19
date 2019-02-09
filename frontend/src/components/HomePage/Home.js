import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import { particles } from './config';
import Parallax from 'parallax-js';
import Rellax from 'rellax';
import Counter from './Counter';
import anime from 'animejs';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { fetchColleges, register, fetchGames } from '../../actions';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import Registration from '../RegistrationForm2/RegistrationForm2';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Graph from './Graph';
import Grid from '@material-ui/core/Grid';

class Home extends Component{
    
    state = { modalOpen: false, snackBarOpen: false }

    onOpenModal = () => {
        this.setState({ modalOpen: true });
    };

    onCloseModal = () => {
        this.setState({ modalOpen: false });
    };
    onSubmit = (formValues) => {
        this.props.register(formValues);
    }
    onCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        this.setState({ snackBarOpen: false });
      };
    onOpenSnack = () => {
        this.setState({ snackBarOpen: true });
    };
    constructor(props){
        super(props);
        this.scene = React.createRef();
        this.fullPage = React.createRef();
    }
    componentDidMount(){
        this.props.fetchColleges();
        this.props.fetchGames();
        this.parallax = new Parallax(this.scene.current);
        this.parallax.friction(0.2,0.2);
        this.rellax = new Rellax('.rellax');
        anime.timeline({
            
        })
        .add({
            targets: '.player',
            opacity: [0,1],
            translateX: [-30, 0],
            translateY: [30, 0],
            duration: '1000',
            easing: 'easeInQuad'
        })
        .add({
            targets: '.ball',
            opacity: [0,1],
            translateX: [30, 0],
            translateY: [-30, 0],
            duration: '1000',
            easing: 'easeInQuad',
        }, '-=1000')
        .add({
            targets: '.refuse',
            top: ['1000px', '200px'],
            duration: '2000',
            easing: 'easeOutExpo',
        }, '-=800')
        .add({
            targets: '.text p',
            opacity: [0,1],
            translateY: [30, 0],
            delay: (el,i)=>i*500,
            duration: '2000',
            easing: 'easeOutExpo',
        }, '-=1600')
        .add({
            targets: '.first_bg',
            scaleY: [0,1],
            translateY: [-1000, 0],
            duration: '2000',
            easing: 'easeOutExpo',
        }, '-=3000')
        .add({
            targets: '.second_bg',
            scaleY: [0,1],
            translateY: [1000, 0],
            duration: '2000',
            easing: 'easeOutExpo',
        }, '-=3000')
    }

    componentWillUnmount(){
        this.parallax.disable();
    }
    
    render(){
        console.log(this.props.games);
        const videoSrc = 'https://www.youtube.com/embed/VrqunjWhwDk'
        const { modalOpen } = this.state;
        const particlesParams = particles; 
        return (
            <div>
                <Dialog 
                    open={this.state.modalOpen}
                    onBackdropClick={()=>this.setState({modalOpen: false})}
                    aria-labelledby="form-dialog-title"
                    maxWidth= 'lg'
                    >
                    <DialogTitle id="form-dialog-title">PRAKRIDA'19</DialogTitle>
                    <DialogContent
                        fullwidth
                        >
                        <Registration
                            games={this.props.games}
                            colleges={this.props.colleges}
                            onSubmit={this.onSubmit}
                            close={this.onCloseModal}
                            openSnack={this.onOpenSnack}
                            />
                    </DialogContent>
                    
                </Dialog>
                <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  open={this.state.snackBarOpen}
                  autoHideDuration={6000}
                  onClose={this.onCloseSnack}
                  ContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">Registered Successfully</span>}
                  action={[
                    <IconButton
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={this.onCloseSnack}
                    >
                      <CloseIcon />
                    </IconButton>,
                  ]}
                />
                <div className="container">
                    <Particles
                        params={particlesParams}
                    />
                    <div className="events">
                        <Link to={'/events'}>EVENTS</Link>
                        <Link to={'/informal'}>INFORMAL EVENTS</Link>
                    </div>
                    <div className="contents">
                        <div className="background">
                            <div className="first_bg"></div>
                            <div className="second_bg"></div>
                        </div>
                        <Counter />
                        <div className="main">
                            <img className="logo" alt="ball" src={require("../../images/logo.png")}/>
                            <div className="text">
                                <p className="heading">BIT Patna's</p>
                                <p className="title">PRAKRIDA'19</p>
                                <p className="heading2">Feb 15-17</p>
                                    <div className="images" ref={this.scene}>

                                        <img 
                                        data-depth="0.10"
                                        className="player" 
                                        alt="player" src={require("../../images/player.png")}/>

                                        <img 
                                            data-depth="0.60"
                                            className="ball"
                                            alt="ball" src={require("../../images/ball.png")}/>
                                        <img 
                                        className="inner"
                                        alt="inner" src={require("../../images/inner.png")}/>
                                    <img 
                                        className="middle"
                                        alt="middle" src={require("../../images/middle.png")}/>
                                    <img 
                                        className="outer"
                                        alt="outer" src={require("../../images/outer.png")}/>


                                </div>
                            </div>
                        </div>

                    </div>
                    <h4 className="refuse">REFUSE TO LOSE</h4>
                    <div className="btn_cont" onClick={this.onOpenModal}>
                        <span class="mas">REGISTER</span>
                        <button className="btn">REGISTER</button>
                    </div>
                </div>
                <div className="container">
                    <div className="aboutCont">
                        <div className="background2">
                            <div className="imgCont">
                                <img 
                                    className="first"
                                    alt="first" src={require("../../images/1.jpg")}
                                />
                            </div>
                            <div className="imgCont2">
                                <img 
                                    className="second"
                                    alt="second" src={require("../../images/bg2.png")}
                                />
                            </div>
                            <div className="square_cont rellax" data-rellax-speed="2">
                                <div className="square one"></div>
                            </div>
                            <div className="square_cont rellax" data-rellax-speed="-1">
                                <div className="square two"></div>
                            </div>
                        </div>
                        <div className="video">
                            <iframe src={videoSrc} />
                        </div>
                        <div className="texts">
                            <p className="about_title">ABOUT US</p>
                            <h4 className="subtitle">Bihar's largest sports fest</h4>
                            <p className="about_para">
                                Prakrida which aims to inculcate sports as a culture and make it inclusive to the lifestyle of the students is taking shape under the aegis of BIT PATNA. Bihar's largest Inter-collegiate sports festival, Prakrida has been a hit ever since its inception 7 years ago, with each year only raising the bar of quality higher. The year 2019 would mark the 7th edition of Prakrida, promises to take a new avatar and bring up the competition to a whole new level. Embrace yourself for another fun-packed, adrenaline-fueled three-days sporting extravaganza and be ready to break new grounds.<br/><br/>
                                <b>Fight hard and refuse to lose!</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container2">
                    <div className="contact_row">
                        <Grid container spacing={24}>
                            <Grid item xs={6} sm={3}>
                                <div className="contact_content">
                                    <div className="contact_info">
                                        <h4 className="contact_title">CONTACT INFO</h4>
                                        <div className="person">
                                            <h4><i style={{paddingRight: '10px'}} className="fa fa-user"></i>Preman</h4>
                                            <p>+919523222485</p>
                                        </div>
                                        <div className="person">
                                            <h4><i style={{paddingRight: '10px'}} className="fa fa-user"></i>Pawan</h4>
                                            <p>+918890792269</p>
                                        </div>
                                        <div className="person">
                                            <h4><i style={{paddingRight: '10px'}} className="fa fa-user"></i>Anamika</h4>
                                            <p>+917295944723</p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className="graph">
                                    <Graph />
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className="college">
                                    <div className="email">
                                        <h4>Email: prakrida@bitmesra.ac.in</h4>
                                    </div>
                                    <div className="location">
                                        <h2 className="location">LOCATION</h2>
                                        <h4>BV College, Near Patna Airport</h4>
                                        <h4>Patna, Bihar</h4>
                                        <h4>800014</h4>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return { colleges: state.colleges, games: state.games, reg: state.register };
}

export default connect(mapStateToProps, { fetchColleges, register, fetchGames })(Home);