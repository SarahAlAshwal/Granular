import { createContext, useContext } from "react";
import { Cities } from './App';

export type GlobalContent = {
  favouriteCities: Cities
  setFavouriteCities:({}: Cities) => void
}

export const MyGlobalContext = createContext<GlobalContent>({
favouriteCities: { cities: [], temp: []},
setFavouriteCities: ({}: Cities) => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)