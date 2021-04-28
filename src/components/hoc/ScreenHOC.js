import React, { Children } from 'react'
import { ImageBackground, StatusBar, Text, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { images } from '../../Theme/AppImages'

const ScreenHOC = (props)=>{
    const {heading} = props
    return(
        <ImageBackground source = {require('../../assets/images/bg1.jpeg')} style = {{flex:1,width:responsiveWidth(100),height:responsiveHeight(100)}}>
           {/* <StatusBar backgroundColor = 'cornflowerblue' /> */}
            <Text style = {{fontSize:responsiveFontSize(3),color:'black',alignSelf:'center',marginTop:responsiveHeight(10)}}>{heading}</Text>
            {props.children}
        </ImageBackground>
    )
}


export default ScreenHOC