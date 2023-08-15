import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSeletecSort: (sortArr: string) => void;
  selectedSort: string;
}
const SortSelector = ({ onSeletecSort, selectedSort }: Props) => {
  const sortArr = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentsort = sortArr.find((elem) => elem.value === selectedSort);
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} mb="5">
          {`Order by:  ${currentsort?.label || "Relevance"}`}
        </MenuButton>
        <MenuList>
          {sortArr.map((arr) => (
            <MenuItem
              key={arr.value}
              onClick={() => {
                onSeletecSort(arr.value);
              }}
            >
              {arr.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
