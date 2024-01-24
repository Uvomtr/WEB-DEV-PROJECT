// Menu.js
import React, { useState } from "react";
import "./Menu.css";
import AddToCart from "./AddtoCart";
import "./Assets/loc-logo.png";
import Amano from "./Restaurants/Amano.png";
import Antonio from "./Restaurants/Antonio's.png";
import Benjarong from "./Restaurants/Benjarong.png";
import Blackbird from "./Restaurants/Blackbird.png";
import ChinaBlue from "./Restaurants/China Blue.png";
import Gallery from "./Restaurants/Gallery.png";
import Hapag from "./Restaurants/Hapag.png";
import Helm from "./Restaurants/Helm.png";
import Kazunori from "./Restaurants/Kazunori.png";
import Lusso from "./Restaurants/Lusso.png";
import MDining from "./Restaurants/M Dining.png";
import MechaUma from "./Restaurants/Mecha Uma.png";
import Metiz from "./Restaurants/Metiz.png";
import Metronome from "./Restaurants/Metronome.png";
import Modan from "./Restaurants/Modan.png";
import Toyo from "./Restaurants/Toyo Eatery.png";
import Tsukiji from "./Restaurants/Tsukiji.png";
import Txanton from "./Restaurants/Txanton.png";
import Txoko from "./Restaurants/Txoko Asador.png";
import Wagyu from "./Restaurants/Wagyu Studio.png";

