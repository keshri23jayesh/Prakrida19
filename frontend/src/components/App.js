import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Home from './HomePage/Home';
import Sidebar from './SideBar/Sidebar';
import Event from './EventsPage/Event';
import Detail from './EventsDetail/Detail';
import Accomodation from './Accomodation/Accomodation';
import Payments from './Payments/Payments';
import General from './General/General';
import Informal from './inevents/Informal';
import Team from './Team/Team';
import Sponsor from './Sponsor/Sponsor';
import Loader from '../Loader/Loader';

class App extends Component{
    state = { loaded: false };
    
    renderContent = ()=>{
        setTimeout(()=> {
            this.setState({ loaded: true })
        }, 4000);
        if(!this.state.loaded){
            return <Loader />;
        }else{
            return (
            <div>
                <Router history={history}>
                    <div>
                        <Sidebar />
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/events" exact component={Event}/>
                            <Route path="/events_detail/:id" exact component={Detail}/>
                            <Route path="/accomodation" exact component={Accomodation}/>
                            <Route path="/payments" exact component={Payments}/>
                            <Route path="/rules" exact component={General}/>
                            <Route path="/informal" exact component={Informal}/>
                            <Route path="/team" exact component={Team}/>
                            <Route path="/sponsor" exact component={Sponsor}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
        }
    }
    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
        
        /*
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Sidebar />
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/events" exact component={Event}/>
                            <Route path="/events_detail/:id" exact component={Detail}/>
                            <Route path="/accomodation" exact component={Accomodation}/>
                            <Route path="/payments" exact component={Payments}/>
                            <Route path="/rules" exact component={General}/>
                            <Route path="/informal" exact component={Informal}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );*/
}

export default App;