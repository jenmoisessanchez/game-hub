import {
  Image,
  Card,
  CardBody,
  Heading,
  Stack,
  Flex,
  Badge,
  Spacer,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import CustomIcons from "./CustomIcons";

interface GameCardProps {
  gameItem: Game;
}
const GameCard = ({ gameItem }: GameCardProps) => {
  const { background_image, name, parent_platforms, metacritic } = gameItem;
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            boxSize="200px"
            width={"100%"}
            objectFit="cover"
            src={background_image}
            alt={name}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
          </Stack>
          <Flex alignItems="center">
            <Stack spacing={2} direction="row" mt="3">
              {parent_platforms.map(({ platform }) => {
                return (
                  <CustomIcons
                    key={platform.id}
                    icon={platform.name}
                  ></CustomIcons>
                );
              })}
            </Stack>
            <Spacer />
            <Badge colorScheme="green">{metacritic}</Badge>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
