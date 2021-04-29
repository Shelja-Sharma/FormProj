import { Formik } from 'formik'
import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';
import SignInForm from './form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../../../redux/store';

const ScreenSignIn = ({ navigation }) => {
    const state = store.getState();
    const [check, setCheck] = useState(false)
    console.log("state in store is", state)

    const selector = useSelector(state => state.authRedu.data)
    const handleSubmit = async (values) => {

        for (let i = 0; i < selector.length; i++) {

            if (selector[i].email.toLowerCase() == values.email.toLowerCase() && selector[i].pass == values.pass) {
                setCheck(true)
                const jsonValue = JSON.stringify(values)
                await AsyncStorage.setItem("LoginKey", jsonValue)
                 console.log("selector data is",selector)
                navigation.replace("DrawerNavi",{userName:'shelja'})
                // alert("Successfully Login ")
                return
            }
        }
        if (!check) {
            alert("Please Enter valid Credientials")
        }

    }
    return (
        <ScrollView style={{ paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(5) }}>
            <Text style={styles.headingStyle}>Login</Text>
            <SignInForm onsubmit={handleSubmit} />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: responsiveFontSize(2) }}>Don't have an account ?</Text>
                <TouchableOpacity onPress={() => navigation.replace("Register")}>
                    <Text style={{ fontSize: responsiveFontSize(2.1), color: 'lightcoral' }}>Register</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ScreenSignIn

const styles = StyleSheet.create({
    headingStyle: {
        alignSelf: 'center',
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: 'lightcoral'

    }
})













// import { Formik } from 'formik'
// import React from 'react'
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
// import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

// const Screen = () => {

//     const validate = (values) => {

//         const errors = {};
//         if (!values.email) {
//             errors.email = "Required";
//         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//             errors.email = "Invalid email address";
//         }
//         if (!values.pass) {
//             errors.pass = "Required";
//         }
//         else if (values.pass && (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.pass))) {
//             errors.pass = "Password must contain all character"
//         }
//         return errors;
//     };
//     return (
//         <Formik
//             validate={validate}
//             initialValues={{
//                 email: '',
//                 pass: ''
//             }}
//             onSubmit={values => console.log(values)}
//         >
//             {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
//                 <View style = {{paddingVertical:responsiveHeight(5),paddingHorizontal:responsiveWidth(5)}}>

//                     <Text style = {{fontSize:responsiveFontSize(2),color:'maroon',fontWeight:'bold'}}>Email Address</Text>
//                     <TextInput
//                         onChangeText={handleChange('email')}
//                         onBlur={handleBlur('email')}
//                         value={values.email}
//                         style = {styles.textInputStyle}
//                     />
//                     <Text style = {styles.errorTextStyle}>{touched.email && errors.email}</Text>
//                    <Text style = {{fontSize:responsiveFontSize(2),color:'maroon',fontWeight:'bold'}}>Password</Text>
//                     <TextInput
//                         onChangeText={handleChange('pass')}
//                         onBlur={handleBlur('pass')}
//                         value={values.pass}
//                         style = {styles.textInputStyle}
//                     />
//                      <Text style = {styles.errorTextStyle}>{touched.pass && errors.pass}</Text>
//                     <Button onPress={handleSubmit} title="Submit" color = "maroon" />
//                 </View>
//             )}
//         </Formik>
//     )
// }

// export default Screen

// const styles = StyleSheet.create({
//     textInputStyle:{
//         borderWidth:1,
//         borderRadius:10,
//     },
//     errorTextStyle:{
//         color:'crimson',
//         fontWeight:'bold',
//         marginBottom:responsiveHeight(0.6),
//         marginTop:responsiveHeight(0.2),
//         textAlign:'center'
//     }
// })