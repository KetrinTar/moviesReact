import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import coordinateDTO from "./coordinates.model";
import { useState } from "react";


let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});
var greenIcon = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([51.5, -0.09], {icon: greenIcon});

export default function Map(props: mapProps){
    const [coordinates, setCoordinates] = useState<coordinateDTO[]>(props.coordinates);
    return (
        
        <MapContainer
          center={[47.073628, 8.367307]} zoom={14} 
          style={{height: props.height, width: props.width}}
        >
            <div>
            
        <TileLayer attribution="React Movie"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            
        
        {props.readOnly ? null : <MapClick setCoordinates={coordinates => {
            setCoordinates([coordinates]);
            props.handleMapClick(coordinates);
            
        }}/>}
        
        {coordinates.map((coordinate, index) => <Marker key={index}
            position={[coordinate.lat, coordinate.lng]} >
                {coordinate.name ? <Popup>
                    {coordinate.name}
                </Popup> : null}
            </Marker>)}
            </div>
        </MapContainer>
        
    )
}
function MapClick(props: mapClickProps){
    useMapEvent('click', eventArgs => {
        props.setCoordinates({lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng})
    })
    return null;
}
interface mapClickProps{
    setCoordinates(coordinates: coordinateDTO) : void;
}
interface mapProps{
    height: string;
    width: string;
    coordinates: coordinateDTO[];
    handleMapClick(coordinates: coordinateDTO) : void;
    readOnly: boolean
}
Map.defaultProps ={
    height: '500px',
    width:'500px',
    handleMapClick: () => {},
    readOnly: false
}