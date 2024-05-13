import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantmenu from "../utils/useRestaurantmenu";

const RestaurantMenu = () => {
  const [itemCard, setItemCard] = useState(null);
  const { resId } = useParams();

  const resMenu = useRestaurantmenu(resId)
  if (resMenu === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines, avgRating } =
    resMenu?.cards[2]?.card?.card?.info;

  if (itemCard == undefined) {
    return setItemCard(
      resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }

  return (
    <div className="ResMenu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>{avgRating} stars</h3>
      <h2>
        Menu:
        <ul>
          {itemCard.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} : Rs :-{" "}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </h2>
    </div>
  );
};

export default RestaurantMenu;
