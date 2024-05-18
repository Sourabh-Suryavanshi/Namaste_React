import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {

  const [serachResto, setSearchResto] = useState("");
  const [filteredResto, setFilteredResto] = useState([]);
  // const arr = useState(resList);
  // const listofRestaurants = arr[0];
  // const setListofrestaurants = arr[1];

  const resData = useRestaurantList();
  useEffect(()=>{
    setFilteredResto(resData[1])
  },[resData[1]])

  // useEffect(() => {
  //   // console.log("useEffect Called");
  //   fetchData();
  // }, []);

  // // console.log("Component Rendered");
  // const fetchData = async () => {
  //   const URL =
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  //   const data = await fetch(URL);
  //   const json = await data.json();

  //   setListofrestaurants(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurant
  //   );
  //   setFilteredResto(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  //Conditional Rendering
  // if (listofRestaurants.length == 0) {
  //   return <Shimmer />;
  // }
  const onlineStatus = useOnlineStatus();
  if(!onlineStatus){
    return <h1>Net Gandlay, Looks like you're offline, Please check your Internet Connectivity</h1>
  }

  return resData.length == 0 ? (
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
              const filteredRestaurants = resData[0].filter((res) =>
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
              const filterdata = resData[0].filter(
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
