import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
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
        <button onClick={onOpen} type="button">
          {formation.name}
        </button>
      </div>
      {readonly === false && (
        <Modal isOpen={isOpen} onClose={onClose} size="md">
          <ModalOverlay />
          <ModalContent style={{ top: "15vh" }}>
            <ModalBody>
              <FormationSelect onChange={onChangeFormation} />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

const baseStyle: CSSProperties = {
  bottom: "4px",
  position: "absolute",
  right: "4px",
};
