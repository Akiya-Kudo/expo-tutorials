import { styles } from "@/styles/styles";
import { Image, ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource,
  selectedImage?: string,
};

export default function ImageViewer({imgSource, selectedImage}: Props) {
  const image = selectedImage ? { uri: selectedImage } : imgSource;
  return (
    <Image 
      source={image}
      style={styles.image}
    />
  )
}