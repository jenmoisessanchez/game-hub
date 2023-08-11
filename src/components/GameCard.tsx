import {
  Image,
  Card,
  CardBody,
  Heading,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import CustomIcons from "./CustomIcons";
import CustomBadge from "./CustomBadge";
import getCroppedImageUrl from "../services/image-url";

interface GameCardProps {
  gameItem: Game;
}
const GameCard = ({ gameItem }: GameCardProps) => {
  const { background_image, name, parent_platforms, metacritic } = gameItem;
  const croppedImgUrl = getCroppedImageUrl(background_image, 600, 400);
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            boxSize="200px"
            width={"100%"}
            objectFit="cover"
            src={croppedImgUrl}
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
            <CustomBadge
              color="green"
              text={metacritic.toString()}
            ></CustomBadge>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
