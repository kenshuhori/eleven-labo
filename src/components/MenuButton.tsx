import {
  MenuButton as ChakraMenuButton,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaBook } from "react-icons/fa6";
import { GiSoccerBall } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

interface MenuProps {
  iconBoxSize?: string;
}

export const MenuButton = ({ iconBoxSize = "1.2rem" }: MenuProps) => {
  return (
    <Menu>
      <ChakraMenuButton
        as={IconButton}
        aria-label="Options"
        icon={<RxHamburgerMenu size="2rem" />}
        border={0}
        variant="outline"
      />
      <MenuList>
        <Link href="/themes" passHref>
          <MenuItem icon={<FaBook size={iconBoxSize} />}>テーマ ~Themes~</MenuItem>
        </Link>
        <Link href="/teams" passHref>
          <MenuItem icon={<GiSoccerBall size={iconBoxSize} />}>チーム ~Teams~</MenuItem>
        </Link>
        <Link href="/aboutUs" passHref>
          <MenuItem icon={<RiTeamFill size={iconBoxSize} />}>About Us</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};
