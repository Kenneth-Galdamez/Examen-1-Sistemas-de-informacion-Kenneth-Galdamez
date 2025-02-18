import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export const useTemperature = () => {
    const [temp, setTemp] = useState(20);
    const [rgb, setRGB] = useState(`rgb(255, 255, 255)`)

    const evalTemp = (val = "+") => {
        var LocTemp = temp;
        if (val == "+") {
            LocTemp = temp + 1;
            setTemp(LocTemp);
        }
        if (val == "-" ) {
            LocTemp = temp - 1;
            setTemp(LocTemp);
        }
    };

    useEffect(()=>{
        if(temp < 15){
            setRGB(`rgb(50,50,255)`)
        };
        if(temp >= 15 && temp <= 25){
            setRGB(`rgb(50,250,50)`)
        };
        if(temp > 25){
            setRGB(`rgb(250,50,55)`)
        }
    }, [temp])

    return{
        temp,
        rgb,
        evalTemp
    }   
}