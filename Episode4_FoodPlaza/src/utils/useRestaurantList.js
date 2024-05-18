import { useState, useEffect } from "react";
import { RESLIST_URL } from "./constants";

const useRestaurantList = () => {
    const [listofRestaurants, setListofrestaurants] = useState([]);
    const [filteredResto, setFilteredResto] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(RESLIST_URL);
        const json = await data.json();
        setListofrestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredResto(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

    };


    return [listofRestaurants, filteredResto];
}

export default useRestaurantList;