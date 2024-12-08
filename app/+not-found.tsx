import { styles } from "@/styles/styles";
import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found!'}}/>
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go to Home
        </Link>
      </View>
    </>
  )
}