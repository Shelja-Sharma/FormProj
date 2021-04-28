import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CustomInput from '../../../components/atoms/CustomInput';
import store from '../../../redux/store';



const SignUpForm = (props) => {

    const { onSubmit } = props
    const [secure, setSecure] = useState(false)
    let existingEmail = []
    const selector = useSelector(state => state.authRedu.data)
    // const selector1 = useSelector(state => state.dataRedu.itemAdded)
    // console.log("selector value",selector)
    // console.log("selector value1",selector1)
   
    useEffect(() => {
        getPreviousData();
    }, [])
    const getPreviousData = ()=>{
        for(let i = 0; i<selector.length;i++)
        {
            existingEmail.push(selector[i].email);
        }
       // console.log("array value is",existingEmail)
    }

    const INPUT_FILEDS = [
        { name: 'userName', label: 'UserName' },
        { name: 'email', label: 'Email' },
        { name: 'pass', label: 'Password', secureText: true },
        // { name: 'confirmPass', label: 'Confirm Password',secureText:true }
    ]
    const validate = (values) => {

        const errors = {};
        if (!values.userName) {
            errors.userName = "Required"
        }
        if (!values.email.toLowerCase()) {
            errors.email = "Required";
        } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(values.email.toLowerCase())) {
            errors.email = "Invalid email address";
        }
        else if (existingEmail.includes(values.email.toLowerCase())) {
            errors.email = "Email already exist"
        }
        if (!values.pass) {
            errors.pass = "Required";
        }

        else if (values.pass && (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.pass))) {
            errors.pass = "Password must contain all character"
        }

        // if (!values.confirmPass) {
        //     errors.confirmPass = "Required"
        // }
        // else if (values.confirmPass && (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.pass))) {
        //     errors.confirmPass = "Password must contain all character"
        // }

        return errors;
    };
    return (
        <Formik
            validate={validate}
            initialValues={{
                userName: '',
                email: '',
                pass: '',
                // confirmPass: ''
            }}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

                <View style={{ paddingVertical: responsiveHeight(5), paddingHorizontal: responsiveWidth(1) }}>

                    {INPUT_FILEDS.map((field, index) => {

                        return (
                            <CustomInput
                                label={field.label}
                                keyVal={index.toString}
                                name={field.name}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors}
                                secureTextEntry={field.secureText}
                                touched={touched}
                                hide={secure}
                                show={() => { setSecure(!secure) }}
                            />
                        )
                    }

                    )}

                    <Button onPress={handleSubmit} title="Register" color="lightcoral" />
                </View>
            )}
        </Formik>
    )
}
export default SignUpForm


