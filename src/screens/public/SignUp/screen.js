import React, { useCallback } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useDispatch } from 'react-redux'
import { RegisterAction } from '../../../redux/Action'
import store from '../../../redux/store'

import SignUpForm from './form'

const ScreenSignUp = ({ navigation }) => {
    const state = store.getState();
    console.log("state in store is", state)
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        console.log("on handle method ", values)
        // if(values.pass == values.confirmPass)
        // {
        dispatch(RegisterAction(values))
        navigation.replace("Login")
        // alert("Successfully Register")
        // }
        // else{
        //     alert("password do not matched")
        // }
    }
    return (
        <ScrollView style={{ paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(5) }}>
            <Text style={styles.headingStyle}>Registration</Text>
            <SignUpForm onSubmit={handleSubmit} />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: responsiveFontSize(2) }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace("Login")}>
                    <Text style={{ fontSize: responsiveFontSize(2.1), color: 'lightcoral' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ScreenSignUp

const styles = StyleSheet.create({
    headingStyle: {
        alignSelf: 'center',
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: 'lightcoral'
    }

})