const foodItems = [
  {
    id: 1,
    name: "A Mano",
    description:
      "A Mano has become a Metro Manila staple, offering an enticing blend of authentic and exciting Italian specialties.",
    image: Amano,
    location: "R1 Power Plant Mall, Rockwell Center, Makati City, Metro Manila",
    category: "european",
  },
  {
    id: 2,
    name: "Antonio's",
    description:
      "Antonio's is a culinary gem in Tagaytay City, known for delivering an exceptional dining experience in a charming setting.",
    image: Antonio,
    location: "Purok 138, Tagaytay City, Cavite",
    category: "international",
  },
  {
    id: 3,
    name: "Blackbird at The Nielson Tower",
    description:
      "Blackbird at The Nielson Tower is a fine dining institution with art deco interiors, world-class service, and refined international cuisine.",
    image: Benjarong,
    location:
      "Nielson Tower Ayala Triangle, Makati Avenue, Makati City, Metro Manila",
    category: "asian",
  },
  {
    id: 4,
    name: "Benjarong",
    description:
      "Benjarong stands as a cherished establishment, offering authentic Thai cuisine and now presenting creative, modern tasting menus.",
    image: Blackbird,
    location:
      "Lobby Level, Dusit Thani Manila, Ayala Center, Makati City, Metro Manila",
    category: "asian",
  },
  {
    id: 5,
    name: "China Blue",
    description:
      "China Blue by Jereme Leung is a stylish establishment offering artful, innovative, and undeniably delicious modern Chinese fare.",
    image: ChinaBlue,
    location:
      "3/F Conrad Manila, Mall of Asia Complex, Pasay City, Metro Manila",
    category: "asian",
  },
  {
    id: 6,
    name: "Gallery",
    description:
      "Gallery by Chele is Chef Chele Gonzalez’s signature dining destination, showcasing a fusion of Filipino produce, sustainable practices, and global techniques.",
    image: Gallery,
    location:
      "5/F Clipp Center, 11th corner 39th Street, BGC, Taguig City, Metro Manila",
    category: "international",
  },
  {
    id: 7,
    name: "Hapag",
    description:
      "Hapag is a modern Filipino restaurant known for creative takes on familiar dishes while proudly showcasing native ingredients.",
    image: Hapag,
    location: "201 Katipunan Avenue, Quezon City, Metro Manila",
    category: "asian",
  },
  {
    id: 8,
    name: "Helm",
    description:
      "Helm by Josh Boutwood promises a true chef's table experience with Chef Josh Boutwood's creative prowess.",
    image: Helm,
    location:
      "2/F The Plaza Arya Residences Tower, 2 McKinley Parkway, BGC, Taguig, Metro Manila",
    category: "international",
  },
  {
    id: 9,
    name: "Kazunori",
    description:
      "Kazunori is a Japanese staple guaranteeing satisfaction, whether for a quick lunch, casual dinner, or a memorable omakase experience.",
    image: Kazunori,
    location:
      "G/F Mazda Makati Building, 2301 Chino Roces Avenue Extension, Makati City, Metro Manila",
    category: "asian",
  },
  {
    id: 10,
    name: "Lusso",
    description:
      "Lusso brings truly luxe French and Italian dishes to discerning patrons with Chef Margarita Forés’ signature touch.",
    image: Lusso,
    location: "G/F Greenbelt 5, 174 Ayala Avenue, Makati City",
    category: "european",
  },
  {
    id: 11,
    name: "M Dining",
    description:
      "M Dining is a no-brainer choice for an exquisite meal in an elegant restaurant, where Chef Tom Bascon’s Asian inflexions on European cuisine shine.",
    image: MDining,
    location:
      "3/F Alegria Alta Building, 2294 Pasong Tamo Extension, Makati City, Metro Manila",
    category: "european",
  },
  {
    id: 12,
    name: "Mecha Uma",
    description:
      "Mecha Uma is a modern Japanese omakase experience, showcasing Chef Bruce Ricketts' culinary excellence.",
    image: MechaUma,
    location:
      "G/F RCBC Building, 25th Street corner 6th Avenue, BGC, Taguig City, Metro Manila",
    category: "japanese",
  },
  {
    id: 13,
    name: "Metiz",
    description:
      "Metiz champions Filipino ingredients and local producers through modern dishes grounded in memories of regional flavors.",
    image: Metiz,
    location:
      "G/F Building A Karrivin Plaza, 2316 Chino Roces Avenue Extension, Makati City, Metro Manila",
    category: "asian",
  },
  {
    id: 14,
    name: "Metronome",
    description:
      "Metronome, whether for hearty French bistro fare or a wildly creative tasting menu, never misses a beat at this eye-catching establishment.",
    image: Metronome,
    location: "160 Bolanos Street, Legazpi Village, Makati City, Metro Manila",
    category: "european",
  },
  {
    id: 15,
    name: "Mōdan",
    description:
      "Mōdan presents a brilliant, highly personal modern Japanese tasting menu like no other under the expertise of Chef Jorge Mendez.",
    image: Modan,
    location:
      "1/F Escalades East Tower, 20th Avenue, Cubao, Quezon City, Metro Manila",
    category: "asian",
  },
  {
    id: 16,
    name: "Toyo Eatery",
    description:
      "Toyo Eatery, Chef Jordy Navarra's modern Filipino restaurant, has become pivotal in pushing the envelope of our nation's cuisine.",
    image: Toyo,
    location:
      "The Alley at Karrivin, Karrivin Plaza, Chino Roces Avenue Ext, Makati City, Metro Manila",
    category: "asian",
  },
  {
    id: 17,
    name: "Tsukiji",
    description:
      "Tsukiji sets the benchmark for top-tier Japanese cuisine, featuring fresh seafood flown in from the eponymous Tsukiji Fish Market.",
    image: Tsukiji,
    location:
      "3/F Milky Way Building, 900 A. Arnaiz Avenue, Makati City, Metro Manila",
    category: "asian",
  },
  {
    id: 18,
    name: "Txanton",
    description:
      "Txanton offers a jamón tasting experience, paired with delectable wines and hearty mains to complement the flavors.",
    image: Txanton,
    location:
      "2/F Alegria Alta Building, 2294 Chino Roces Avenue, Makati City, Metro Manila",
    category: "european",
  },
  {
    id: 19,
    name: "Txoko Asador",
    description:
      "Txoko Asador presents utterly delicious and truly brilliant renditions of popular Spanish dishes.",
    image: Txoko,
    location:
      "G/F Erlag Building, 102 Esteban Street, Legazpi Village, Makati City, Metro Manila",
    category: "european",
  },
  {
    id: 20,
    name: "Wagyu Studio",
    description:
      "Wagyu Studio, an award-winning Japanese concept, places A5 Kobe beef in the spotlight, showcasing Chef Yoki Kitayama's creative and extravagant bites.",
    image: Wagyu,
    location:
      "G/F The Finance Center, 9th Avenue corner 26th Street, BGC, Taguig City, Metro Manila",
    category: "asian",
  },
];

const Menu = () => {
  const [sortedItems, setSortedItems] = useState([...foodItems]);
  const [sortOption, setSortOption] = useState("name");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc"); // Add sort order state

  const handleSort = () => {
    const sorted = [...sortedItems].sort((a, b) => {
      if (sortOption === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sortOption === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      } else if (sortOption === "az") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "za") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    setSortedItems(sorted);

    // Toggle the sort order for the next click
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems =
    selectedCategory === "all"
      ? sortedItems
      : sortedItems.filter((item) => item.category === selectedCategory);

  return (
    <div id="menu-section">
      <div className="restau-title">
        <label>Restaurant</label>
      </div>
      <div className="menu-container">
        <div className="menu-filters">
          <label>
            Sort by:
            <select value={sortOption} onChange={handleOptionChange}>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
          </label>
          <label>
            Filter by category:
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="all">All</option>
              <option value="asian">Asian</option>
              <option value="european">European</option>
              <option value="international">International</option>
            </select>
          </label>
          <button onClick={handleSort}>Sort</button>
        </div>
        <div className="menu-items">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>Location: {item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
