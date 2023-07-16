import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CircularButton({onPressed}) {
    return (
      <View style={styles.circularButtonContainer}>
        <Pressable style={styles.circleButton} onPress={onPressed}>
          <MaterialIcons name="add" size={38} color={"#25292e"} />
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  circularButtonContainer: {
    width: 84,
    height: 84,
    borderWidth: 4,
        borderColor: "#ffd33d",
        borderRadius: 42,
    padding: 3,
    marginHorizontal:60
  },
    circleButton: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      alignItems: 'center',
      borderRadius:42
  },
});
