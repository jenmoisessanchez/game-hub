import {
  Box,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w="180px">
      <FormControl display="flex" alignItems="center">
        <Switch id="dark-mode" mr="2" onChange={toggleColorMode}></Switch>
        <FormLabel htmlFor="dark-mode" mb="0">
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </FormLabel>
      </FormControl>
    </Box>
  );
};

export default ColorModeSwitch;
