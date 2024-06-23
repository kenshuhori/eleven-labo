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
  iconBoxSize?: number;
}

export const MenuButton = ({ iconBoxSize = 5 }: MenuProps) => {
  return (
    <Menu>
      <ChakraMenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon boxSize={8} />}
        border={0}
        variant="outline"
      />
      <MenuList>
        <Link href="/themes" passHref>
          <MenuItem icon={<Icon as={FaBook} boxSize={iconBoxSize} />}>
            テーマ ~Themes~
          </MenuItem>
        </Link>
        <Link href="/teams" passHref>
          <MenuItem icon={<Icon as={GiSoccerBall} boxSize={iconBoxSize} />}>
            チーム ~Teams~
          </MenuItem>
        </Link>
        <Link href="/aboutUs" passHref>
          <MenuItem icon={<Icon as={RiTeamFill} boxSize={iconBoxSize} />}>
            About Us
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};
