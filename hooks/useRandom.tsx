import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export const useRandom = () => {

    const [hex, setHex] = useState(`#ffffff`)

    const randomize = () => {
        
        var tempHex = "#";
        for (let index = 0; index < 3; index++) {

            var randomNumb= (Math.floor(Math.random() * 255 )).toString(16);
            var doubleDigit = randomNumb.toString.length == 1 ? "0" + randomNumb : randomNumb;

            tempHex = tempHex + doubleDigit;

        }
        
        setHex(tempHex)
        
    };


    return{
        hex,
        randomize
    }   
}