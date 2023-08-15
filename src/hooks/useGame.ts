import useData from "./useData";
import { Genre } from "./useGameGenres";
import { Platform } from "./useGamePlatform";
import { GameQuery } from "../App";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform[] }[];
  metacritic: number;
  genres: Genre[];
}

const useGame = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );

// const useGame = (
//   selectedGenre: Genre | null,
//   selectedPlatform: Platform | null
// ) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: selectedGenre?.id,
//         parent_platforms: selectedPlatform?.id,
//       },
//     },
//     [selectedGenre?.id, selectedPlatform?.id]
//   );

export default useGame;
