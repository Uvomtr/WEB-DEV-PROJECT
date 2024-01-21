// Map.js
import React from "react";
import { MapContainer, TileLayer, Rectangle } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS for styling

const Map = () => {
  const centerOfManila = [14.5995, 120.9842]; // Center of Manila, Philippines
  const fenceBounds = [
    [19.41, 116.8],
    [4.64, 126.6],
  ]; // Coordinates of the Philippines

  return (
    <div className="map-container">
      <MapContainer
        center={centerOfManila}
        zoom={12}
        style={{ height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Rectangle bounds={fenceBounds} color="red" />
      </MapContainer>
    </div>
  );
};

export default Map;
