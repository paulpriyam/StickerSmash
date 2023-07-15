import { StyleSheet,Image } from "react-native";

export default function ImageViewer({ placeHolderImage, imageSelected }) {
    
    const source =imageSelected !== null ? { uri:imageSelected}:placeHolderImage
    return(
        <Image source={source} style={styles.image}/>
    )
}

const styles=StyleSheet.create({
    image:{
        width:320,
        height:440,
        borderRadius:18,
      },
})