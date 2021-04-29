import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import CustomDrawerItem from './CustomDrawerItems'

const CustomDrawerContent = ({navigation,props}) => {
    // console.log("property is",props)
    var value
    var check
    var newvalue
    
    useEffect(async()=>{
         value = await AsyncStorage.getItem("LoginKey")
         if(value != null){
             console.log("value of store is",JSON.parse(value).email)
         }
       
    },[])
    const drawerArr = [ {
        optionName: 'Home', naviValue: 'Dashboard',
        // optionImg: require('../../../assets/images/userImage.jpeg')
        iconName:"md-home"
    }, {
        optionName: 'My Account', naviValue: 'Profile',
        iconName:"md-person-circle"
    }, {
        optionName: 'My order', naviValue: 'PlaceOrder',
        iconName:"basket"
    },{
        optionName: 'Shopping Cart', naviValue: 'CartItems',
        iconName:"cart-sharp"
    },
    {
        optionName: 'Contact Us', naviValue: 'CartItems',
        iconName:"call"
    },
    {
        optionName: 'Setting', naviValue: 'CartItems',
        iconName:"md-settings"
    },
    // {
    //     optionName: 'Logout', naviValue: ()=>(LogOutMethod),
    //     iconName:"power-sharp"
    // },
   ]


    return (
        <View style={{ flex: 1, backgroundColor: 'lightcoral', paddingVertical: responsiveHeight(3), paddingHorizontal: responsiveWidth(2) }}>

            <View style={{ alignItems: 'center' }}>
                <Image source={require("../../../assets/images/userImage.jpeg")}
                    style={{ width: responsiveWidth(27), height: responsiveHeight(15), borderRadius: 50 }}></Image>
                <Text style={{ fontSize: responsiveFontSize(2.5), marginTop: responsiveHeight(1) }}>JSON.parse(value)hello</Text>
            </View>
            {
                drawerArr.map((item, index) => {
                    return (
                        <CustomDrawerItem idx = {index} name={item.optionName} iconname = {item.iconName} onpress={() => navigation.navigate(item.naviValue)} />
                    )
                })
            }
    
        </View>
    )
}



export default CustomDrawerContent