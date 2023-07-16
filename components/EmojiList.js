import { Pressable, Image, FlatList, StyleSheet } from "react-native";
import { useState } from "react";

export default function EmojiList({ onClose,onEmojiSelected}) {
    const [emojis] = useState([
      require("../assets/images/emoji1.png"),
      require("../assets/images/emoji2.png"),
      require("../assets/images/emoji3.png"),
      require("../assets/images/emoji4.png"),
      require("../assets/images/emoji5.png"),
        require("../assets/images/emoji6.png"),
    ]
    );

    return (
        <FlatList horizontal data={emojis} 
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => {
                return (
                    <Pressable onPress={() => {
                    console.log("item selected " + item + "at position" + index);
                    onEmojiSelected(item);
                    onClose();
                }}>
                    <Image style={styles.image} source={item} key={index} />
                </Pressable>
                );
            }}>

        </FlatList>
            
    );
}
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    marginRight:16
  },
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});