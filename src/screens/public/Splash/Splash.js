import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../../../redux/store';

const SplashScreen = ({navigation})=>{
    const state = store.getState();
    console.log("state in store is",state)

    useEffect(()=>{
        checkStorage();
    },[])
    const checkStorage = ()=>{
        setTimeout(async() => {
        const value = await AsyncStorage.getItem("LoginKey")
        console.log("Async value",value)
        if(value != null)
            {
                navigation.replace('DrawerNavi')
            }
            else{
                // navigation.replace('Dashboard')
                // navigation.replace('Register')
                navigation.navigate('DrawerNavi')
            } 
        }, 2000);
    }

    return(
        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style = {{color:'maroon',fontSize:responsiveFontSize(4),fontWeight:'bold'}}>Happiley</Text>
            <Image source = {require('../../../assets/images/happiley.png')} resizeMode='contain'  style = {{height:responsiveHeight(30),width:responsiveWidth(40)}} /> 
            
        </View>

    )
}


export default SplashScreen