import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CustomDrawerItem = (props)=>{
    const {name,iconname, image, idx,onpress} = props

    // console.log("iconName is ",iconname)
    return(
        <View style = {{marginTop:responsiveHeight(1)}} key = {idx}>
            <TouchableOpacity onPress={onpress} style = {styles.viewStyle}>
                    {/* <Image source = {image} style ={{width:responsiveWidth(5),height:responsiveHeight(5)}} /> */}
                    <Ionicons name = {iconname} size={30} color="white" />
                    <Text style = {styles.textStyle}>{name}</Text>
            </TouchableOpacity>
            <View style = {{borderWidth:1,borderColor:'lightgray'}}/>
            
        </View>
    )    
}


export default CustomDrawerItem

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:'row',
        paddingVertical:responsiveHeight(1),
        paddingHorizontal:responsiveWidth(3),
        alignItems:'center'
    },
    textStyle:{
        color:'white',
        marginLeft:responsiveWidth(8),
        fontSize:responsiveFontSize(2.2)
    
    }

})