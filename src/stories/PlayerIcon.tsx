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
  number: string;
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
  const style: CSSProperties = {
    backgroundColor: backgroundColor ?? "#FFFFFF",
    border: `2px solid ${borderColor ?? "#000000"}`,
    borderRadius: "50%",
    color: color ?? "#000000",
    fontSize: "1.0rem",
    fontWeight: "1000",
    height: "40px",
    WebkitTextStroke: textStrokeColor ? `1px ${"#ffffff"}` : "none",
    width: "40px",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  type Option = {
    value: string;
    label: string;
    name: string;
    number: number;
  };
  type Player = {
    name: string;
    number: number;
  };
  const [player, setPlayer] = useState<Player>({ name: "???", number: 99 });
  const onChange = useCallback((selected: Option | null) => {
    setPlayer({
      name: selected?.name ?? "???",
      number: selected?.number ?? 0,
    });
  }, []);
  const options: Option[] = [
    { value: "player001", label: "M.Salah", name: "M.Salah", number: 11 },
    { value: "player002", label: "A.Becker", name: "A.Becker", number: 1 },
    { value: "player003", label: "V.Van Dijk", name: "V.Van Dijk", number: 4 },
    {
      value: "player004",
      label: "Mac Allister",
      name: "Mac Allister",
      number: 10,
    },
  ];

  return (
    <>
      <VStack>
        <Button onClick={onOpen} style={style} type="button" {...props}>
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
