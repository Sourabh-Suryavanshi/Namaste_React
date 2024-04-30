import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofRestaurants, setListofrestaurants] = useState([]);
  const [serachResto, setSearchResto] = useState("");
  const [filteredResto, setFilteredResto] = useState([]);
  // const arr = useState(resList);
  // const listofRestaurants = arr[0];
  // const setListofrestaurants = arr[1];

  useEffect(() => {
    // console.log("useEffect Called");
    fetchData();
  }, []);

  // console.log("Component Rendered");
  const fetchData = async () => {
    const URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(URL);
    const json = await data.json();

    setListofrestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResto(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  // if (listofRestaurants.length == 0) {
  //   return <Shimmer />;
  // }

  return listofRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            value={serachResto}
            onChange={(e) => setSearchResto(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestaurants = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(serachResto.toLowerCase())
              );
              setFilteredResto(filteredRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filterdata = listofRestaurants.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredResto(filterdata);
            }}
          >
            TOP RATED RESTAURANTS
          </button>
        </div>
      </div>
      <div className="res-container">
        {/* <RestaurantCard
            resName="Hotel Swagat"
            cuisine="Biryani, North Indian, Asian"
            rating="4.4 Star"
            ETA="20 min"
          />
          <RestaurantCard
            resName="Hotel Sangam"
            cuisine="Veg, Non-Veg"
            rating="4.3 Star"
            ETA="15 min"
          /> */}
        {filteredResto.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
