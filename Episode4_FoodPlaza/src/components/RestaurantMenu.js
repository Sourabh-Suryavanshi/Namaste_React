import { useEffect, useState } from "react";
import { RESMENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [itemCard, setItemCard] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    getResMenu();
  }, []);

  const getResMenu = async () => {
    const data = await fetch(RESMENU_URL + resId);
    const json = await data.json();
    setResMenu(json.data);
  };
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
