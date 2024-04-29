import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setListofrestaurants] = useState([]);
  // const arr = useState(resList);
  // const listofRestaurants = arr[0];
  // const setListofrestaurants = arr[1];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(URL);
    const json = await data.json();

    setListofrestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listofRestaurants.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdata = listofRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            setListofrestaurants(filterdata);
          }}
        >
          TOP RATED RESTAURANTS
        </button>
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
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
