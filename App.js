import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Buttons';
import CircularButton from './components/CircularButton';
import IconButton from './components/IconButton';

import * as ImagePicker from "expo-image-picker";
import { useState } from 'react';

const placeHolderImage=require("./assets/images/background-image.png")
export default function App() {

  const onReset = () => {
    setSelectedImage(false)
  }
  const onAddSticker = () => {
    // need to  add 
  }
  const onSaveImageAsync = () => {
    // need to add
  }

  const [selectedImage, setSelectedImage] = useState(null)
  const [showAppOptions,setShowAppOptions]=useState(false)

  const pickImageAync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync(
      {
        allowsEditing: true,
        quality:1
      }
    )
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert("You did not select any image")
    }
  }

  return (
    <View style={styles.container}>
      <ImageViewer
        placeHolderImage={placeHolderImage}
        imageSelected={selectedImage} />
      {
        showAppOptions ? (
          <View
            style={styles.optionsFooterContainer}>
            <IconButton label={"reset"} onPressed={onSaveImageAsync} icon={"refresh"}/>
            <CircularButton onPressed={onAddSticker} />
            <IconButton label={"save"} onPressed={onSaveImageAsync} icon={"save-alt"}/>
        </View>
        ) : (      
      <View style={ styles.footerContainer}>
        <Button
          label={"Choose a photo"}
          theme="primary"
          onPressed={pickImageAync} />
        <Button
          label="Use this photo"
          onPressed={()=>setShowAppOptions(true)}/>
      </View>
        )
      }
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
  optionsFooterContainer: {
    flex: 1 / 3,
    flexDirection: 'row',
    marginTop:20
  },
});
