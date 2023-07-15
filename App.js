import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Buttons';
import * as ImagePicker from "expo-image-picker";
import { useState } from 'react';

const placeHolderImage=require("./assets/images/background-image.png")
export default function App() {

  const [selectedImage,setSelectedImage]=useState(null)

  const pickImageAync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync(
      {
        allowsEditing: true,
        quality:1
      }
    )
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert("You did not select any image")
    }
  }

  return (
    <View style={styles.container}>
      <ImageViewer
        placeHolderImage={placeHolderImage}
        imageSelected={selectedImage} />
      <View style={ styles.footerContainer}>
        <Button
          label={"Choose a photo"}
          theme="primary"
          onPressed={pickImageAync} />
        <Button
          label="Use this photo" />
      </View>
      <StatusBar
        style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  textColor: {
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    marginTop:20
  },
});
