import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
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
  textStrokeColor?: string;
}

export const PlayerIcon = ({
  backgroundColor,
  borderColor,
  color,
  number,
  textStrokeColor,
  ...props
}: PlayerIconProps) => {
  type Player = {
    name: string;
    number: number;
    team: {
      name: string;
      backgroundColor: string;
      borderColor: string;
      color: string;
      textStrokeColor: string | null;
    };
  };

  const defaultPlayer: Player = {
    name: "???",
    number: number ?? 99,
    team: {
      name: "Default",
      backgroundColor: backgroundColor ?? "#FFFFFF",
      borderColor: borderColor ?? "#000000",
      color: color ?? "#000000",
      textStrokeColor: textStrokeColor ?? null,
    },
  };

  const style = (team: Player["team"]): CSSProperties => {
    return {
      backgroundColor: team.backgroundColor,
      border: `2px solid ${team.borderColor}`,
      borderRadius: "50%",
      color: team.color,
      fontSize: "1.0rem",
      fontWeight: "1000",
      height: "40px",
      WebkitTextStroke: team.textStrokeColor
        ? `1px ${team.textStrokeColor}`
        : "0px",
      width: "40px",
    };
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  type Option = {
    value: string;
    label: string;
    name: string;
    number: number;
    team: {
      name: string;
      backgroundColor: string;
      borderColor: string;
      color: string;
      textStrokeColor: string | null;
    };
  };
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
        textStrokeColor: selected?.team.textStrokeColor ?? null,
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
        textStrokeColor: null,
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
        textStrokeColor: "#FFFFFF",
      },
    },
    {
      value: "player003",
      label: "V.Van Dijk",
      name: "V.Van Dijk",
      number: 4,
      team: {
        name: "Liverpool",
        backgroundColor: "#C8102E",
        borderColor: "#00B2A9",
        color: "#F6EB61",
        textStrokeColor: null,
      },
    },
    {
      value: "player004",
      label: "Mac Allister",
      name: "Mac Allister",
      number: 10,
      team: {
        name: "Liverpool",
        color: "#FF0000",
        backgroundColor: "#FFFFFF",
        borderColor: "#00B2A9",
        textStrokeColor: null,
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
        <Text>{player.name}</Text>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>選手選択</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select
              onChange={onChange}
              options={options}
              placeholder="選手を選択してください"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
