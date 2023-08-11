import { Flex, Image, Spinner, Button } from "@chakra-ui/react";
import useGameGenres, { Genre } from "../hooks/useGameGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genere: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGameGenres();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {data.map((genre) => {
        const croppedImgUrl = getCroppedImageUrl(
          genre.image_background,
          600,
          400
        );
        return (
          <Flex key={genre.id} gap="5" mb="10px" align="center">
            <Image
              boxSize="40px"
              objectFit="cover"
              src={croppedImgUrl}
              alt={genre.name}
              borderRadius="md"
            />
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(genre)}
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </Flex>
        );
      })}
    </>
  );
};

export default GenreList;
