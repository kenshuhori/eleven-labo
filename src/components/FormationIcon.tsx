import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { type CSSProperties, useCallback, useState } from "react";
import { FormationSelect } from "./FormationSelect";

interface FormationIconProps {
  formation: Formation;
  onChange: (selected: FormationSelectOption | null) => void;
  readonly?: boolean;
}

export const FormationIcon = ({
  formation: initialFormation,
  onChange,
  readonly = false,
}: FormationIconProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formation, setFormation] = useState<Formation>(initialFormation);
  const onChangeFormation = useCallback(
    (selected: FormationSelectOption | null) => {
      if (selected !== null) {
        setFormation(selected);
      }
      onChange(selected);
      onClose();
    },
    [onClose, onChange],
  );

  return (
    <div style={baseStyle}>
      <div>
        <Button onClick={onOpen} style={buttonStyle} type="button">
          {formation.name}
        </Button>
      </div>
      {readonly === false && (
        <Modal isOpen={isOpen} onClose={onClose} size="md">
          <ModalOverlay />
          <ModalContent style={{ top: "15vh" }}>
            <ModalBody>
              <FormationSelect formation={formation} onChange={onChangeFormation} />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

const baseStyle: CSSProperties = {
  bottom: "0.7rem",
  position: "absolute",
  right: "0.7rem",
  filter: "drop-shadow(4px 4px 4px #000000)",
};

const buttonStyle: CSSProperties = {
  backgroundColor: "#FFFFFF",
  border: "2px solid #E6b422",
  color: "#000000",
  textShadow: "1px 1px 1px #E6b422",
  width: "12rem",
};
