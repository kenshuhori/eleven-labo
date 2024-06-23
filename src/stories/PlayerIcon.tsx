import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { type CSSProperties, useCallback, useState } from "react";
import Select from "react-select";

interface PlayerIconProps {
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  number?: number;
  textShadowColor?: string;
}

export const PlayerIcon = ({
  backgroundColor,
  borderColor,
  color,
  number,
  textShadowColor,
  ...props
}: PlayerIconProps) => {
  const defaultPlayer: Player = {
    name: "???",
    number: number ?? 99,
    team: {
      name: "Default",
      backgroundColor: backgroundColor ?? "#FFFFFF",
      borderColor: borderColor ?? "#000000",
      color: color ?? "#000000",
      textShadowColor: textShadowColor ?? null,
    },
  };

  const style = (team: Player["team"]): CSSProperties => {
    return {
      backgroundColor: team.backgroundColor,
      border: `2px solid ${team.borderColor}`,
      borderRadius: "50%",
      color: team.color,
      fontSize: "1rem",
      fontWeight: "1000",
      height: "3rem",
      textShadow: team.textShadowColor
        ? `1px 1px ${team.textShadowColor}`
        : "unset",
      filter: "drop-shadow(2px 4px 6px #000000)",
      width: "3rem",
    };
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  type Option = {
    value: string;
    label: string;
  } & Player;
  const [player, setPlayer] = useState<Player>(defaultPlayer);
  const onChange = useCallback((selected: Option | null) => {
    setPlayer({
      name: selected?.name ?? "???",
      number: selected?.number ?? 0,
      team: {
        name: selected?.team.name ?? "???",
        backgroundColor: selected?.team.backgroundColor ?? "#FFFFFF",
        borderColor: selected?.team.borderColor ?? "#000000",
        color: selected?.team.color ?? "#000000",
        textShadowColor: selected?.team.textShadowColor ?? null,
      },
    });
  }, []);
  const options: Option[] = [
    {
      value: "player001",
      label: "M.Salah",
      name: "M.Salah",
      number: 11,
      team: {
        name: "Liverpool",
        backgroundColor: "#C8102E",
        borderColor: "#00B2A9",
        color: "#F6EB61",
        textShadowColor: null,
      },
    },
    {
      value: "player002",
      label: "K.De Bruyne",
      name: "K.De Bruyne",
      number: 17,
      team: {
        name: "Manchester City",
        backgroundColor: "#6CABDD",
        borderColor: "#FFFFFF",
        color: "#1C2C5B",
        textShadowColor: "#FFFFFF",
      },
    },
    {
      value: "player003",
      label: "M.Odegaard",
      name: "M.Odegaard",
      number: 8,
      team: {
        name: "Arsenal",
        backgroundColor: "#EF0107",
        borderColor: "#063672",
        color: "#FFFFFF",
        textShadowColor: "#9C824A",
      },
    },
    {
      value: "player004",
      label: "H.Son",
      name: "H.Son",
      number: 7,
      team: {
        name: "Totenham",
        color: "#132257",
        backgroundColor: "#FFFFFF",
        borderColor: "#132257",
        textShadowColor: null,
      },
    },
  ];

  return (
    <>
      <VStack>
        <Button
          onClick={onOpen}
          style={style(player.team)}
          type="button"
          {...props}
        >
          {player.number}
        </Button>
        <Text style={playerNameStyle}>{player.name}</Text>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ width: "20rem" }}>
          {/* <ModalHeader>選手選択</ModalHeader>
          <ModalCloseButton /> */}
          <ModalBody>
            <Select
              onChange={onChange}
              options={options}
              placeholder="選手を選択"
            />
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

const playerNameStyle: CSSProperties = {
  fontSize: "1.0rem",
  fontWeight: "1000",
  color: "#FFFFFF",
  textShadow: "1px 1px #000000",
  filter: "drop-shadow(2px 4px 6px #000000)",
};
