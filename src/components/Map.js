import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { debounce } from "lodash";
import treePins from '../json/TreePins.json'; // Assuming this path is correct
import treeData from '../json/TreeData.json'; // Assuming this path is correct
import '../styles/tree.css'

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const speciesColorMap = {
    "FIT-BY01": "red", // Bignay
    "FIT-LP01": "lightgreen", // Lipote
    "FIT-KM01": "blue" // Katmon
};

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 14.4134583,
        longitude: 121.4459429,
        zoom: 16.5,
        width: "100vw",
        height: "100vh",
    });
    const [selectedTree, setSelectedTree] = useState(null);

    const handleViewportChange = useCallback(debounce((newViewport) => {
        setViewport(newViewport);
    }, 1), []);

    const handleMarkerClick = (event, treePin) => {
        event.preventDefault(); // Prevent any default action.
        const treeDetail = treeData[treePin.speciesId];
        setSelectedTree({
            ...treePin,
            details: treeDetail,
        });
    };

    const handleMapClick = (event) => {
        const longitude = event.lngLat.lng;
        const latitude = event.lngLat.lat;
        console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);
    }


    useEffect(() => {
        if (selectedTree) {
            console.log(selectedTree);
        }
    }, [selectedTree]);

    return (
        <ReactMapGL
            {...viewport}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
            attributionControl={false}
            onMove={handleViewportChange}
            //onClick={handleMapClick}
            style={{ borderRadius: '30px' }}
        >
            <div style={{ position: 'absolute', right: 10, top: 10 }}>
                <NavigationControl />
            </div>
            {treePins.map((pin, index) => (
                <Marker key={index} latitude={pin.latitude} longitude={pin.longitude}>
                    <div onClick={(event) => handleMarkerClick(event, pin)} style={{ cursor: 'pointer' }}>
                        <i className="fa-sharp fa-solid fa-location-pin fa-2x" style={{ color: speciesColorMap[pin.speciesId] || 'black' }}></i>
                    </div>
                </Marker>
            ))}
            {selectedTree && (
                <Popup
                    latitude={selectedTree.latitude}
                    longitude={selectedTree.longitude}
                    onClose={() => setSelectedTree(null)}
                    closeOnClick={false}
                    anchor="top"
                >
                    <div class="card_1">
                        <h3 class="card_tree">{selectedTree.details.name || 'Tree Details'}</h3>
                        <strong>Scientific Name:</strong><p class="italic">{selectedTree.details.scientificName}</p>
                        <p><strong>Description: </strong>{selectedTree.details.description}</p>
                        <button class="button_view" role="button" to={`/TreeInfo?treeId=${selectedTree.speciesId}`}>Read More</button>
                        {/* Include any other details you wish to show */}
                    </div>
                </Popup>
            )}
        </ReactMapGL>
    );
};

export default Map;