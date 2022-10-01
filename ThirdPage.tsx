import axios from "axios";
import React from "react";
import { useState, useLayoutEffect } from "react";
import { Image, Text, SafeAreaView } from "react-native";

const ThirdPage = ({  route }: any) => {

    const { capital } = route.params

    const [countryDe, setCountryDe] = useState({
        "current": { "weather_icons": ["https://"], "temperature": "", "precip": "", "wind_speed": "" }
    })

    useLayoutEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=2110ea1bf55761a18574adb318c0e27b&query=${capital}`)
            .then((response) => {
                setCountryDe(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <SafeAreaView style={{flex: 1, width: "55%", alignSelf: "center"}}>
        <Text style={{fontWeight:"bold", fontSize:20, alignSelf: "center",padding:16, color:"black"}}>Weather Details</Text>
        <Image style={{width: 120,height: 120,marginTop:140,marginLeft:14}} source={{ uri: countryDe?.current.weather_icons[0] }} />
        <Text style={{fontSize:18,padding:14}}>Temperature : {countryDe?.current.temperature}°C</Text>
        <Text style={{fontSize:18,padding:14}}>Precipitation : {countryDe?.current.precip}%</Text>
        <Text style={{fontSize:18,padding:14}}>Wind Speed : {countryDe?.current.wind_speed} kmph</Text>
    </SafeAreaView>
    );
};

export default ThirdPage;
