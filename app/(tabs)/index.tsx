import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen. </Text>
      <TouchableOpacity onPress={toggleDarkMode} style={{ marginTop: 20 }}>
        <Text>toggle dark mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg,
    },
  });
  return styles;
};
