import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { RadioButton } from 'react-native-paper';
const checkedData = require('../../../shared/json/checkItem.json')

export default function SortingModal(props) {

    const [value, setValue] = React.useState('default');

    return (
        <Modal style={styles.modalStyle}
            onBackdropPress={() => props.modalClose(value)}
            isVisible={props.modalVisible}>
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: responsiveWidth(3), paddingVertical: responsiveHeight(2) }}>
                <Text style={{ color: 'gray' }}>SORT BY</Text>
                <View style={{ width: responsiveWidth(100), borderWidth: 0.5, alignSelf: 'center', marginTop: responsiveHeight(1) }} />

                <RadioButton.Group onValueChange={
                    value => {
                        setValue(value)
                        console.log("value clicked is", value)
                        props.modalClose(value)
                    }
                } value={value}

                >
                    {/* <RadioButton.Item label="Default" value="default" labelStyle={{ fontWeight: "bold" }} /> */}
                    <RadioButton.Item label="Star Rating" value="Star" labelStyle={{ fontWeight: "bold" }} />
                    <RadioButton.Item label="Price-- Low to High" value="LowToHigh" labelStyle={{ fontWeight: "bold" }} />
                    <RadioButton.Item label="Price-- High to Low" value="HighToLow" labelStyle={{ fontWeight: "bold" }} />

                </RadioButton.Group>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    optionStyle: {
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(1),
        backgroundColor: 'lightcoral'
    },
    textStyle: {
        fontSize: responsiveFontSize(2),
        color: 'white',
        fontWeight: 'bold'
    },
    modalStyle: {
        position: 'absolute',
        bottom: responsiveWidth(-10),
        //top: responsiveHeight(5),
        height: responsiveHeight(30),
        width: responsiveWidth(100),
        alignSelf: 'center'
    },
    applyStyle: {
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(1),
        alignSelf: 'center',
        backgroundColor: 'lightcoral'
    }
})
