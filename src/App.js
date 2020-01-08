import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Jumbotron } from './Jumbotron';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.8534,
      lng: 2.3488
    },
    zoom: 11
  };
 
  render() {
    return (
      
      // Important! Always set the container height explicitly
      <div>
       <Jumbotron/>
      <div style={{ height: '50vh', width: '50%' }}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCXaK2q7JRoaK56cwB-_3TGsQwq0iyQ5-8"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={ 48.8534}
            lng={2.3488}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      </div>
    );
  }
}
 
export default SimpleMap;