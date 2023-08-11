import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, games, isLoading } = useGame();
  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {isLoading &&
          skeleton.map((item) => (
            <GameCardSkeleton key={item}></GameCardSkeleton>
          ))}
        {games.map((game) => (
          <GameCard key={game.id} gameItem={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
