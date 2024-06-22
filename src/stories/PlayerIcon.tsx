import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import type { CSSProperties } from "react";

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

  return (
    <>
      <Button onClick={onOpen} style={style} type="button" {...props}>
        {number}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>選手選択</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select placeholder="選手を選択してください">
              <option value="1">選手1</option>
              <option value="2">選手2</option>
              <option value="3">選手3</option>
              <option value="4">選手4</option>
              <option value="5">選手5</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button variant="ghost">確定</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
