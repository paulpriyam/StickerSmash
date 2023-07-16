import { View, Image } from "react-native";

export default function EmojiSticker({ imageSize, stickerSource }) {
    return (
        <View
        style={{top:-350}}>
            <Image
                source={stickerSource}
                style={{
                    height: imageSize,
                    width:imageSize
                }               
                }
            resizeMode="contain"/>
      </View>  
    );
}