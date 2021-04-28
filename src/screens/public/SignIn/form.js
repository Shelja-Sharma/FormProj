import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';
import CustomInput from '../../../components/atoms/CustomInput';

const SignInForm = (props) => {
    const { onsubmit } = props

    const [secure,setSecure] = useState(false)
    const INPUT_FILEDS = [{ name: 'email',label:'Email' },
    { name: 'pass', secureText: true,label:'Password' }]

    const validate = (values) => {
        const errors = {};
        if (!values.email.toLowerCase()) {
            errors.email = "Required";
        } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(values.email.toLowerCase())) {
            errors.email = "Invalid email address";
        }
        if (!values.pass) {
            errors.pass = "Required";
        }
        else if (values.pass && (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.pass))) {
            errors.pass = "Password must contain all character"
        }
        return errors;
    };
    return (
        <Formik
            validate={validate}
            initialValues={{
                email: '',
                pass: ''
            }}
            onSubmit={onsubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={{ paddingVertical: responsiveHeight(5), paddingHorizontal: responsiveWidth(1) }}>
                    {INPUT_FILEDS.map((field, index) => (
                        <CustomInput
                            keyVal={index}
                            label = {field.label}
                            name={field.name}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            errors={errors}
                            secureTextEntry={field.secureText}
                            touched={touched}
                            hide = {secure}
                            show = {()=>{setSecure(!secure)}}   
                             />
                    ))}
                    <Button onPress={handleSubmit} title="Login" color="lightcoral" />
                </View>
            )}
        </Formik>
    )
}
export default SignInForm
