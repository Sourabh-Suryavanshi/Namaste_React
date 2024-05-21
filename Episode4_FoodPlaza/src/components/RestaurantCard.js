import { RESTIMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  //const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] h-[450px]" style={{backgroundColor:"#f0f0f0"}}>
      <img
        className="w-52 h-52"
        alt="res-logo"
        src={RESTIMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} min</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export const WithRestaurantOpen = (RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute m-2 p-2 bg-black text-white color rounded-lg">Open</label>
        <RestaurantCard {...props}/>
        </div>
    )
  }
}

export default RestaurantCard;
