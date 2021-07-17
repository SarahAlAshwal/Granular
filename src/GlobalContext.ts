import { createContext, useContext } from "react";
import { City } from './App';

export interface GlobalContent {
  favouriteCities: City
  setFavouriteCities:({}: City) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
favouriteCities: {},
setFavouriteCities: ({}: City) => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)