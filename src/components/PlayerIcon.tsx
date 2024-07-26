import { colorCode } from "@/constants";
import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import type { Player, Team } from "@prisma/client";
import { type CSSProperties, type ForwardedRef, forwardRef, useCallback, useState } from "react";
import { PlayerSelect } from "./PlayerSelect";

type PlayerTeam = Player & { team: Team };

interface PlayerIconProps {
  position: number;
  player: PlayerTeam;
  readonly?: boolean;
}

export const PlayerIcon = forwardRef(
  (
    { position, player: initialPlayer, readonly = false }: PlayerIconProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const className = `player-no${position} transition`;

    const [player, setPlayer] = useState<PlayerTeam>(initialPlayer);
    const onChange = useCallback(
      (selected: PlayerSelectOption | null) => {
        if (selected !== null) {
          setPlayer(selected);
        }
        onClose();
      },
      [onClose],
    );

    return (
      <div className={className} ref={ref}>
        <div style={contentStyle}>
          <button onClick={onOpen} style={playerIconStyle(player.team)} type="button">
            {player.number}
          </button>
          {/* モーダルで選択した選手をフォームに反映させるために非表示のselect要素を設置 */}
          <select name={`position${position}`} style={{ display: "none" }}>
            <option value={player.name} />
          </select>
          <label style={playerNameStyle}>{player.name}</label>
        </div>
        {readonly === false && (
          <Modal isOpen={isOpen} onClose={onClose} size="md">
            <ModalOverlay />
            <ModalContent style={{ top: "15vh" }}>
              <ModalBody>
                <PlayerSelect onChange={onChange} />
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </div>
    );
  },
);

const contentStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
};

const playerIconStyle = (team: Team): CSSProperties => {
  return {
    backgroundColor: team.backgroundColor,
    border: `3px solid ${team.borderColor}`,
    borderRadius: "50%",
    color: team.color,
    fontFamily: "__Inter_aaf875",
    fontSize: "1.4rem",
    fontWeight: "1000",
    height: "3.5rem",
    textShadow: team.textShadowColor ? `1px 1px ${team.textShadowColor}` : "unset",
    filter: `drop-shadow(2px 4px 2px ${colorCode.black})`,
    width: "3.5rem",
  };
};

const playerNameStyle: CSSProperties = {
  color: colorCode.white,
  fontSize: "1.0rem",
  fontWeight: "1000",
  lineHeight: "1.2",
  textAlign: "center",
  textShadow: `2px 2px ${colorCode.black}`,
  width: "7rem",
};
