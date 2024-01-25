import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Rectangle,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const centerOfManila = [14.584447, 120.984222];
  const fenceBounds = [
    [19.41, 116.8],
    [4.64, 126.6],
  ];

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchNearbyRestaurants(centerOfManila[0], centerOfManila[1])
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, [centerOfManila]);

  const fetchNearbyRestaurants = async (lat, lng) => {
    const radius = 5000;
    const url = `https://api.openstreetmap.org/api/0.6/map?bbox=${lng - 0.05},${
      lat - 0.05
    },${lng + 0.05},${lat + 0.05}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const restaurantData = data.elements.filter(
        (element) =>
          element.tags &&
          element.tags.hasOwnProperty("amenity") &&
          element.tags.amenity === "restaurant"
      );

      return restaurantData.map((restaurant) => ({
        lat: restaurant.lat,
        lng: restaurant.lon,
        name: restaurant.tags.name || "Unnamed Restaurant",
      }));
    } catch (error) {
      throw error;
    }
  };

  const restaurantIcon = new L.Icon({
    iconUrl: "path/to/restaurant-icon.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="map-container">
      <MapContainer
        center={centerOfManila}
        zoom={25} // Adjust the zoom level as needed
        style={{ height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Rectangle bounds={fenceBounds} color="red" />

        {restaurants.map((restaurant, index) => (
          <Marker
            key={index}
            position={[restaurant.lat, restaurant.lng]}
            icon={restaurantIcon}
          >
            <Popup>{restaurant.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
