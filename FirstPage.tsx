import * as  React from "react";
import {View,Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput} from 'react-native-paper';


const FirstPage = ({ navigation }: any) => {
    const { useState, useRef } = React;
    const [countryName, setCountryName] = useState("")

    const handleButton = () => {
        navigation.push('Country', { countryName })
    }

   const handleChange=(text:string) => {
    setCountryName(text)
   }
   
    return (
        <View style={{flex: 1, justifyContent: "center", width: "55%", alignSelf: "center"}}>
      <TextInput
      label="Enter Country"
      value={countryName}
        onChangeText={text =>handleChange(text)}
      mode="outlined"
    
    />
            <View style={{margin:10,width:150,alignSelf: "center"}}>
    <Button onPress={handleButton} disabled={!countryName} title="submit" color="blue" />
    </View>

    </View>
    );
};
export default FirstPage;
