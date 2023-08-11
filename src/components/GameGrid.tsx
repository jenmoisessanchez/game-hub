import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {games.map((game) => (
          <GameCard key={game.id} gameItem={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
