import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

interface MenuProps {
  height?: string;
  width?: string;
}

export const Menu = ({ height = "25", width = "24" }: MenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button onClick={onOpen} bg={"#FFFFFF"}>
        <svg
          width={width}
          height={height}
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>menu</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.1001 6.00001C3.1001 5.50295 3.50304 5.10001 4.0001 5.10001H20.0001C20.4972 5.10001 20.9001 5.50295 20.9001 6.00001C20.9001 6.49706 20.4972 6.90001 20.0001 6.90001H4.0001C3.50304 6.90001 3.1001 6.49706 3.1001 6.00001Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.09961 12C3.09961 11.5029 3.41653 11.1 3.80747 11.1H16.3917C16.7827 11.1 17.0996 11.5029 17.0996 12C17.0996 12.4971 16.7827 12.9 16.3917 12.9H3.80747C3.41653 12.9 3.09961 12.4971 3.09961 12Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.1001 18C3.1001 17.5029 3.50304 17.1 4.0001 17.1H20.0001C20.4972 17.1 20.9001 17.5029 20.9001 18C20.9001 18.4971 20.4972 18.9 20.0001 18.9H4.0001C3.50304 18.9 3.1001 18.4971 3.1001 18Z"
            fill="black"
          />
        </svg>
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>{/* なにもなし */}</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>{/* なにもなし */}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
