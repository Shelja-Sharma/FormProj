import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenSignUp from '../screens/public/SignUp/screen';
import ScreenSignIn from '../screens/public/SignIn/screen';
import DashBoard from '../screens/DashBoard/DashBoard';
import { ImageBackground } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import SplashScreen from '../screens/public/Splash/Splash';
import SelecteditemScr from '../screens/DashBoard/SelectedItemScr';
import AddressScreen from '../screens/DashBoard/AddAddress/AddressScreen';
import PlaceOrder from '../screens/DashBoard/PlaceOrder/PlaceOrder';
import Payment from '../screens/DashBoard/PaymentGateWay/PaymentGateWay';
import DrawerNavi from './DrawerNavi';


const Stack = createStackNavigator()
const StackNavi = () => {
    return (
        <ImageBackground source={require('../assets/images/splash.jpeg')}
         style = {{width:responsiveWidth(100),height:responsiveHeight(100)}}  >
            <NavigationContainer>
                <Stack.Navigator headerMode={false} initialRouteName="Splash">
                    <Stack.Screen name ="Splash" component = {SplashScreen} />
                    <Stack.Screen name="Register" component={ScreenSignUp} />
                    <Stack.Screen name="Login" component={ScreenSignIn} />

                    <Stack.Screen name="DrawerNavi" component = {DrawerNavi} />
                    {/* <Stack.Screen name="Dashboard" component={DashBoard} /> */}
                    <Stack.Screen name="CartItems" component={SelecteditemScr} />
                    <Stack.Screen name="AddressPlace" component={AddressScreen} />
                    <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
                    <Stack.Screen name = "Payment" component = {Payment} />
                </Stack.Navigator>
            </NavigationContainer>
        </ImageBackground>
    )

}



export default StackNavi