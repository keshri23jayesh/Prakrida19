import React, { Component } from 'react';
import { Map,Marker, GoogleApiWrapper } from 'google-maps-react';
import './Graph.css';

const mapStyles = {
  width: '400px',
  height: '300px',
  position: 'relative'
};

export class MapContainer extends Component {
  render() {
    return (
      <div id="map">
        <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{
             lat: 25.600813,
             lng: 85.086912
            }}
            >
            <Marker
                title={'BIT Patna'}
                name={'BIT'}
                position={{lat: 25.600813, lng: 85.086912}} />    
        </Map>
      </div>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAAE3ET57tPmP-5rTg2UoDqeFmqfQ_9mMI'
})(MapContainer);