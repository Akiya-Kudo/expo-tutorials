import { FontAwesome } from '@expo/vector-icons';
import { View, Pressable, Text } from 'react-native';
import {styles} from '@/styles/styles'
import { ReactNode } from 'react';


type Props = {
  children: ReactNode;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ children, theme, onPress }: Props) {
  if (theme==="primary") {
    return (
      <View 
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{children}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{children}</Text>
      </Pressable>
    </View>
  );
}