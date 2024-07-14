import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { type CSSProperties, type ForwardedRef, forwardRef, useCallback, useState } from "react";
import { PlayerSelect } from "./PlayerSelect";

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
        code: "default",
        name: "Default",
        backgroundColor: backgroundColor ?? "#FFFFFF",
        borderColor: borderColor ?? "#000000",
        color: color ?? "#000000",
        textShadowColor: textShadowColor ?? null,
      },
    };

    const style = (team: Team): CSSProperties => {
      return {
        backgroundColor: team.backgroundColor,
        border: `3px solid ${team.borderColor}`,
        borderRadius: "50%",
        color: team.color,
        fontSize: "1.4rem",
        fontWeight: "1000",
        height: "3.5rem",
        textShadow: team.textShadowColor ? `1px 1px ${team.textShadowColor}` : "unset",
        filter: "drop-shadow(2px 4px 2px #000000)",
        width: "3.5rem",
      };
    };
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [player, setPlayer] = useState<Player>(defaultPlayer);
    const onChange = useCallback((selected: PlayerSelectOption | null) => {
      setPlayer({
        name: selected?.name ?? "???",
        number: selected?.number ?? 0,
        team: {
          code: selected?.team.code ?? "???",
          name: selected?.team.name ?? "???",
          backgroundColor: selected?.team.backgroundColor ?? "#FFFFFF",
          borderColor: selected?.team.borderColor ?? "#000000",
          color: selected?.team.color ?? "#000000",
          textShadowColor: selected?.team.textShadowColor ?? null,
        },
      });
    }, []);

    return (
      <div className={className} ref={ref}>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "4px" }}>
          <button onClick={onOpen} style={style(player.team)} type="button" {...props}>
            {player.number}
          </button>
          <label style={playerNameStyle}>{player.name}</label>
        </div>

        <Modal isOpen={isOpen} onClose={onClose} size="md">
          <ModalOverlay />
          <ModalContent style={{ top: "15vh" }}>
            <ModalBody>
              <PlayerSelect onChange={onChange} />
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
