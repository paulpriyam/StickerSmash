import { Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function IconButton({onPressed,icon,label}) {
    return (
      <Pressable style={styles.iconButton} onPress={onPressed}>
        <MaterialIcons name={icon} color={'#fff'} size={24} />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems:'center'
    },
    iconButtonLabel: {
        color: '#fff',
      marginTop:12  
    },
})