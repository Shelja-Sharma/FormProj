import { Formik } from 'formik'
import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import CustomInput from '../../../components/atoms/CustomInput'
import { Picker } from '@react-native-community/picker';

const AddAddressForm = (props) => {

    const { onSubmit } = props
    const [topicValue, setTopicValue] = useState('Technical issue');
    const INPUT_FILEDS = [
        { name: 'name', label: 'Name' },
        { name: 'pinCode', label: 'PinCode', num: 'number' },
        { name: 'address', label: 'Address' },

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

            }}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (

                <ScrollView style={{ paddingHorizontal: responsiveWidth(6) }}>

                    {INPUT_FILEDS.map((field, index) => {

                        return (
                            <CustomInput
                                key={index}
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

                    <Text style={styles.pickerHeading}>State</Text>
                    <View style={styles.pickerViewStyle}>
                        <Picker
                            selectedValue={values.state}
                            style={{ color: 'maroon' }}
                            onValueChange={itemValue => setFieldValue('state', itemValue)}
                            mode="dialog"
                            itemStyle={{ backgroundColor: "grey", color: "blue", fontSize: 17 }}
                        >
                            <Picker.Item label='Select your language' />
                            <Picker.Item label="Himachal Pradesh" value="Himachal Pradesh" />
                            <Picker.Item label="Chandigarh" value="Chandigarh" />
                            <Picker.Item label="Haryana" value="Haryana" />
                        </Picker>
                    </View>


                    <TouchableOpacity onPress={handleSubmit} style={styles.addAddressStyle}>
                        <Text style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}>Add Address</Text>
                    </TouchableOpacity>

                </ScrollView>
            )}
        </Formik>

    )
}

export default AddAddressForm

const styles = StyleSheet.create({
    addAddressStyle: {
        marginBottom: responsiveHeight(70),
        backgroundColor: 'lightcoral',
        alignItems: 'center',
        paddingVertical: responsiveHeight(1.5)
    },
    pickerViewStyle: {
        marginBottom: responsiveHeight(2),
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        color: 'maroon'
    },
    pickerHeading: {
        fontSize: responsiveFontSize(2),
        color: 'lightcoral',
        fontWeight: 'bold'
    }
})