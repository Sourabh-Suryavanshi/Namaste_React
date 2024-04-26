import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
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
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;