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

export const MenuButton = () => {
  return (
    <Menu>
      <ChakraMenuButton
        as={IconButton}
        aria-label="Options"
        icon={<RxHamburgerMenu size="2.2rem" />}
        border={0}
        variant="outline"
      />
      <MenuList style={{ fontSize: "1.4rem" }}>
        <Link href="/themes" passHref>
          <MenuItem icon={<FaBook size={"1.4rem"} />}>テーマ ~Themes~</MenuItem>
        </Link>
        <Link href="/formations" passHref>
          <MenuItem icon={<GiSoccerBall size={"1.4rem"} />}>フォーメーション ~Formation~</MenuItem>
        </Link>
        <Link href="/aboutUs" passHref>
          <MenuItem icon={<RiTeamFill size={"1.4rem"} />}>About Us</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};
