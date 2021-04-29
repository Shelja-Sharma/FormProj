import React, { useEffect } from 'react'
import DashBoard from '../screens/DashBoard/DashBoard';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/atoms/CustomDrawer/CustomDrawerContent';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator(); 
const DrawerNavi = () => {
    
    
    return(
      <Drawer.Navigator drawerStyle = {{width:responsiveWidth(65)}} drawerContent = {(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Dashboard" component={DashBoard} />   
      </Drawer.Navigator>
    )
}


export default DrawerNavi