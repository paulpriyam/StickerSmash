import { StyleSheet,Image } from "react-native";

export default function ImageViewer({placeHolderImage}){
    return(
        <Image source={placeHolderImage} style={styles.image}/>
    )
}

const styles=StyleSheet.create({
    image:{
        width:320,
        height:440,
        borderRadius:18,
      },
})