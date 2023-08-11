import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Skeleton height="200px" />
          <SkeletonText></SkeletonText>
          <Skeleton height="20px" mt={3} />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
