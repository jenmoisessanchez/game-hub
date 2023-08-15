import { Image, HStack } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import SearchBar from "./SearchBar";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} alt="Logo" boxSize="60px" />
        <SearchBar />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
