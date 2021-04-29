import React from 'react'
import { Text, View } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const Profile = ()=>{
    return(
        <View style = {{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'lightcoral'}}>
            <Text style ={{fontSize:responsiveFontSize(2),color:'white'}}>Profile Screen</Text>
        </View>
    )
}



export default Profile