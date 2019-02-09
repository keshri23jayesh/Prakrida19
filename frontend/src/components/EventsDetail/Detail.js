import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoordinators,fetchColleges, register } from '../../actions';
import Particles from 'react-particles-js';
import { particles } from '../HomePage/config';
import Registration from '../RegistrationForm2/RegistrationForm2';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import './Detail.css';

class Detail extends Component{
    
    state = { modalOpen: false, currentGame: '', currentCharge: '0', snackBarOpen: false }

    onCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        this.setState({ snackBarOpen: false });
      };
    onOpenSnack = () => {
        this.setState({ snackBarOpen: true });
    };

    componentDidMount(){
        this.props.fetchColleges();
        this.props.fetchCoordinators();
        switch(this.props.match.params.id){
            case 'basketball':
                this.setState({ currentGame: 'Basketball', currentCharge: '200'});
                break;
            case 'tennis':
                this.setState({ currentGame: 'Lawn Tennis', currentCharge: '200'});
                break;
            case 'volley':
                this.setState({ currentGame: 'Volley Ball', currentCharge: '200'});
                break;
            case 'badminton':
                this.setState({ currentGame: 'Badminton', currentCharge: '100'});
                break;
            case 'football':
                this.setState({ currentGame: 'Football', currentCharge: '200'});
                break;
            case 'chess':
                this.setState({ currentGame: 'Chess', currentCharge: '100'});
                break;
            case 'kabaddi':
                this.setState({ currentGame: 'Kabaddi', currentCharge: '200'});
                break;
            case 'table':
                this.setState({ currentGame: 'Table Tennis', currentCharge: '100'});
                break;
            case 'carrom':
                this.setState({ currentGame: 'Carrom', currentCharge: '100'});
                break;
            case 'e':
                this.setState({ currentGame: 'E-sports', currentCharge: '50'});
                break;
        }
    }

    onOpenModal = () => {
        this.setState({ modalOpen: true });
    };

    onCloseModal = () => {
        this.setState({ modalOpen: false });
    };
    onSubmit = (formValues) => {
        this.props.register(formValues);
    }
    
    renderDetails(){
        switch(this.props.match.params.id){
            case 'basketball':
                return this.renderBasketball();
            case 'tennis':
                return this.renderTennis();
            case 'volley':
                return this.renderVolley();
            case 'badminton':
                return this.renderBadminton();
            case 'football':
                return this.renderFootball();
            case 'chess':
                return this.renderChess();
            case 'kabaddi':
                return this.renderKabaddi();
            case 'table':
                return this.renderTable();
            case 'carrom':
                return this.renderCarrom();
            case 'cs':
                return this.renderCS();
            case 'pubg':
                return this.renderPubg();
            case 'fifa':
                return this.renderFifa();
        }
    }
    renderCoordinators(sport){
        if(!sport){
            return <div></div>
        }
        const { Email, Email1, Name, Name1, Phone, Phone1, venue} = sport;
        return (
            <div>
                <div className="single_content">
                    <h3 className="sub">
                        Coordinators
                    </h3>
                    <ul className="single_list">
                        <li>
                            {Name}<br/>{Email}<br/>{Phone}
                        </li>
                        <li>
                            {Name1}<br/>{Email1}<br/>{Phone1}
                        </li>
                    </ul>
                </div>
                <div className="single_content">
                    <h3 className="sub">
                        Venue
                    </h3>
                    <ul className="single_list">
                        <li>
                            {venue}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
    renderPubg(){
        return (
                        <div className="single">
               <div className="header">
                    <h1 className="single_title">PUBG RULE
                    </h1>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Entry fee 50 / individual
                    </h3>

                      <ul className="single_list">
                        
                        <li>Register yourself on the official link provided on Prakrida ’19 website.</li>
                        <li>Only squads are allowed. Each squad must have a minimum of 3 players</li>. 
                        <li>PUBG will be held on both platforms: Mobile & PC Emulator.</li> 
                        <li>Entry fee per squad is INR 200. (payable at the time of in person resgistration)</li> 
                         <li>For BIT students, multiple slots are available to choose the date on which they want to play. For students of other college gaming event will take on Feb 15-17.</li> 
                        <li>After Room is active only 15 min will be given to teams to join. Futher that teams wont be able to join.</li>
                         <li>Both the platform will be played separately for avoiding any discrepancy.</li>  
                        <li>Room ID and password will be given to the leader before the match starts. Venue will be announced after registration and selection of slots.</li> 
                        <li>Unofficial teaming up and hacking are strictly prohibited. Spectators deserve the right to ban you from the game at any moment if found guilty.</li> 
                        <li>In case of any ambiguity the decision of organizers will be final and binding.</li> 
                        <li>No player will leave the room until all his/her team is dead. And team leader will take the screenshot of final team point for proof of your performance.</li> 
                        <li>Elimination map: Erangel (TPP) Semi-Finals maps and stages will be disclosed soon.</li>
                        <li>10 squads will be playing in each PUBG room. Top 2 squads will be selected for further rounds.</li> 
                        <li>MVP of tournament will be awarded based on total kills throughout the tournament.</li>
                        <li>Internet connections is a part of your consideration. Organizing team will not be supporting in this case. Any case of technical problems (lagging, disconnections etc.) from your side will not be entertained.</li> 
                        <li>Final team ranking will be decided based on net score obtained after the match.</li> 
                        <li>For any problem please contact the game coordinators.</li>
                         <li>Points table for each match will be as followed- </li>
                        </ul>
                         <ul className="single_list">
                          <li>TEAM RANK--POINTS</li>
                            <li>#1--120</li>
                            <li>#2--100</li>
                            <li>#3--80</li>
                            <li>#4--70</li>
                            <li>#5--60</li>
                            <li>#6--50</li>
                            <li>#7--40</li>
                            <li>#8--30</li>
                            <li>#9--20</li>
                            <li>#10--10</li>
                            <li>1 KILL= 3 POINTS</li>
  



                      </ul>

                    <div className="single_foot">
                        <a href="https://goo.gl/forms/DNpJq5ehhVK9mWC22"> https://goo.gl/forms/DNpJq5ehhVK9mWC22</a>
                    </div>
               </div>
           </div>
        );
    }
    renderFifa(){
        return (
                        <div className="single">
               <div className="header">
                    <h1 className="single_title">FIFA 19 Rules</h1>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Entry fee 100 / individual
                    </h3>

                      <ul className="single_list">
                      <li>Only individual can participate in the FIFA gaming event.</li>
                        <li>FIFA 19 will be played throught the event.</li>
                        <li>1st will be of elimination round and from there top 16 player will play quarter and then top 4 will play semi and then the finals.</li>
                        <li>Only international teams has to be selected during the games.</li>
                        <li>Timing for eliminations will of 5 min half time. For quarters 6 min half time. For semi 8 min half time BO3. For finals 10 min BO3.</li>
                        <li>Players has to bring his own console: joystick or keyboard.</li> 

                      </ul>

                    <div className="single_foot">
                        <a href="https://goo.gl/forms/nX12gMB2FhY771A83"> https://goo.gl/forms/nX12gMB2FhY771A83</a>
                    </div>
               </div>
           </div>
        );
    }
    renderCS(){
        return(
        <div className="single">
               <div className="header">
                    <h1 className="single_title">Counter-Strike:Global Offensive Warzone</h1>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Entry Fee-500/team
                    </h3>
                    <ul className="single_list">
                                          <li>The tournament is divided into 2 stages i.e-</li>
                        <li>1. Minor stage</li>
                        <li>2. Major stage</li>

                                            </ul>

                        <ul className="single_list">
                        <li>Minor stage-</li>
                        <li>All the teams taking part in the tournament are eligible to play this stage and qualify for the major stage.</li>
                        <li>All the matches in this stage will be BO1.</li>
                        </ul>

                        <ul className="single_list">
                        <li>Major stage-</li>
                        <li>Only the teams qualifying the minor stage are eligible.</li>
                        <li>This stage may include knockout and BO3 matches.</li>
                        <li>The team coming at the top of the major stage will be our tournament champions.</li>
                        </ul>

                        <ul className="single_list">
                        <li>Choice of side-</li>
                        <li>A knife round will be played to determine the side for the auto-picked maps in BO1 & BO3 matches.</li>
                        <li>For the team picked maps of BO3, the team picking the map will also pick the side.</li>
                        </ul>

                        <ul className="single_list">
                        <li>Knife round rule-</li>
                        <li>All players are only eligible to buy kevlar vest and decoys.</li>
                        <li>All players need to gather at a particular site or location and can only come through one passage i.e. no backstabbing.</li>
                        <li>Any violation of the above rule by any player can cost the team to lose the knife round and the other team gets to pick the side.</li>

                        <li>Any intruption during an ongoing match would not be entertained and it may cause your team round losses.</li>
                        <li>Authority is only responsible for bad server behaviour and not for the in-game palyer mistakes like wrong buys. No rounds will be restarted for such reasons.</li>
                        <li>All players are required to behave properly with the authority members, other team players.</li>

                        </ul>

                        <ul className="single_list">
                        <li>Ban system for BO1-</li>
                        <li>Both captains will be ban 1 map alternatively and the left out map will be auto-picked. Who ban 1st will be decided by coin toss.</li>
                        </ul>

                        <ul className="single_list">
                        <li>Pick/ban system for BO3-</li>
                        <li>Map 1- The first team will ban 1 map and then second team will chose their choice of map</li>
                        <li>Map 2- The second team will ban 1 map and the first team will select the choice of map.</li>
                        <li>Map 3- Then the remaining maps will be banned alternatively & the last remaining map will be auto-picked.</li>
                        </ul>

                        <ul className="single_list">
                        <li>Server settings-</li>
                        <li>The following game setting will be used</li>
                          <li>mp_startmoney 800</li>
                          <li>mp_roundtime 1.92</li>
                          <li>mp_freezetime 15</li>
                          <li>mp_maxrounds 30</li>
                          <li>mp_cytimer 40</li>
                          <li>sv_pausable 3</li>
                        <li>Settings for extra time-</li>
                          <li>mp_maxrounds 6</li>
                          <li>mp_startmoney 10000</li>
                        </ul>

                        <ul className="single_list">
                        <li>Map pool-</li>
                        <li>Dust2, Mirage, Inferno, Cache, Train, Overpass, Nuke</li>
                        </ul>

                        <ul className="single_list">
                        <li>Registration guidelines</li>
                        <li>1. Any player currently enrolled with any college is invited to take part in the tournament.</li>
                        <li>2. Registration is done on team basis rather than player basis and multiple teams from same college are permitted.</li>
                        <li>3. No active CS:GO steam account is needed as the tournament will played on CS:GO Warzone.</li>
                        <li>4. All the players are requested to bring their own systems and needed accessories. In case of need, systems and accessories will be provided but the authority do not take the responsibility.</li>
                        <li>5.Rgistration can be done online by team captain and the registration fee of 500 per team ought to be paid to the admin at the start of the tournament.</li>
                        <li>6. Each team must have 5 players and no stand-in players.</li>
                        <li>7.Team captain are requested to update the admin befourhand and provide full, details on players.</li>
                        </ul>



                    <div className="single_foot">
                       CS GO WARZONE - <a href="https://goo.gl/forms/ysSs9rR08Frddmn93">https://goo.gl/forms/ysSs9rR08Frddmn93</a>
                    </div>
               </div>
           </div>
            );
    }
    renderBasketball(){
       return (
            <div className="single">
               <div className="header">
                    <h1 className="single_title">BASKETBALL
                        <span className="close_icon">
                            <Link to={'/events'}><i className="fa fa-times"></i></Link>
                        </span>
                   </h1>
                   <h4>₹{this.state.currentCharge}</h4>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        BASKETBALL RULES
                    </h3>
                    <ul className="single_list">
                        <li>
                            Maximum team limit is 12 players and a coach. 
                        </li>
                        <li>
                            Each player is strictly required to bring and deposit their PRAKRIDA ID cards at the table in order to play the match.
                        </li>
                        <li>
                            A team member is only entitled to play when his name has been entered on the score-sheet before the start of the game and as long as he has neither been disqualified nor committed five (5) fouls.
                        </li>
                        <li>
                            Each team member shall wear a shirt numbered on the front and back with plain numbers, of a solid color contrasting with the color of the shirt. The numbers should be clearly visible.
                        </li>
                        <li>
                            Any equipment that is designed to increase a player’s height or reach or in any other way gives an unfair advantage is not permitted. Also, any equipment that can harm other players is also not allowed
                        </li>
                        <li>
                            The captain should immediately, at the end of the game, inform the referee if his team is protesting against the result of the game and sign the score sheet in the space marked “Captain’s signature” in case of a protest. 
                        </li>
                    </ul>
                    <div className="single_foot">
                        *NOTE: A team is supposed to report at the respective court 20 minutes before their match. The match will not be rescheduled in case of a common player in more than 1 sport.
                    </div>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Playing Time, tied score and extra periods
                    </h3>
                    <ul className="single_list">
                        <li>
                            The game will consist of four (4) periods of ten (10) minutes.
                        </li>
                        <li>
                             There shall be an interval from play of twenty (20) minutes before the game is scheduled to begin.
                        </li>
                        <li>
                            There shall be intervals in play of two (2) minutes between the first and second period (first half), between the third and fourth period (second half) and before each extra period.
                        </li>
                        <li>
                            There shall be a half-time interval in play of ten (10) minutes.
                        </li>
                        <li>
                             If the score is tied at the end of playing time for the fourth period, the game shall continue with as many extra periods of five (5) minutes as necessary to break the tie.
                        </li>
                        <li>
                             If a foul is committed when or just before the game clock signal sounds for the end of playing time, any eventual free throw(s) shall be administered after the end of the playing time. 
                        </li>
                        <li>
                              If an extra period is required as a result of this free throw(s) then all fouls that are committed after the end of playing time shall be considered to have occurred during an interval of play and the free throws shall be administered before the beginning of the extra period. 
                        </li>
                        <li>
                             The match starts with a jump ball, players of the same team may not occupy adjacent positions. If the opponent had occupied one of those positions, jump ball may be cancelled and redone if the referee finds it incorrect. 
                        </li>
                        <li>
                             Alternating possession procedure applies to all jump ball situations (except in the beginning). The teams will get alternate possession of the ball for a throw-in. 
                        </li>
                        <li>
                             The ball is played with hand(s) only. It can be passed, tapped, dribbled, rolled in any direction subject to the restriction of some rules. 
                        </li>
                        <li>
                             A player shall not run with the ball, deliberately kick it, block it with any part of the leg or strike it with his/her fist. However if the touch with any part of the body, other than the hands, is accidental then it may not be given as a violation.
                        </li>
                        <li>
                             A goal is made when a live ball enters the basket from above and remains within or passes through the basket. The ball is considered to be within the basket when the slightest part of the ball is within and below the level of the ring.
                        </li>
                    </ul>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Points for various goals:
                    </h3>
                    <ul className="single_list">
                        <li>
                            Free Throw-1 pt.
                        </li>
                        <li>
                             A field goal from 2 pt field goal area-2 pts.
                        </li>
                        <li>
                            A field goal from 3 pt field goal area-3 pts.
                        </li>
                        <li>
                            A player taking a throw-in should not take more than 5 seconds and should not cross or touch the boundary lines before making the pass.
                        </li>
                    </ul>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Rules for Time Out: 

                    </h3>
                    <ul className="single_list">
                        <li>
                             Each time-out shall last for one (1) minute.
                        </li>
                        <li>
                              A time-out may be granted during a time-out opportunity. 
                        </li>
                        <li>
                            A time-out opportunity begins when: o For both teams: The ball becomes dead, the game clock is stopped and the official has ended his communication with the scorer’s table. 
                        </li>
                        <li>
                           For both teams: The ball becomes dead following a successful last or only free throw. 
                        </li>
                        <li>
                           For the non-scoring team: A field goal is scored.
                        </li>
                        <li>
                          A time-out opportunity ends when the ball is at the disposal of a player for a throw-in or for a first or only free throw. 
                        </li>
                        <li>
                           Two (2) time-outs may be granted to each team at any time during the first half; three (3) at any time during the second half and one (1) during each extra period. Unused time-outs may not be carried over to the next half or extra period.
                        </li>
                        <li>
                           A time-out shall not be permitted to the scoring team when the game clock shows 2:00 minutes or less of the fourth period and of each extra period and, following a successful field goal unless an official has stopped the game. 
                        </li>
                    </ul>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Game lost by forfeit:
                    </h3>
                    <ul className="single_list">
                        <li>
                             If the team is unable to field five players till 15 minutes after the scheduled starting time of the game or if the team refuses to play the match then the match is awarded to the opponent by a 20-0 win margin. 
                        </li>
                        <li>
                              When the ball goes out of bounds then it will be awarded for throw in to the opponent team to the team whose member last touched the ball.
                        </li>
                        <li>
                            A person cannot dribble with both hands and dribble again after once he has stopped dribbling.
                        </li>
                    </ul>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Travelling:
                    </h3>
                    <ul className="single_list">
                        <li>
                             A player cannot run holding the ball, cannot move his both feet while holding the ball, only the foot other than the pivot can be moved.
                        </li>
                        <li>
                              Three seconds: A player cannot be in the restricted red area for more than 3 seconds.
                        </li>
                        <li>
                            8 seconds: A team must take the ball to its front court within 8 seconds.
                        </li>
                        <li>
                            24 seconds: A team should take a shot attempt within 24 seconds at least touching the ring. 
                        </li>
                        <li>
                            A live ball returned to the back-court should be considered a violation. 
                        </li>
                        <li>
                            A player should not disturb the shot attempted ball in its downward motion except when there is no possibility of the ball entering the basket.
                        </li>
                        <li>
                            No shouldering, holding, pushing, tripping, or striking in any way to an opponent shall be allowed.
                        </li>
                    </ul>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Unsportsmanlike foul: 
                    </h3>
                    <ul className="single_list">
                        <li>
                             Two such fouls will surely disqualify the player or even the first one. Free throws are awarded and also the throw in if it is disqualifying foul.
                        </li>
                    </ul>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Technical foul:
                    </h3>
                    <ul className="single_list">
                        <li>
                             Two (2) free throws shall be awarded to the opponents, followed by:<br/>
                             A throw-in at the center line extended, opposite the scorer’s table.<br/>
                             A jump ball in the center circle to start the first period. 
                        </li>
                    </ul>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Five fouls:
                    </h3>
                    <ul className="single_list">
                        <li>
                             Any player committing five fouls whether personal or technical will have to leave the court within 30 seconds after being informed by the officials. Team fouls:<br/>
                             A team is in a team foul penalty situation when it has committed four (4) team fouls in a   period. All the subsequent fouls will award the opponents (offending) with free throws. If the foul is on defending team then simple throw in will be awarded.
                        </li>
                    </ul>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Free Throws:
                    </h3>
                    <ul className="single_list">
                        <li>
                             A free throw is awarded in case of a foul against a player in shooting action (who is Attempting shot), or in case of technical or unsportsmanlike fouls.
                        </li>
                        <li>
                             Any new rule or a change in rules will be informed to the teams by the event coordinators prior to the beginning of the match
                        </li>
                        <li>
                             In any case, the decision of the referee and the officials shall be considered final. Rules for tie-breakers:<br/>
                             If two teams have same points in the first round then the head-tohead winner of the two teams will be considered eligible for the next round.
                             <br/>
                              If all the three teams in the group have the same points then score difference of group matches will be calculated. If a team wins one match by 50-30 and losses other by 18-40 then its score difference will be (50+18)-(30+40) =-2. The team with the highest positive score difference will qualify for the next round. 
                              <br/>
                               If the two teams have the same score difference and greater than the third one then head-to-head winner of the two teams will be considered eligible for the next round.<br/>
                               If all the three teams have the same score difference then the winner will be decided by lottery.
                        </li>
                    </ul>
                     {this.renderCoordinators(this.props.coordinator.find(sport => sport.game === 'BASKETBALL'))}
                   <div className="single_foot">
                        **Rules &#38; schedule are subject to change in the spirit of the game &#38; festival. The final decision rests with the PRAKRIDA organizing team.**
                    </div>
               </div>
           </div>
       ); 
    }
    renderTennis(){
       return (
           <div className="single">
               <div className="header">
                    <h1 className="single_title">LAWN TENNIS
                        <span className="close_icon">
                            <Link to={'/events'}><i className="fa fa-times"></i></Link>
                        </span>
                   </h1>
                   <h4>₹{this.state.currentCharge}</h4>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        LAWN TENNIS RULES
                    </h3>
                    <ul className="single_list">
                        <li>
                            Teams must declare the player beforehand.
                        </li>
                        <li>
                            Each individual can participate in one singles and/or one doubles match.
                        </li>
                        <li>
                            AITA rules will be followed throughout the tournament.
                        </li>
                        <li>
                            Each set consists of 6 games. To win a match the player must win 2 out of 3 sets
                        </li>
                        <li>
                            No request will be entertained on change of slots provided to the team/player.
                        </li>
                        <li>
                            Physical absence during the given slot would result in disqualification.
                        </li>
                        <li>
                            The tournament will be conducted on hard court and HEAD balls be used
                        throughout the tournament.
                        </li>
                        <li>
                            The decision of the umpire will be final and all players must abide by it.
                        </li>

                    </ul>
                    {this.renderCoordinators(this.props.coordinator.find(sport => sport.game === 'LAWN TENNIS'))}
                    <div className="single_foot">
                        *NOTE: A team is supposed to report at the respective court 20 minutes before their match. The match will not be rescheduled in case of a common player in more than 1 sport.
                    </div>
               </div> 
           </div>
       );  
    }
    renderVolley(){
       return (
       <div className="single">
               <div className="header">
                    <h1 className="single_title">VOLLEYBALL
                        <span className="close_icon">
                            <Link to={'/events'}><i className="fa fa-times"></i></Link>
                        </span>
                   </h1>
                    <h4>₹{this.state.currentCharge}</h4>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        VOLLEYBALL RULES
                    </h3>
                    <ul className="single_list">
                        <li> A team can consist of a maximum of 12 and a minimum of 06 players with their respective coach. </li>
                        <li> Each player should carry (at all times)- a. The original college/club ID Card bearing the photograph of the player. b. An original Identity Proof recognized by the Government bearing photograph. (e.g.- Adhaar, DL, Voter Card, PAN Card) c. 3 recent passport-sized photographs. </li>
                        <li>Inability to produce any of the documents enlisted above during entry or whenever asked for will result in disqualification of the player. No excuses will be entertained whatsoever. </li>
                        <li> During a match, each player should be wearing:
                         a. Normal running shoes
                         b. Knee pads
                         c. Team jersey and shorts 
                         </li>
                        <li> Each team should carry their own balls for practice. No balls will be provided for the same.</li> 
                        <li> Inability to reach the match venue (volleyball court for boys and girls, BITP) on time (as that mentioned in the fixtures) will result in disqualification of the entire team. </li>
                        <li> Use of any kind of expletives or misbehaviour with anyone or challenging the decision of any of the officials/PRAKRIDA member by the players or spectators at any point of time will result in disqualification of his respective team. </li>
                        <li> Use of a fake ID card for/by any player will result in disqualification of the entire team followed by a ban of 2 years from PRAKRIDA. Legal action shall be initiated against the captain if deemed necessary by the authorities.</li>
                        <li> In case of any dispute, the decision of the volleyball Coordinator, PRAKRIDA 2018 will be final and binding.</li>
                    </ul>
                    <div className="single_foot">
                        *NOTE: A team is supposed to report at the respective court 20 minutes before their match. The match will not be rescheduled in case of a common player in more than 1 sport.
                    </div>
                    <div className="single_content">
                        <h3 className="sub">
                            Rules for volleyball
                        </h3>
                    <ul className="single_list">
                    <li> It is a league-cum-knockout tournament.</li>
                    <li> Matches will be played as per FIVB (Federation of International VolleyBall) rules. </li>
                    <li> The number of substitutions allowed = 6 per set. </li>
                    <li> League matches will be including 3 sets (25-25-15). </li>
                    <li> The points for the league stages will be evaluated as per the following rulesi. Match won = +2, Match lost = 0. In case of any violation of rules and dispute between the teams will lead to disqualification and each team will be given +1 point ii. Semi-finals and finals will be of 5 sets (25-25-25-25-15). </li>
                    </ul>
                    {this.renderCoordinators(this.props.coordinator.find(sport => sport.game === 'VOLLEYBALL'))}
                    </div>
               </div>
       </div>
       ); 
    }
    renderBadminton(){
        return (
            <div className="single">
               <div className="header">
                    <h1 className="single_title">BADMINTON RULES (SINGLES &amp; DOUBLES)
                        <span className="close_icon">
                            <Link to={'/events'}><i className="fa fa-times"></i></Link>
                        </span>
                   </h1>
                    <h4>₹{this.state.currentCharge}</h4>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        Scoring System
                    </h3>
                    <ul className="single_list">
                        <li>A League match consists of the best of 1 games of 21 points in Every time there is a serve – there is a point scored.</li>
                        <li>The side winning a rally adds a point to its score. At 20 all, the side which gains a 2 point lead first, wins that game. At 29 all, the side scoring the 30th point, wins that game.</li>
                        <li>The side winning a game serves first in the next game.</li>
                        <li>In knock out matches there will be three sets of 15points each . </li>
                    </ul>
                </div>
                <div className="single_content">
                    <h3 className="sub">
                        Interval and Change of End
                    </h3>
                    <ul className="single_list">
                        <li> At the beginning of the game (0-0) and when the server’s score is even, the server serves from the right service court.</li>
                        <li> When the server’s score is odd, the server serves from the left service court.If the server wins a rally, the server scores a point and then serves again from the alternate service court.</li>
                        <li> If the receiver wins a rally, the receiver scores a point and becomes the new server. </li>
                        <li> They serve from the appropriate service court – left if their score is odd, and right if it is even.  </li>
                    </ul>
                </div>
                <div className="single_content">
                    <h3 className="sub">
                        Doubles
                    </h3>
                    <ul className="single_list">
                        <li> A side has only one ‘set’.The service passes consecutively to the players as shown in the diagram. </li>
                        <li>At the beginning of the game and when the score is even, the server serves from the right service court. When it is odd, the server serves from the left court. </li>
                        <li>If the serving side wins a rally, the serving side scores a point and the same server serves again from the alternate service court. </li>
                        <li>If the receiving side wins a rally, the receiving side scores a point. The receiving side becomes the new serving side.</li>
                        <li>The players do not change their respective service courts until they win a point when their side is serving.</li>
                    </ul>
                    {this.renderCoordinators(this.props.coordinator.find(sport => sport.game === 'BADMINTON'))}
                </div>
           </div>
       );  
    }
    renderFootball(){
       return (
            <div className="single">
               <div className="header">
                    <h1 className="single_title">FOOTBALL
                        <span className="close_icon">
                            <Link to={'/events'}><i className="fa fa-times"></i></Link>
                        </span>
                   </h1>
                    <h4>₹{this.state.currentCharge}</h4>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        FOOTBALL RULES
                    </h3>
                    <ul className="single_list">
                    <li> 11-a-side (11 players including goalkeeper) Football event as a part of PRAKRIDA'19.</li>
                    <li> Each team will have a maximum of 16 registered players.</li>
                    <li>The Venue is confirmed as BIT PATNA main ground.</li>
                    <li>Teams should arrive at the indicated premises not later than 15 minutes before the start of the match. If a team arrives for a match later than the prescribed time limit, the present team will be awarded a 3-0 result victory over the absent team.</li>
                    <li> If both the teams fail to arrive at the field before prescribed time of their match and time limit, the match will be declared as a draw with 0-0 score, henceforth given 1 point to each team.</li>
                    <li>Teams will receive 3 points for a win, 1 point for a draw and no points for a loss.</li>
                    <li> The number of substitutions is 3, the process of substitutions and the change of a goalkeeper must be agreed upon with the referee. </li>
                    <li> Duration of matches :
                            ∙ Group Stages: 50 minutes( 2*25 minutes) 
                            ∙ Semifinal: 60 minutes( 2*30 minutes) 
                            ∙ Final: 70 minutes( 2*35 minutes) followed by 20 minutes extra time(2*10 minutes) A break of     5 minutes will be given in between two halves.</li>
                    <li> Group placing will be decided by points gained, followed by goal difference (goals scored subtracted by goals against), followed by goals scored, followed by head to head, followed by a toss. </li>
                    <li> Drawn games in the knockout stages will be decided by 5-penalty kicks to each team followed by sudden death. In the final, if the game ends in a tie after the completion of the two halves, extra time is played by 2 halves of 10 minutes each. If there is no winner after the extra time, the teams follow a 5-penalty kick procedure followed by sudden death.</li>

                    <li> The decision of the referee in all matters pertaining to the playing rules of an individual game is final. The referees along with the organizers also decide on the winners of the prizes available and this decision is final.</li>
                     <li> The organizers reserve the right to forfeit games or disqualify teams from the Competition as a whole in front of incidences of indiscipline, poor sportsmanship or behaviors threatening the continuation of the tournament from either players or supporters.</li>
                    <li> 13. Normal rules of FIFA apply for whole of the tournament.</li>

                    </ul>
                    <div className="single_foot">
                        *NOTE: A team is supposed to report at the respective court 20 minutes before their match. The match will not be rescheduled in case of a common player in more than 1 sport.
                    </div>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        DISCIPLINARY REGULATIONS
                    </h3>
                    <ul className="single_list">
                    <li>A player Red carded during a match will be suspended for the entire current match and will not be allowed to play the following match. </li>

                    <li>A player sent off for serious foul play, foul and abusive language or repeated serious offences to the game may be suspended for the rest of the tournament. </li>


                    <li>The Usage of Yellow and Red Cards :</li>

                    <li>Yellow card :The referee shows the yellow card to a player who demonstrates unsportsmanlike behavior, reacts in a bad way with words or gestures, violates the rule of the game, delays the recommencement of the game or abandons or enters the ground without the referee's permission. </li>

                    <li>Red card :The referee shows a red card and subsequently expels an athlete from the competition ground if he is playing in an unsportsmanlike manner, is demonstrating unbefitting behavior, hits an opponent outside the scope of play, stops the ball with his hands and obstructs the opposing team or gets a second yellow card in the same game.</li>

                    </ul>
                    {this.renderCoordinators(this.props.coordinator.find(sport => sport.game === 'FOOTBALL'))}
                    <div className="single_foot">
                        *NOTE: A team is supposed to report at the respective court 20 minutes before their match. The match will not be rescheduled in case of a common player in more than 1 sport.
                    </div>
               </div>

               
           </div>
       ); 
    }
    renderChess(){
       return (
            <div className="single">
               <div className="header">
                    <h1 className="single_title">CHESS
                        <span className="close_icon">
                            <Link to={'/events'}><i className="fa fa-times"></i></Link>
                        </span>
                   </h1>
                    <h4>₹{this.state.currentCharge}</h4>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        CHESS RULES
                    </h3>
                    <ul className="single_list">
                    <li>The game will be played according to the rules and laws laid down by FIDE. </li>
                    <li> The tournament will be played according to the Swiss system. </li>
                    <li> Matches- 30 minutes per player for the whole game with an increment of 30 seconds per move starting from move 1.</li>
                    <li> Each player will play 6 matches. Win – 1 point, Loss – 0 point, Tie – 0.5 point. The top 4 players after the 6 matches will qualify for the semi-finals and from there 2 players will qualify for the Finals.</li>
                    <li>The arbiter's decision shall be final and binding</li>
                    </ul>
                    {this.renderCoordinators(this.props.coordinator.find(sport => sport.game === 'CHESS'))}
                   <div className="single_foot">
                        *NOTE: A team is supposed to report at the respective court 20 minutes before their match. The match will not be rescheduled in case of a common player in more than 1 sport.
                    </div>
               </div>
       </div>
       ); 
    }
    renderKabaddi(){
       return (
            <div className="single">
               <div className="header">
                    <h1 className="single_title">KABADDI
                        <span className="close_icon">
                            <Link to={'/events'}><i className="fa fa-times"></i></Link>
                        </span>
                   </h1>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        KABADDI RULES
                    </h3>
                    <ul className="single_list">
                    <li>The team that wins the toss shall have the choice of the court or the raid and the team that looses the toss shall have the remaining choice. In the second half, the court shall be changed and the team, which did not, opted for raid shall send their raider first. The game in the second half shall continue with the same number of players, as it was at the end of the first half. </li>
                    <li> A player shall be out if any part of his body touches the ground outside the boundary but during the struggle a player shall not be out if any part of his body touches the ground outside the boundary by keeping contact of the playfield. The portion of contact must be inside the boundary. </li>
                    <li> When the struggle begins, the play field includes the lobbies. During the struggle and after the struggle in the same raid, the players involved in the struggle can use the lobbies to enter their respective courts. This rule will only be applicable in the anti’s court.</li>
                    <li> A raider shall continue to chant “KABADDI” as the approved cant. If he is not keeping the proper approved cant in the opponent’s court, he shall be ordered back and the opponent will be given one technical point and chance to raid. Under such circumstances, he shall not be pursued.</li>
                     <li> A raider must start his cant before he touches the opponent’s court. If he starts the cant late, he shall be ordered back by the Umpire or Referee and the opponent will be given one technical point &amp; a chance to raid.</li> 
                    <li>If a raider goes out of turn, the Umpire or Referee shall order him to go back and a technical point will be given to opponent team.</li>


                                        </ul>
                   {this.renderCoordinators(this.props.coordinator.find(sport => sport.game === 'KABBADI'))}
                                        <div className="single_foot">
                                            *NOTE: A team is supposed to report at the respective court 20 minutes before their match. The match will not be rescheduled in case of a common player in more than 1 sport.
                                        </div>
               </div>

               
           </div>
       ); 
    }
    renderTable(){
       return (
             <div className="single">
               <div className="header">
                    <h1 className="single_title">TABLE TENNIS
                        <span className="close_icon">
                            <Link to={'/events'}><i className="fa fa-times"></i></Link>
                        </span>
                   </h1>
                    <h4>₹{this.state.currentCharge}</h4>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        General guidelines
                    </h3>
                    <ul className="single_list">
                        <li> Matches would be played in knockout fashion </li>
                        <li> Final decision regarding any dispute will rest with PRAKRIDA organizing team Scoring </li>
                        <li> A match is played best 3 of 5 games (or 4/7 or 5/9). For each game, the first player to reach 11 points wins that game, however a game must be won by at least a two point margin.</li>
                        <li> The edges of the table are part of the legal table surface, but not the sides. Flow of the match </li>
                        <li> Each player serves two points in a row and then switch server. However, if a score of 10- 10 is reached in any game, then each server serves only one point and then the server is switched. After each game, the players switch side of the table. In the final game (ie 5th game), the players switch side again after either player reaches 5 points.</li>
                        <li>The decision of the umpire will be final and all players must abide by it.</li>
                    </ul>     
               
               </div>

               <div className="single_content">
                    <h3 className="sub">
                        Legal serve
                    </h3>
                        <ul className="single_list">
                          <li> The ball must rest on an open hand palm. Then it must be tossed up at least 6 inches and struck so the ball first bounces on the server's side and then the opponent's side.</li>
                          <li> If the serve is legal except that it touches the net, it is called a let serve. Let serves are not scored and are reserved.</li>
                        </ul>
               
               </div>
            
               <div className="single_content">
                    <h3 className="sub">
                        The order of the play
                    </h3>
                    <ul className="single_list">
                      <li> In singles, the server shall first make a service, the receiver shall then make a return and thereafter server and receiver alternately shall each make a return. </li>
                      <li> In doubles, the server shall first make a service, the receiver shall then make a return, the partner of the server shall then make a return, the partner of the receiver shall then make a return and thereafter each player in turn in that sequence shall make a return.</li>
                    </ul>
                    
               </div>

               <div className="single_content">
                    <h3 className="sub">
                        A POINT 
                    </h3>
                    <ul className="single_list">
                     <li> if an opponent fails to make a correct service</li>
                     <li> if an opponent fails to make a correct return</li>
                     <li >if, after he or she has made a service or a return, the ball touches anything other than the net assembly before being struck by an opponent </li>
                     <li>if the ball passes over his or her court or beyond his or her end line without touching his or her court, after being struck by an opponent </li>
                     <li> if an opponent obstructs the ball</li>
                     <li> if an opponent deliberately strikes the ball twice in succession</li>
                     <li> if an opponent, or anything an opponent wears or carries, moves the playing surface</li>
                     <li> if an opponent, or anything an opponent wears or carries, touches the net assembly</li>
                     <li> if an opponent's free hand touches the playing surface</li>
                     <li> if a doubles opponent strikes the ball out of the sequence established by the first server and first receiver</li>
                    </ul>
                    {this.renderCoordinators(this.props.coordinator.find(sport => sport.game === 'TABLE TENNIS'))}
               </div>
               
           </div>
       ); 
    }
    renderCarrom(){
       return (
            <div className="single">
               <div className="header">
                    <h1 className="single_title">CARROM
                        <span className="close_icon">
                            <Link to={'/events'}><i className="fa fa-times"></i></Link>
                        </span>
                   </h1>
                    <h4>₹{this.state.currentCharge}</h4>
               </div>
               <div className="single_content">
                    <h3 className="sub">
                        CARROM RULES
                    </h3>
                    <ul className="single_list">
                        <li> 
                            The player who completes pocketing all his C/m first wins the board.
                        </li>
                        <li> The value/points are as follows:

                                    i) Queen : 3 points up to and including 21 points.
                                    ii) C/m : 1 point each.</li>

                        <li>
                        The number of C/m of the opponent on the C/B shall be the points                  gained by that player in that board.
                        </li> 
                                                              
                        <li> 
                        The player is entitled to be credited with the value of the Queen, only if he wins the board.
                        </li>

                        <li> 
                        The player who loses the board is not credited with the value of the Queen, even if he has pocketed and covered the Queen.
                        </li>
                           
                        <li>
                        The player loses the advantage of getting the credit of an additional 3 points for covering the Queen, once he has reached the score of 22 points.
                        </li>

                        <li>
                        The maximum number of points that can be scored in a board is 12 only. Any Due and/or penalty C/m shall automatically be written off.
                        </li>

                        <li> 
                        A game shall be of 25 points or eight boards. The player who reaches 25 points first or leads at the conclusion of the eighth board shall be the winner of the game.
                        </li>
                           
                        <li> 
                        Up to and including the pre-quarter final rounds, each game shall be decided on the basis of eight boards. In case the score is equal at the end of the eighth board, an extra board shall be played to decide the winner. Before the extra board, there shall be a toss to choose break only.
                        </li>

                        <li>
                        All matches shall be decided only by the best of three games.
                        </li>

                    </ul>
                    {this.renderCoordinators(this.props.coordinator.find(sport => sport.game === 'CARROM'))}
                    <div className="single_foot">
                        *NOTE: A team is supposed to report at the respective court 20 minutes before their match. The match will not be rescheduled in case of a common player in more than 1 sport.
                    </div>
               </div>

               
           </div>
           );
    }
    renderButton(){
        let { id } = this.props.match.params;
        let url = ''
        if(id === 'cs'){
            return (
                <div>
                    <div className="btn_cont det_btn">
                            <span class="mas">REGISTER</span>
                            <a 
                                target="_blank" href="https://goo.gl/forms/ysSs9rR08Frddmn93" className="btn ">REGISTER</a>
                        </div>
                </div>
            );
        }else if(id === 'pubg'){
            return (
                <div>
                    <div className="btn_cont det_btn">
                            <span class="mas">REGISTER</span>
                            <a 
                                target="_blank" href="https://goo.gl/forms/DNpJq5ehhVK9mWC22" className="btn ">REGISTER</a>
                        </div>
                </div>
            );
        }else if(id === 'fifa'){
            return (
                <div>
                    <div className="btn_cont det_btn">
                            <span class="mas">REGISTER</span>
                            <a 
                                target="_blank" href="https://goo.gl/forms/nX12gMB2FhY771A83" className="btn ">REGISTER</a>
                        </div>
                </div>
            );
        }else{
        return (
            <div>
                <div className="btn_cont det_btn" onClick={this.onOpenModal}>
                        <span class="mas">REGISTER</span>
                        <button className="btn ">REGISTER</button>
                    </div>
            </div>
        )}
    }
    render(){
        const particlesParams = particles; 
        const coordinator = console.log(this.props.coordinator);
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
                            initialCharge={this.state.currentCharge}
                            initialValues={{'Game': this.state.currentGame}}
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
                      onClick={this.onCloseModal}
                    >
                      <CloseIcon />
                    </IconButton>,
                  ]}
                />
                <div className="detail_container">
                    <Particles
                            className="particles"
                            params={particlesParams}
                        />
                    <div className="detail_contents">{this.renderDetails()}</div>
                    
                </div>
                {this.renderButton()}
                
            </div>
        );
    }
}


const mapStateToProps = ({ coordinator, colleges })=>{
    return { coordinator, colleges };
}

export default connect(mapStateToProps, { fetchColleges, fetchCoordinators, register })(Detail);