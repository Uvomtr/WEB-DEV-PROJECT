import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Rectangle,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import the Leaflet CSS for styling

const Map = () => {
  const centerOfManila = [14.5995, 120.9842]; // Center of Manila, Philippines
  const fenceBounds = [
    [19.41, 116.8],
    [4.64, 126.6],
  ]; // Coordinates of the Philippines

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch nearby restaurants using an API (replace with your preferred API)
    fetchNearbyRestaurants(centerOfManila[0], centerOfManila[1])
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, [centerOfManila]);

  const fetchNearbyRestaurants = async (lat, lng) => {
    const radius = 5000; // Set the radius to 5 kilometers (adjust as needed)
    const url = `https://api.openstreetmap.org/api/0.6/map?bbox=${lng - 0.05},${
      lat - 0.05
    },${lng + 0.05},${lat + 0.05}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Extract restaurant data from the API response (adjust based on API response format)
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
    iconUrl: "path/to/restaurant-icon.png", // Replace with the path to your restaurant icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

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
