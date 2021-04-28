import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { AddressAction } from '../../../redux/Action'
import AddAddressForm from './AddAddressForm'

const AddressScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const handleSubmit = async (values) => {

        console.log("value in handle submit", values)
        const jsonValue = JSON.stringify(values)
        await AsyncStorage.setItem("AddressKey", jsonValue)
        dispatch(AddressAction(values))

        navigation.navigate("PlaceOrder")

    }
    return (
        <View>
            <View style={styles.headingAreaStyle}>
                <TouchableOpacity onPress={() => navigation.navigate("CartItems")} style={{ position: 'absolute', top: responsiveHeight(2), left: responsiveWidth(2) }}>
                    <Ionicons name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: responsiveWidth(3), paddingVertical: responsiveHeight(2) }}>
                <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>Add a new address</Text>
            </View>
            <AddAddressForm onSubmit={handleSubmit} />


        </View>
    )
}



export default AddressScreen


const styles = StyleSheet.create({
    headingAreaStyle: {

        width: responsiveWidth(100),
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(8),
        backgroundColor: "lightcoral"
    },
    headingStyle: {
        //textAlign: 'center',
        fontSize: responsiveFontSize(3),
        color: "white",
        // marginBottom: responsiveHeight(2)
    },
})