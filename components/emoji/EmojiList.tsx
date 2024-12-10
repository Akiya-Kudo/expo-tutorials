import { ImageSource } from "expo-image";

type Props = {
  onSelect: (image: ImageSource) => void;
  onCloseModal: () => void;
};