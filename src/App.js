import {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';


class MapContainer extends Component {
  render() {
    return (
<Map
google = {this.props.google}
style={{height: '100%', width: '100%'}}
zoom = {10}
initialCenter = {
{
  lat: 33.953785071790925,
  lng: 10.016328695797936
}

}
/>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: '***************************************'
})(MapContainer)
