import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGameGenres";
import PlatformList from "./components/PlatformList";
import { Platform } from "./hooks/useGamePlatform";
import SortSelector from "./components/SortSelector";
import CustomContext from "./components/CustomContext";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchInput: string;
}
/**
 * NEXT
 * Add dynamic game heading
 * add genere heading
 *
 */
const App = () => {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(
  //   null
  // );
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <CustomContext.Provider value={{ gameQuery, setGameQuery }}>
          <NavBar />
        </CustomContext.Provider>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" ml="20px" mt="20px">
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" mt="20px">
        <Heading as="h1" mb="3">
          {`${gameQuery.platform?.name ?? ""} ${
            gameQuery.genre?.name ?? ""
          } Games`}
        </Heading>
        <HStack spacing="10px">
          <PlatformList
            onSeletecPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            onSeletecSort={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            selectedSort={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
        {/* <GameGrid
          selectedGenre={gameQuery.genre}
          selectedPlatform={gameQuery.platform}
        /> */}
      </GridItem>
    </Grid>
  );
};

export default App;
