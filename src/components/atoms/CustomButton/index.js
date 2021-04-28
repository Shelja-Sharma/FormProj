import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'


export default (props)=>{
    const {label,onPress} = props
    return(
        <TouchableOpacity onPress = {onPress} style = {{backgroundColor:'green',alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:responsiveHeight(4),width:responsiveWidth(80),borderRadius:10,height:responsiveHeight(8)}}>
                    <Text style = {{color:'white',fontSize:responsiveFontSize(2.5)}}>{label}</Text>
        </TouchableOpacity>
    )
}

