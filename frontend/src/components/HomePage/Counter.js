import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {time: ""};
    }
    componentDidMount(){
        let countDownDate = new Date("Feb 15, 2019 12:00:00").getTime();

        let x = setInterval(() => {

          // Get todays date and time
          let now = new Date().getTime();

          // Find the distance between now an the count down date
          let distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          let time = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s "
          // Display the result in the element with id="demo"
          this.setState({time: time});
            
          // If the count down is finished, write some text 
          if (distance < 0) {
            clearInterval(x);
            this.setState({time: "Live Now"});
          }
        }, 1000);
    }
    render(){
        return (
            <p id="demo" className="counter">{this.state.time}</p>
        );
    }
}

export default Counter;