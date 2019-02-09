import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { reset } from '../../actions';

import _ from 'lodash';

class Registration extends Component{
    state = { Name: '', College: '', Gender: '', City: '', Phone: '', Alt_Phone: '', Email: '', Game: '',Game2: '', Game3: '', Charge: '' ,finCharge: '', Accomodation: false, Type: {single: false, double: false, mix: false}, Type2: {single: false, double: false, mix: false}, Type3: {single: false, double: false, mix: false}, notSet: false }

    componentDidMount(){
        if(this.props.initialCharge){
            this.setState({ Charge: this.props.initialCharge });
        }
        if(this.props.initialValues){
            this.setState({ Game: this.props.initialValues['Game']});
        }
    }
    componentDidUpdate(){
        console.log(this.props.reg);
        if(this.props.reg){
            this.props.openSnack();
            setTimeout(()=>{
                this.props.reset();
            }, 4000);
        }
    }
    handleChange = (event)=>{
        this.setState({ notSet: true });
        const value = event.target.type === 'checkbox' ? event.target.checked :event.target.value;
        this.setState({ [event.target.name]: value });
        if((event.target.type === 'checkbox' && value) || this.state.Accomodation){
            this.setState({ Charge: '700'});
            this.setState({ finCharge: '700'});
            return;
        }
        if(event.target.name === 'Game'){
            switch(event.target.value){
                case 'Basketball':
                    this.setState({ Charge: '200'});
                    this.setState({ finCharge: '200'});
                    return;
                case 'Football':
                    this.setState({ Charge: '200'});
                    this.setState({ finCharge: '200'});
                    return;
                case 'Lawn Tennis':
                    this.setState({ Charge: '200'});
                    this.setState({ finCharge: '200'});
                    return;
                case 'Volley Ball':
                    this.setState({ Charge: '200'});
                    this.setState({ finCharge: '200'});
                    return;
                case 'Kabaddi':
                    this.setState({ Charge: '200'});
                    this.setState({ finCharge: '200'});
                    return;
                case 'Chess':
                    this.setState({ Charge: '100'});
                    this.setState({ finCharge: '100'});
                    return;
                case 'Table Tennis':
                    this.setState({ Charge: '100'});
                    this.setState({ finCharge: '100'});
                    return;
                case 'Badminton':
                    this.setState({ Charge: '100'});
                    this.setState({ finCharge: '100'});
                    return;
                case 'Carrom':
                    this.setState({ Charge: '100'});
                    this.setState({ finCharge: '100'});
                    return;
                case 'e-sports':
                    this.setState({ Charge: '50'});
                    this.setState({ finCharge: '50'});
                    return;
            }
        }
      };

    onAccoChange = (event)=>{
        this.setState({ Accomodation: event.target.checked });
        console.log(this.state.Accomodation);
    }
    
    handleChange2 = (name, type) => event => {
        let newState = Object.assign({}, this.state);
        newState.finCharge = newState.Charge;
        if(this.state.Accomodation){
            newState[type].single = false;
            newState[type].double = false;
            newState[type].mix = false;
        }
        newState[type][name] = event.target.checked;
        if(newState[type].single && newState[type].double && newState[type].mix){
            newState.finCharge = +newState.finCharge + 200;
        }
        else if(newState[type].single && newState[type].double && !newState[type].mix){
            newState.finCharge = +newState.finCharge + 100;
        }else if(newState[type].single && !newState[type].double && newState[type].mix){
            newState.finCharge = +newState.finCharge + 100;
        }else if(!newState[type].single && newState[type].double && newState[type].mix){
            newState.finCharge = +newState.finCharge + 100;
        }
        this.setState(newState);
        console.log(this.state);
      };


