import { View, StyleSheet, Modal,Text,Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function EmojiPicker({isVisible,children,onClose}) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible} >
            <View style={styles.modalContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} >Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" size={22} color={"#fff"}/>
                    </Pressable>
                </View>
                <View style={styles.pickerContainer}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
  modalContainer: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});