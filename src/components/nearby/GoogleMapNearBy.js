import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMapNearBy extends Component {

    render() {

        var points = [
            { lat: 25.098704, lng: 83.708207 },
            { lat: 25.100303, lng: 83.736978 },
            { lat: 25.102711, lng: 83.713644 },
            { lat: 25.093233, lng: 83.711471 }

        ]
        var bounds = new this.props.google.maps.LatLngBounds();
        for (var i = 0; i < points.length; i++) {
            bounds.extend(points[i]);
        }

        return (
            <div>
                <h2 className="text-center">Google Map</h2>
                <Map
                    google={this.props.google}
                    initialCenter={{ lat: 25.094933, lng: 83.722605 }}
                    bounds={bounds}>
                </Map>

            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyC-fiWRO_wn_DUrhrZFf_bxrG_SSoSMVSk')
})(GoogleMapNearBy)