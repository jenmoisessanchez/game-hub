import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGamePlatform, { Platform } from "../hooks/useGamePlatform";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSeletecPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformList = ({ onSeletecPlatform, selectedPlatform }: Props) => {
  const { data } = useGamePlatform();
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} mb="5">
          {selectedPlatform ? selectedPlatform.name : "Platform"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => {
                onSeletecPlatform(platform);
              }}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformList;
