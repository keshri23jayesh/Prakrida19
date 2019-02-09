import React, { Component } from 'react';
import Parallax from 'parallax-js'

class myParallax extends Component{
    constructor(props){
        super(props);
        this.scene = React.createRef();
    }
    componentDidMount(){
        this.parallax = new Parallax(this.scene.current);
        console.log(this.parallax);
    }
    componentDidUpdate(){
        console.log(this.parallax);
    }
    componentWillUnmount(){
        this.parallax.disable();
    }
    render(){
        return (
            <div>
                <ul className="top" ref={this.scene}>
                                <li className="layer" data-depth="0.00">
                                  <img src={require("../images/player.png")}/>
                                </li>
                                <li className="layer" data-depth="0.50">
                                  <img src={require("../images/ball.png")}/>
                                </li>
                                <li className="layer" data-depth="1.00">
                                  <img src={require("../images/middle.png")}/>
                                </li>
                              </ul>
            </div>
        );
    }
}
    
export default myParallax;