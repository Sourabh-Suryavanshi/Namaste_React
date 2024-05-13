import { useEffect, useState } from "react"
import { RESMENU_URL } from "../utils/constants";

const useRestaurantmenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);
    useEffect(() => {
        getResMenu();
    }, []);

    const getResMenu = async () => {
        const data = await fetch(RESMENU_URL + resId);
        const json = await data.json();
        setResMenu(json.data);
    };
    return resMenu;
}
export default useRestaurantmenu;