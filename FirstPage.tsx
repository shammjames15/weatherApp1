import * as  React from "react";
import { Text,StyleSheet ,View} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput} from 'react-native-paper';


const FirstPage = ({ navigation }: any) => {
    const { useState, useRef } = React;
    const [countryName, setCountryName] = useState("")
    const [minValueErr, setMinValueErr] = useState(true)

    const errorRef = useRef(false)
   const [title] = useState("submit");

    
    const handleButton = () => {
        navigation.push('Country', { countryName })
    }

    const handleDifference = (value: string) => {
        if (value.length < 3) {
            setMinValueErr(true)
            errorRef.current = true;
        
        }
        else {
            setMinValueErr(false)
            errorRef.current = false;
        }
        setCountryName(value)
    }
    const styles = StyleSheet.create({
        button: {
            backgroundColor:"#6600ff", 
            marginTop:45, 
            borderRadius:5, 
            width:100, 
            justifyContent: "center", 
            alignSelf: "center"
        },
        text: {
            fontSize: 16,
            lineHeight: 30,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
            left:20
          },
      });

    return (
        <View style={{flex: 1, justifyContent: "center", width: "55%", alignSelf: "center"}}>
      <TextInput
      label="Enter Country"
      value={countryName}
      onChangeText={handleDifference}
      mode="outlined"
    
    />

    <TouchableOpacity style={styles.button} onPress={handleButton}  disabled={minValueErr}>
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity> 
    </View>
    );
};
export default FirstPage;
