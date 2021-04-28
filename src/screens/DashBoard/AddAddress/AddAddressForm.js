import { Formik } from 'formik'
import React, { useState } from 'react'
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import CustomInput from '../../../components/atoms/CustomInput'
import { Picker } from '@react-native-community/picker';

const AddAddressForm = (props) => {

    const { onSubmit } = props
    // const [stateIs, setState] = useState('')
    const INPUT_FILEDS = [
        { name: 'name', label: 'Name' },
        { name: 'pinCode', label: 'PinCode', num: 'number' },
        { name: 'address', label: 'Address' },
        { name: 'state', label: 'State' },
    ]

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Required";
        }
        if (!values.pinCode) {
            errors.pinCode = "Required";
        }
        if (!values.address) {
            errors.address = "Required"
        }
        if (!values.state) {
            errors.state = "Required"
        }
        return errors;
    };

    return (

        <Formik
            validate={validate}
            initialValues={{
                name: '',
                pinCode: '',
                address: '',
                state: '',
                // stateIs: ''

            }}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

                <ScrollView style={{ paddingHorizontal: responsiveWidth(6) }}>

                    {INPUT_FILEDS.map((field, index) => {

                        return (
                            <CustomInput
                                key = {index}
                                label={field.label}
                                keyVal={index.toString}
                                name={field.name}
                                keyBoardtype={field.num}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                errors={errors}
                                secureTextEntry={field.secureText}
                                touched={touched}
                            // hide={secure}
                            />
                        )
                    }
                    )}
                    {/* <Picker

                        selectedValue={values.stateIs}

                        style={{ height: 50, width: responsiveWidth(80), backgroundColor: 'blue' }}
                        onValueChange={values.stateIs}>

                        <Picker.Item label="helo" value="hp" />
                        <Picker.Item label="Delhi" value="delhi" />
                        <Picker.Item label="Himachal" value="Himachal" />
                    </Picker> */}

                    <TouchableOpacity onPress={handleSubmit} style={{ marginBottom: responsiveHeight(70), backgroundColor: 'lightcoral', alignItems: 'center', paddingVertical: responsiveHeight(1.5) }}>
                        <Text style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}>Add Address</Text>
                    </TouchableOpacity>
                    {/* <Button onPress={handleSubmit} title="Add Address" color="lightcoral" /> */}
                </ScrollView>
            )}
        </Formik>

    )
}

export default AddAddressForm