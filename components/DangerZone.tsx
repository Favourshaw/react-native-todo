import { createSettingsStyles } from "@/assets/styles/settings.style";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const DangerZone = () => {
  const { colors } = useTheme();
  const settingsStyle = createSettingsStyles(colors);
  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  const handleResetApp = async () => {
    Alert.alert(
      "Confirm Reset",
      "Are you sure you want to reset the app? This will delete all your todos and cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete All",
          style: "destructive",
          onPress: async () => {
            try {
              const result = await clearAllTodos();
              Alert.alert(
                "Success",
                `All ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"} have been deleted .`
              );
            } catch (error) {
              Alert.alert(
                "Error",
                "There was an error deleting your todos. Please try again."
              );
              console.log("Error deleting todos:", error);
            }
          },
        },
      ]
    );
  };
  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyle.section}
    >
      <Text style={settingsStyle.sectionTitle}>Danger Zone</Text>

      <TouchableOpacity
        style={[settingsStyle.actionButton, { borderBottomWidth: 0 }]}
        onPress={handleResetApp}
        activeOpacity={0.7}
      >
        <View style={settingsStyle.actionLeft}>
          <LinearGradient
            colors={colors.gradients.danger}
            style={settingsStyle.actionIcon}
          >
            <Ionicons name="trash" size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyle.actionTextDanger}>Reset App</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.text} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DangerZone;
