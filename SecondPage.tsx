import * as React from "react";
import {Image, Text, SafeAreaView,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";



const SecondPage = ({ route, navigation }: any) => {
    const { countryName } = route.params
    const { useLayoutEffect, useState } = React;
    const [countryDe, setCountryDe] = useState({
        "flags": { "png": "https://" }, "capital": "", "latlng": [0, 0], "population": ""
    })

    const [wrongCountry, setwrongCountry] = useState(false);
    
    useLayoutEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((response) => {
                setCountryDe(response.data[0])
            })
            .catch((error) => {
                setwrongCountry(true)
            })
    }, [])

    const [title] = useState("Capital weather");

    const styles = StyleSheet.create({
        button: {
            backgroundColor:"#6600ff", 
            marginTop:45, 
            borderRadius:5, 
            width:300, 
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
        <SafeAreaView style={{flex: 1, width: "90%", alignSelf: "center"}}>
        <Text style={{fontWeight:"bold", fontSize:25, alignSelf: "center", color:"black"}}>Country Details</Text>
        <Image style={{width: 250, height: 250,marginLeft:15,marginTop:40}} source={{ uri: countryDe.flags.png }} />
        <Text style={{fontSize:20,padding:15,marginTop:20}}>Capital : {countryDe?.capital}</Text>
        <Text style={{fontSize:20,padding:15}}>Country's Population : {countryDe?.population}</Text>
        <Text style={{fontSize:20,padding:15}}>Latitude : {countryDe?.latlng[0]} deg</Text>
        <Text style={{fontSize:20,padding:15}}>Longitude : {countryDe?.latlng[1]} deg</Text>
    
  <TouchableOpacity style={styles.button} onPress={() => { navigation.push('Weather', { capital: countryDe.capital }) }} >
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity> 
    </SafeAreaView>
    );
};
export default SecondPage;
