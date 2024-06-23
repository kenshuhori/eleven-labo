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
import {
  type CSSProperties,
  type ForwardedRef,
  forwardRef,
  useCallback,
  useState,
} from "react";
import Select from "react-select";

interface PlayerIconProps {
  backgroundColor?: string;
  borderColor?: string;
  className?: string;
  color?: string;
  number?: number;
  textShadowColor?: string;
}

export const PlayerIcon = forwardRef(
  (
    {
      backgroundColor,
      borderColor,
      color,
      className,
      number,
      textShadowColor,
      ...props
    }: PlayerIconProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
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
        fontSize: "1.4rem",
        fontWeight: "1000",
        height: "3.5rem",
        textShadow: team.textShadowColor
          ? `1px 1px ${team.textShadowColor}`
          : "unset",
        filter: "drop-shadow(2px 4px 2px #000000)",
        width: "3.5rem",
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
      {
        value: "player005",
        label: "T.Silva",
        name: "T.Silva",
        number: 6,
        team: {
          name: "Chelsea",
          color: "#FFFFFF",
          backgroundColor: "#034694",
          borderColor: "#DBA111",
          textShadowColor: null,
        },
      },
      {
        value: "player006",
        label: "B.Fernandes",
        name: "B.Fernandes",
        number: 18,
        team: {
          name: "Manchester United",
          color: "#000000",
          backgroundColor: "#DA291C",
          borderColor: "#000000",
          textShadowColor: "#FBE122",
        },
      },
      {
        value: "player007",
        label: "K.Mitoma",
        name: "K.Mitoma",
        number: 22,
        team: {
          name: "Brighton",
          color: "#FFCD00",
          backgroundColor: "#0057B8",
          borderColor: "#FFFFFF",
          textShadowColor: null,
        },
      },
      {
        value: "player008",
        label: "M.Antonio",
        name: "M.Antonio",
        number: 9,
        team: {
          name: "West Ham",
          color: "#F3D459",
          backgroundColor: "#7A263A",
          borderColor: "#1BB1E7",
          textShadowColor: null,
        },
      },
      {
        value: "player009",
        label: "J.Sarr",
        name: "J.Sarr",
        number: 1,
        team: {
          name: "Wolverhampton",
          color: "#231F20",
          backgroundColor: "#FDB913",
          borderColor: "#231F20",
          textShadowColor: "#FFFFFF",
        },
      },
      {
        value: "player010",
        label: "B.Guimaraes",
        name: "B.Guimaraes",
        number: 39,
        team: {
          name: "Newcastle",
          color: "#F1BE48",
          backgroundColor: "#241F20",
          borderColor: "#41B6E6",
          textShadowColor: "#FFFFFF",
        },
      },
      {
        value: "player011",
        label: "L.Digne",
        name: "L.Digne",
        number: 12,
        team: {
          name: "Aston Villa",
          color: "#670E36",
          backgroundColor: "#95BFE5",
          borderColor: "#FEE505",
          textShadowColor: null,
        },
      },
    ];

    return (
      <div className={className} ref={ref}>
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

        <Modal isOpen={isOpen} onClose={onClose} size="md">
          <ModalOverlay />
          <ModalContent style={{ top: "15vh" }}>
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
      </div>
    );
  },
);

const playerNameStyle: CSSProperties = {
  fontSize: "1.0rem",
  fontWeight: "1000",
  color: "#FFFFFF",
  textShadow: "2px 2px #000000",
};
