import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Entypo from 'react-native-vector-icons/Entypo'
import ContextMenu from "react-native-context-menu-view";

const Profile = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightcoral' }}>
            <Text style={{ fontSize: responsiveFontSize(2), color: 'white' }}>Profile Screen</Text>
            <ContextMenu
                actions={[{ title: "Title 1" }, { title: "Title 2" }]}
               
                onPress={(e) => {
                    console.warn(
                        `Pressed ${e.nativeEvent.name} at index ${e.nativeEvent.index}`
                    );
                }}
            >
      
      <View style={{width:responsiveWidth(40),height:responsiveHeight(50),backgroundColor:'blue'}} >
          <TouchableOpacity onPress= {()=>alert("on title")}>
             <Text>title</Text>
          </TouchableOpacity>
        
      </View>
                {/* <TouchableOpacity style={{
                    position: 'absolute',
                    right: responsiveWidth(2),
                    top: responsiveHeight(2)
                }}>
                    <Entypo name="dots-three-vertical" size={30} color="white" /> */}
                    {/* <Image source={require('../../assets/images/logout.png')}
                        resizeMode="contain" style={{ marginRight: responsiveWidth(5), width: responsiveWidth(7), height: responsiveHeight(7) }} /> */}
                {/* </TouchableOpacity> */}
            </ContextMenu>
        </View>
    )
}


export default Profile