import React, { useState, useCallback } from 'react';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { debounce } from "lodash";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 14.4134583,
        longitude: 121.4459429,
        zoom: 16.5,
        width: "100vw",
        height: "100vh",
    });

    const handleViewportChange = useCallback(debounce((newViewport) => {
        setViewport(newViewport);
    }, 1), []);

    const handleClick = (event) => {
        const longitude = event.lngLat.lng;
        const latitude = event.lngLat.lat;
        console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);
    }

    return (
        <ReactMapGL
            {...viewport}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
            attributionControl={false}
            onMove={handleViewportChange}
            onClick={handleClick}
            style={{ borderRadius: '30px' }}
        >
            <div style={{ position: 'absolute', right: 10, top: -10 }}>
                <NavigationControl />
            </div>
            <Marker key={1} latitude={14.413167} longitude={121.448300}>
                <i className="fa-sharp fa-solid fa-location-pin fa-2x" style={{ color: "red"}}></i>
            </Marker>
        </ReactMapGL>
    );
};

export default Map;