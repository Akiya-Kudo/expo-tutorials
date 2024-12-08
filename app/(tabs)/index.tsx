import { styles } from "@/styles/styles";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Expo</Text>
      {/* <Link href={"/about"} style={styles.button}>Navigate About</Link> */}
    </View>
  );
}