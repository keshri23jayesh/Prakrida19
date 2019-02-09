import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './RegistrationForm.css';

class RegistrationForm extends React.Component{
    state = {charge: '0'};
    componentDidMount(){
        console.log(this.props.games);
        if(this.props.initialCharge){
            this.setState({ charge: this.props.initialCharge });
        }
    }
    
    renderCollege = ( { input, label, meta, children } )=>{
        return (
            <div style={{marginTop: '25px'}}>
                <InputLabel shrink htmlFor="college">College</InputLabel>
                <Select
                    {...input}
                    fullWidth
                    inputProps={{
                        name: 'College',
                        id: 'college'
                    }}
                    >
                    {children}
                </Select>
            </div>
        );
    };
    renderGender = ( { input, label, meta, children } )=>{
        return (
            <div style={{marginTop: '25px'}}>
                <InputLabel shrink 
                    htmlFor="gender">Gender</InputLabel>
                <Select
                    
                    {...input}
                    fullWidth
                    inputProps={{
                        name: 'Gender',
                        id: 'gender'
                    }}
                    >
                    {children}
                </Select>
            </div>
        );
    };
    renderAccomodation = ( { input, label, meta, children } )=>{
        return (
            <div style={{marginTop: '25px'}}>
                <InputLabel shrink 
                    htmlFor="accomodation">Accomodation</InputLabel>
                <Select
                    
                    {...input}
                    fullWidth
                    inputProps={{
                        name: 'Accomodation',
                        id: 'accomodation'
                    }}
                    >
                    {children}
                </Select>
            </div>
        );
    };
    renderGame = ( { input, label, meta, children } )=>{
        return (
            <div style={{marginTop: '25px'}}>
                <InputLabel shrink htmlFor="game">Game</InputLabel>
                <Select
                    {...input}
                    fullWidth
                    inputProps={{
                        name: 'Game',
                        id: 'game'
                    }}
                    >
                    {children}
                </Select>
            </div>
        );
    };
    renderInput = ( { input, label, meta } )=>{
        return (
            <div>
                <TextField fullWidth label={label} {...input}/>
            </div>
        );
    };
    renderNumerical = ( { input, label, meta } )=>{
        return (
            <div>
                <TextField type="number" fullWidth label={label} {...input}/>
            </div>
        );
    };
    renderStatic = (props)=>{
        
        props.input.value = this.state.charge;
        console.log(props);
        return (
            <div>
                <TextField type="number" fullWidth label={props.label} disabled {...props.input}/>
            </div>
        );
    };
    onSubmit = (formValues)=>{
        console.log(formValues);
        this.props.onSubmit(formValues);
        this.props.openSnack();
        this.props.close();
    }
    showCollegeList(){
        this.props.colleges.map(college => {
            console.log(college);
            return (
                <MenuItem value={college.name}>poop</MenuItem>
            );
        })
    }
    onchange(e){
        console.log(e.target.value);
        switch(e.target.value){
            case 'Basketball':
                this.setState({ charge: '200'});
                this.render();
                return;
            case 'Football':
                this.setState({ charge: '200'});
                this.render();
                return;
            case 'Lawn Tennis':
                this.setState({ charge: '200'});
                this.render();
                return;
            case 'Volley Ball':
                this.setState({ charge: '200'});
                this.render();
                return;
            case 'Kabaddi':
                this.setState({ charge: '200'});
                this.render();
                return;
            case 'Chess':
                this.setState({ charge: '100'});
                this.render();
                return;
            case 'Table Tennis':
                this.setState({ charge: '100'});
                this.render();
                return;
            case 'Badminton':
                this.setState({ charge: '100'});
                this.render();
                return;
            case 'Carrom':
                this.setState({ charge: '100'});
                this.render();
                return;
            case 'e-sports':
                this.setState({ charge: '50'});
                this.render();
                return;
        }
    }
    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="Name" component={this.renderInput} label="Full Name"/>
                <Field name="College" component={this.renderCollege}>
                    {
                        this.props.colleges.map(college => {
                            return (
                                <MenuItem value={college.name}>{college.name}</MenuItem>
                            );
                        })
                    }
                </Field>
                <Field name="Gender" component={this.renderGender}>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Both">Both</MenuItem>
                </Field>
                <Field name="Accomodation" component={this.renderAccomodation}>
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                </Field>
                <Field name="City" component={this.renderInput} label="City"/>
                <Field name="Phone" type="number" component={this.renderNumerical} label="Phone number"/>
                <Field name="Alt_Phone" component={this.renderNumerical} label="Alternate Phone number"/>
                <Field name="Email" component={this.renderInput} label="Email"/>
                <Field name="Game" onChange={(e)=>this.onchange(e)} component={this.renderGame}>
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
                </Field>
                <Field name="Charge" component={this.renderStatic} value={this.state.charge} label="Charge"/>
                <button className="submit">Submit</button>
            </form>
            );
    }   
}

export default reduxForm({
    form: 'registrationForm',
})(RegistrationForm);