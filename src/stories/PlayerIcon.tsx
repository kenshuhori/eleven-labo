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
  const options = [
    { value: "player001", label: "M.Salah" },
    { value: "player002", label: "A.Becker" },
    { value: "player003", label: "V.Van Dijk" },
    { value: "player004", label: "Mac Allister" },
  ];

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
            <Select options={options} placeholder="選手を選択してください" />
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
