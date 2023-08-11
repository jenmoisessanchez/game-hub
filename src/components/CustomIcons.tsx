import { BsNintendoSwitch } from "react-icons/bs";
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";

interface Props {
  icon: string;
}

const CustomIcons = ({ icon }: Props) => {
  switch (icon) {
    case "PlayStation":
      return <FaPlaystation></FaPlaystation>;
    case "Xbox":
      return <FaXbox></FaXbox>;
    case "PC":
      return <FaWindows></FaWindows>;
    case "Nintendo":
      return <BsNintendoSwitch></BsNintendoSwitch>;
  }
};

export default CustomIcons;
