import { Badge } from "@chakra-ui/react";

interface Props {
  color: string;
  text: number | string;
}
const CustomBadge = ({ color, text }: Props) => {
  return <Badge colorScheme={color}>{text}</Badge>;
};

export default CustomBadge;
