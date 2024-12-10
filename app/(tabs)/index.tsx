import Button from "@/components/buttons/Button";
import ImageViewer from "@/components/ImageViewer";
import { styles } from "@/styles/styles";
import { View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import IconButton from "@/components/buttons/IconButton";
import CircleButton from "@/components/buttons/CircleButton";
import EmojiPicker from "@/components/emoji/EmojiPicker";
import { ImageSource } from "expo-image";
import EmojiList from "@/components/emoji/EmojiList";
import EmojiSticker from "@/components/emoji/EmojiSticker";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const PlaceholderImage = require('@/assets/images/background-image.png')

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedImage, setPickedImage] = useState<ImageSource | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }
  
  const onSaveImageAsync = async ()=> {
    setIsModalVisible(false);
  }

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
          {pickedImage && <EmojiSticker imageSize={40} stickerSource={pickedImage} />}
        </View>
        { showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset}/>
              <CircleButton onPress={onAddSticker}/>
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button children="Choose a Photo" theme="primary" onPress={pickImageAsync}/>
            <Button children="Use this photo" onPress={() => setShowAppOptions(true)} />
          </View>
        )}
        <EmojiPicker isVisible={isModalVisible} onClose={onSaveImageAsync}>
          <EmojiList onSelect={setPickedImage} onCloseModal={onModalClose}/>
        </EmojiPicker>
      </View>
    </GestureHandlerRootView>
  );
}