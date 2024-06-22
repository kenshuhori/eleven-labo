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
  label: string;
}

export const PlayerIcon = ({
  backgroundColor,
  borderColor,
  label,
  ...props
}: PlayerIconProps) => {
  const style: CSSProperties = {
    backgroundColor: backgroundColor ?? "red",
    borderColor: borderColor ?? "yellow",
    color: "white",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} style={style} type="button" {...props}>
        {label}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>hoge</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
