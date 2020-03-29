import React from "react";
import "./VenueMap.scss";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default function VenueMap({
  centerLat = 32.156,
  centerLong = -110.8775,
  markers = [],
  height = "300px",
  zoom = 10
}) {
  return (
    <div className="venueMap">
      <Map
        center={[centerLat, centerLong]}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ width: "100%", height }}
        // style={{ minWidth: "300px", height: "100vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map(marker => {
          return (
            <Marker key={marker.name} position={marker.position}>
              <Popup>
                <strong>{marker.name}</strong>
                <br />
                {marker.address}
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
}
