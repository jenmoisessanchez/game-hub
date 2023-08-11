import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGameGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { error, data, isLoading } = useGame(selectedGenre);
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
        {data.map((game) => (
          <GameCard key={game.id} gameItem={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
