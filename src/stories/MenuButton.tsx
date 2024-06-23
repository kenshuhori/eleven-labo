import { HamburgerIcon } from "@chakra-ui/icons";
import {
  MenuButton as ChakraMenuButton,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaBook } from "react-icons/fa6";
import { GiSoccerBall } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";

interface MenuProps {
  height?: string;
  width?: string;
}

export const MenuButton = ({ height = "25", width = "24" }: MenuProps) => {
  return (
    <Menu>
      <ChakraMenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <Link href="/themes" passHref>
          <MenuItem icon={<Icon as={FaBook} boxSize={5} />}>
            テーマ ~Themes~
          </MenuItem>
        </Link>
        <Link href="/teams" passHref>
          <MenuItem icon={<Icon as={GiSoccerBall} boxSize={5} />}>
            チーム ~Teams~
          </MenuItem>
        </Link>
        <Link href="/aboutUs" passHref>
          <MenuItem icon={<Icon as={RiTeamFill} boxSize={5} />}>
            About Us
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};
