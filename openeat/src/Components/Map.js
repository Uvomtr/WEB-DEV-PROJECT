// Map.js

import React from "react";
import { MapContainer, TileLayer, Rectangle } from "react-leaflet";

const Map = () => {
  const centerOfPhilippines = [12.8797, 121.774]; // Center of the Philippines
  const fenceBounds = [
    [19.41, 116.8],
    [4.64, 126.6],
  ]; // Coordinates of the Philippines

  return (
    <MapContainer
      center={centerOfPhilippines}
      zoom={6}
      className="map-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Rectangle bounds={fenceBounds} color="red" />
    </MapContainer>
  );
};

export default Map;
