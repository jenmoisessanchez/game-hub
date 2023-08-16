import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
// import { Genre } from "../hooks/useGameGenres";
// import { Platform } from "../hooks/useGamePlatform";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  // const { error, data, isLoading } = useGame(selectedGenre, selectedPlatform);
  const { error, data, isLoading } = useGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      spacing={10}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {isLoading &&
        skeleton.map((item) => (
          <GameCardSkeleton key={item}></GameCardSkeleton>
        ))}
      {data.map((game) => (
        <GameCard key={game.id} gameItem={game}></GameCard>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