    handleSubmit = (event)=>{
        let formValues = _.pick(this.state, 'Name', 'College','Gender', 'City', 'Phone', 'Alt_Phone', 'Email', 'Accomodation');
        formValues['Charge'] = this.state.finCharge;
        formValues['Game'] = [this.state.Game];
        if(this.state.Accomodation){
            formValues['Type'] = [];
            if(this.state.Type.single){
                formValues.Type.push('Single');
            }else if(this.state.Type.double){
                formValues.Type.push('Double');
            }else if(this.state.Type.mix){
                formValues.Type.push('Mix double');
            }else{
                formValues.Type.push(null);
            }
            if(this.state.Type2.single){
                formValues.Type.push('Single');
            }else if(this.state.Type2.double){
                formValues.Type.push('Double');
            }else if(this.state.Type2.mix){
                formValues.Type.push('Mix double');
            }else{
                formValues.Type.push(null);
            }
            if(this.state.Type3.single){
                formValues.Type.push('Single');
            }else if(this.state.Type3.double){
                formValues.Type.push('Double');
            }else if(this.state.Type3.mix){
                formValues.Type.push('Mix double');
            }else{
                formValues.Type.push(null);
            }
            
            if(this.state.Game2){
                formValues.Game.push(this.state.Game2);
            }else{
                formValues.Game.push(null);
            }
            if(this.state.Game3){
                formValues.Game.push(this.state.Game3);
            }
            else{
                formValues.Game.push(null);
            }
        }else{
            formValues.Game.push(null);
            formValues.Game.push(null);
            formValues['Type'] = [];
            if(this.state.Type.single){
                formValues.Type.push('Single');
            }
            if(this.state.Type.double){
                formValues.Type.push('Double');
            }
            if(this.state.Type.mix){
                formValues.Type.push('Mix double');
            }else{
                formValues.Type.push(null);
            }
        }
        this.props.onSubmit(formValues);
        this.props.openSnack();
        this.props.close();
        console.log(formValues);
        event.preventDefault();
      };

