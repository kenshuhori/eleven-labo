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
  };
  const [playerName, setPlayerName] = useState<string | null>("??");
  const onChange = useCallback((selected: Option | null) => {
    setPlayerName(selected?.label ?? null);
  }, []);
  const options: Option[] = [
    { value: "player001", label: "M.Salah" },
    { value: "player002", label: "A.Becker" },
    { value: "player003", label: "V.Van Dijk" },
    { value: "player004", label: "Mac Allister" },
  ];

  return (
    <>
      <VStack>
        <Button onClick={onOpen} style={style} type="button" {...props}>
          {number}
        </Button>
        <Text>{playerName}</Text>
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
