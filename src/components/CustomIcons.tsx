import { BsNintendoSwitch } from "react-icons/bs";
import {
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";

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
    case "Apple Macintosh":
      return <FaApple></FaApple>;
    case "Linux":
      return <FaLinux></FaLinux>;
  }
};

export default CustomIcons;