    renderChildren = ()=>{
        this.props.colleges.map(college => {
            return (
                <MenuItem value={college.name}>{college.name}</MenuItem>
            );
        })
    }
    renderGames = ()=> {
        if(this.state.Accomodation){
            return(
                <div>
                    <div className="form_field">
                        <InputLabel htmlFor="Game-simple">Game</InputLabel>
                        <Select
                            fullWidth
                            name="Game"
                            value={this.state.Game}
                            onChange={this.handleChange}
                            inputProps={{
                              name: 'Game',
                              id: 'Game-simple',
                            }}
                            >
                            <MenuItem value="Basketball">Basketball</MenuItem>
                            <MenuItem value="Lawn Tennis">Lawn Tennis</MenuItem>
                            <MenuItem value="Volley Ball">Volley Ball</MenuItem>
                            <MenuItem value="Badminton">Badminton</MenuItem>
                            <MenuItem value="Football">Football</MenuItem>
                            <MenuItem value="Kabaddi">Kabaddi</MenuItem>
                            <MenuItem value="Table Tennis">Table Tennis</MenuItem>
                            <MenuItem value="Carrom">Carrom</MenuItem>
                            <MenuItem value="Chess">Chess</MenuItem>
                            <MenuItem value="e-sports">E-Sports</MenuItem>
                        </Select>
                        </div>
                    {this.renderType(this.state.Game, 'Type')}
                    <div className="form_field">
                        <InputLabel htmlFor="Game2-simple">Game2</InputLabel>
                        <Select
                            fullWidth
                            name="Game2"
                            value={this.state.Game2}
                            onChange={this.handleChange}
                            inputProps={{
                              name: 'Game2',
                              id: 'Game2-simple',
                            }}
                            >
                            <MenuItem value="Basketball">Basketball</MenuItem>
                            <MenuItem value="Lawn Tennis">Lawn Tennis</MenuItem>
                            <MenuItem value="Volley Ball">Volley Ball</MenuItem>
                            <MenuItem value="Badminton">Badminton</MenuItem>
                            <MenuItem value="Football">Football</MenuItem>
                            <MenuItem value="Kabaddi">Kabaddi</MenuItem>
                            <MenuItem value="Table Tennis">Table Tennis</MenuItem>
                            <MenuItem value="Carrom">Carrom</MenuItem>
                            <MenuItem value="Chess">Chess</MenuItem>
                            <MenuItem value="e-sports">E-Sports</MenuItem>
                        </Select>
                        </div>
                    {this.renderType(this.state.Game2, 'Type2')}
                    <div className="form_field">
                        <InputLabel htmlFor="Game3-simple">Game3</InputLabel>
                        <Select
                            fullWidth
                            name="Game3"
                            value={this.state.Game3}
                            onChange={this.handleChange}
                            inputProps={{
                              name: 'Game3',
                              id: 'Game3-simple',
                            }}
                            >
                            <MenuItem value="Basketball">Basketball</MenuItem>
                            <MenuItem value="Lawn Tennis">Lawn Tennis</MenuItem>
                            <MenuItem value="Volley Ball">Volley Ball</MenuItem>
                            <MenuItem value="Badminton">Badminton</MenuItem>
                            <MenuItem value="Football">Football</MenuItem>
                            <MenuItem value="Kabaddi">Kabaddi</MenuItem>
                            <MenuItem value="Table Tennis">Table Tennis</MenuItem>
                            <MenuItem value="Carrom">Carrom</MenuItem>
                            <MenuItem value="Chess">Chess</MenuItem>
                            <MenuItem value="e-sports">E-Sports</MenuItem>
                        </Select>
                        </div>
                    {this.renderType(this.state.Game3, 'Type3')}
                    </div>
                    );
        }else{
            return(
            <div>
            <div className="form_field">
                <InputLabel htmlFor="Game-simple">Game</InputLabel>
                    <Select
                        fullWidth
                        name="Game"
                        value={this.state.Game}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'Game',
                          id: 'Game-simple',
                        }}
                        >
                        <MenuItem value="Basketball">Basketball</MenuItem>
                        <MenuItem value="Lawn Tennis">Lawn Tennis</MenuItem>
                        <MenuItem value="Volley Ball">Volley Ball</MenuItem>
                        <MenuItem value="Badminton">Badminton</MenuItem>
                        <MenuItem value="Football">Football</MenuItem>
                        <MenuItem value="Kabaddi">Kabaddi</MenuItem>
                        <MenuItem value="Table Tennis">Table Tennis</MenuItem>
                        <MenuItem value="Carrom">Carrom</MenuItem>
                        <MenuItem value="Chess">Chess</MenuItem>
                        <MenuItem value="e-sports">E-Sports</MenuItem>
                    </Select>
                </div>
                    {this.renderType(this.state.Game, 'Type')}
                </div>
                
            );
        }
    };
    renderType(game, type){
        let multi = true
        if(this.state.Accomodation){
            multi = false;
        }
        if(game === 'Badminton' || game === 'Carrom' || game === 'Table Tennis'){
            /*
            return (
                <div className="form_field">
                    <InputLabel htmlFor="Type-simple">{type}</InputLabel>
                    <Select
                        multiple={multi}
                        fullWidth
                        name="Type"
                        value={this.state[type]}
                        onChange={this.handleChange}
                        inputProps={{
                          name: type,
                          id: 'Type-simple',
                        }}
                        >
                        <MenuItem value="Single">Single</MenuItem>
                        <MenuItem value="Doubles">Doubles</MenuItem>
                        <MenuItem value="Mix doubles">Mix doubles</MenuItem>
                    </Select>
                </div>
            );*/
            return (
                <div>
                    <div className="form_field">
                        <InputLabel htmlFor="single-simple">Single</InputLabel>
                        <Checkbox 
                            checked={this.state[type].single}
                            onChange={this.handleChange2('single', type)}
                            value='single'
                            fullWidth
                            inputProps={{
                              name: 'Single',
                              id: 'single-simple',
                            }}
                            />
                    </div>
                    <div className="form_field">
                        <InputLabel htmlFor="double-simple">Double</InputLabel>
                        <Checkbox 
                            checked={this.state[type].double}
                            onChange={this.handleChange2('double', type)}
                            value='double'
                            fullWidth
                            inputProps={{
                              name: 'Double',
                              id: 'double-simple',
                            }}
                            />
                    </div>
                    <div className="form_field">
                        <InputLabel htmlFor="mix-simple">Mix doubles</InputLabel>
                        <Checkbox 
                            checked={this.state[type].mix}
                            onChange={this.handleChange2('mix', type)}
                            value='mix'
                            fullWidth
                            inputProps={{
                              name: 'Mix',
                              id: 'mix-simple',
                            }}
                            />
                    </div>
                </div>
            );
        }
    }

    /*render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <div className="form_field">
                <TextField name="Name" type="text" fullWidth label="Full Name" value={this.state.Name} onChange={this.handleChange} />
              </div>
              <div className="form_field">
                  <InputLabel htmlFor="College-simple">College</InputLabel>
                  <Select
                        fullWidth
                        name="College"
                        value={this.state.College}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'College',
                          id: 'College-simple',
                        }}
                        >
                        {this.props.colleges.map(college => {
                            return (
                                <MenuItem value={college.name}>{college.name}</MenuItem>
                            );
                        })}
                    </Select>
                </div>
                <div className="form_field">
                    <InputLabel htmlFor="Acco-simple">Accomodation</InputLabel>
                    <Checkbox 
                        checked={this.state.Accomodation}
                        onChange={this.handleChange}
                        fullWidth
                        inputProps={{
                          name: 'Accomodation',
                          id: 'Acco-simple',
                        }}
                        />
                </div>
                <div className="form_field">
                    <InputLabel htmlFor="Gender-simple">Gender</InputLabel>
                    <Select
                        fullWidth
                        name="Gender"
                        value={this.state.Gender}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'Gender',
                          id: 'Gender-simple',
                        }}
                        >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </Select>
                </div>
                <div className="form_field">
                    <TextField name="City" type="text" fullWidth label="City" value={this.state.City} onChange={this.handleChange} />
                </div>
                <div className="form_field">
                    <TextField name="Phone" type="number" fullWidth label="Phone number" value={this.state.Phone} onChange={this.handleChange} />
                </div>
                <div className="form_field">
                    <TextField name="Alt_Phone" type="number" fullWidth label="Alternate Phone number" value={this.state.Alt_Phone} onChange={this.handleChange} />
                </div>
                <div className="form_field">
                    <TextField name="Email" type="text" fullWidth label="Email" value={this.state.Email} onChange={this.handleChange} />
                </div>
                
                    {this.renderGames()}
                <div className="form_field">
                    <TextField disabled name="Charge" type="number" fullWidth label="Charge" value={this.state.Charge}/>
                </div>
            <input className="submit" type="submit" value="Submit" />
          </form>
        );
    }*/
    setCollege = (College) => {
        this.setState({ College });
        this.setState({ notSet: false });
    }
    render(){
        let College = this.state.College;
        return (
          <form onSubmit={this.handleSubmit}>
              <div className="form_field">
                <TextField name="Name" type="text" fullWidth label="Full Name" value={this.state.Name} onChange={this.handleChange} />
              </div>
              <div className="form_field">
                <TextField name="College" type="text" fullWidth label="College" value={this.state.College} onChange={this.handleChange} />
                <div className="college_list">
                  {this.props.colleges.map(college => {
                        if(College === '' || !this.state.notSet){
                            return;
                        }
                        else if(college.name.toLowerCase().includes(College.toLowerCase())){
                            return (
                                <MenuItem onClick={()=>this.setCollege(college.name)} value={college.name}>{college.name}</MenuItem>
                            );
                        }else{
                            return <div></div>;
                        }
                    })}
                </div>
              </div>
                <div className="form_field">
                    <InputLabel htmlFor="Acco-simple">Accomodation</InputLabel>
                    <Checkbox 
                        checked={this.state.Accomodation}
                        onChange={this.handleChange}
                        fullWidth
                        inputProps={{
                          name: 'Accomodation',
                          id: 'Acco-simple',
                        }}
                        />
                </div>
                <div className="form_field">
                    <InputLabel htmlFor="Gender-simple">Gender</InputLabel>
                    <Select
                        fullWidth
                        name="Gender"
                        value={this.state.Gender}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'Gender',
                          id: 'Gender-simple',
                        }}
                        >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </Select>
                </div>
                <div className="form_field">
                    <TextField name="City" type="text" fullWidth label="City" value={this.state.City} onChange={this.handleChange} />
                </div>
                <div className="form_field">
                    <TextField name="Phone" type="number" fullWidth label="Phone number" value={this.state.Phone} onChange={this.handleChange} />
                </div>
                <div className="form_field">
                    <TextField name="Alt_Phone" type="number" fullWidth label="Alternate Phone number" value={this.state.Alt_Phone} onChange={this.handleChange} />
                </div>
                <div className="form_field">
                    <TextField name="Email" type="text" fullWidth label="Email" value={this.state.Email} onChange={this.handleChange} />
                </div>
                
                    {this.renderGames()}
                <div className="form_field">
                    <TextField disabled name="Charge" type="number" fullWidth label="Charge" value={this.state.finCharge}/>
                </div>
            <input disabled={this.state.Name === '' || this.state.College === '' || this.state.Gender === '' || this.state.City === '' || this.state.Phone === '' || this.state.Email === '' || this.state.Game === ''} className="submit" type="submit" value="Submit" />
          </form>
        );
    }
}
const mapStateToProps = (state)=>{
    return { reg: state.register };
}

export default connect(mapStateToProps, { reset })(Registration);