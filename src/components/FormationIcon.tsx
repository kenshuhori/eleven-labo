import { colorCode } from "@/constants";
import { defaultFormation } from "@/fixtures/formations";
import type { Formation, FormationSelectOption } from "@/types";
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
  formationCode: string;
  onChange: (selected: FormationSelectOption | null) => void;
}

export const FormationIcon = ({ formationCode, onChange }: FormationIconProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formation, setFormation] = useState<Formation>(defaultFormation);
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
        {/* モーダルで選択した選手をフォームに反映させるために非表示のselect要素を設置 */}
        <select name={"formation"} style={{ display: "none" }}>
          <option value={formation.code} />
        </select>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent style={{ top: "15vh" }}>
          <ModalBody>
            <FormationSelect formation={formation} onChange={onChangeFormation} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

const baseStyle: CSSProperties = {
  bottom: "1rem",
  position: "absolute",
  right: "0.7rem",
  filter: `drop-shadow(4px 4px 4px ${colorCode.black})`,
};

const buttonStyle: CSSProperties = {
  backgroundColor: colorCode.white,
  border: `2px solid ${colorCode.lightOrange}`,
  color: colorCode.black,
  fontSize: "1.1rem",
  height: "3.5rem",
  textShadow: `1px 1px 1px ${colorCode.lightOrange}`,
  width: "12rem",
};
