import { players } from "@/fixtures/players";
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
        border: `3px solid ${team.borderColor}`,
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
    const options: Option[] = players.map((player, index) => ({
      value: `player_${index}`,
      label: player.name,
      ...player,
    }));

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
            <ModalBody>
              <Select
                onChange={onChange}
                options={options}
                placeholder="選手を選択"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    );
  },
);

const playerNameStyle: CSSProperties = {
  color: "#FFFFFF",
  fontSize: "1.0rem",
  fontWeight: "1000",
  textAlign: "center",
  textShadow: "2px 2px #000000",
  width: "7rem",
};
