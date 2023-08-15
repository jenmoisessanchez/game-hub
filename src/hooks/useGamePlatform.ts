import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGamePlatform = () => useData<Platform>("/platforms");

export default useGamePlatform;
