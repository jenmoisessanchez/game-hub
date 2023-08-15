import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import CustomContext from "./CustomContext";

const SearchBar = () => {
  const { gameQuery, setGameQuery } = useContext(CustomContext)!;
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current)
          setGameQuery({ ...gameQuery, searchInput: ref.current.value });
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          type="text"
          placeholder="Search games..."
          borderRadius="3xl"
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
