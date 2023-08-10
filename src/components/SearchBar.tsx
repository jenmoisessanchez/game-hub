import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input type="text" placeholder="Search games..." borderRadius="3xl" />
    </InputGroup>
  );
};

export default SearchBar;
