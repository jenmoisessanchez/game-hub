import { createContext } from "react";
import { GameQuery } from "../App";

interface CustomContextType {
  gameQuery: GameQuery;
  setGameQuery: React.Dispatch<React.SetStateAction<GameQuery>>;
}

const CustomContext = createContext<CustomContextType | null>(null);

export default CustomContext;
