import useGameGenres from "../hooks/useGameGenres";

const GenreList = () => {
  const { gameGenre } = useGameGenres();
  return (
    <>
      <ul>
        {gameGenre.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
