import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_API + id);
    const data = await res.json();

    setResInfo(data);
  };

  return resInfo;
};

export default useRestaurantMenu;

// useLocalStorage useSessionStorage
