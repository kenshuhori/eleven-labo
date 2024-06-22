import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
  backgroundColor = "#FFFFFF",
  borderColor = "#000000",
  color = "#000000",
  number,
  textStrokeColor,
  ...props
}: PlayerIconProps) => {
  const style: CSSProperties = {
    backgroundColor: backgroundColor,
    border: `2px solid ${borderColor}`,
    borderRadius: "50%",
    color: color,
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
            <p>選手選択</p>
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
