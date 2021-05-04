import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { color } from 'react-native-reanimated';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';

export default (props) => {
    const { handleChange,keyVal,handleBlur, keyBoardtype,name, value, errors, show, hide, touched, secureTextEntry, label } = props
 
    return (
        <View key = {keyVal}>
            <Text style={{ fontSize: responsiveFontSize(2), color: 'lightcoral', fontWeight: 'bold' }}>{label}</Text>

            <View style={styles.inputView}>
                <TextInput
                    onChangeText={handleChange(name)}
                    onBlur={handleBlur(name)}
                    style={styles.textInputStyle}
                    keyboardType= {keyBoardtype ? 'numeric': 'default'}
                    maxLength = {keyBoardtype ? 6 :null}
                    secureTextEntry={!hide ? secureTextEntry : false}
                />

                <TouchableOpacity  key ={keyVal} onPress={show} style={{ justifyContent:'center' }}>
                    {
                        secureTextEntry ? <Feather name={hide ? "eye" : "eye-off"} size={20} /> : null
                    }
                </TouchableOpacity>
            </View>

            <Text style={styles.errorTextStyle}>
                {errors[name] && touched[name] ? errors[name] : ""}
            </Text>

        </View>

    )
}

const styles = StyleSheet.create({
    inputView: {
        flex: 1,
        borderWidth: 1,
        width: responsiveWidth(87),
        height: responsiveHeight(5),
        flexDirection: 'row',
        borderRadius:10,
        
    },
    textInputStyle: {

        borderRadius: 10,
        width: responsiveWidth(80),
        height: responsiveHeight(5),
        paddingLeft:responsiveWidth(1),
        paddingHorizontal:responsiveHeight(1),
        color:'maroon'

    },
    errorTextStyle: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: responsiveHeight(0.6),
        marginTop: responsiveHeight(0.2),
        marginLeft: responsiveWidth(0.2)
        //textAlign: 'center'
    }
})
























// import React from 'react'
// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


// export default (props) => {
//     const { name,handleChange,onblur, onchangeText,errors, keyboardtype,value ,multiline } = props;

//     return (
//         <View style={{marginTop: responsiveHeight(2) }}>
//             <Text style={styles.textStyle}>{name}</Text>
//             <TextInput style={styles.textinputStyle}   
//                 onChangeText={handleChange(name)}
//                 clearTextOnFocus={true}
//                 clearButtonMode = "always"
//                // onBlur={onblur(name)}
//                 keyboardType={keyboardtype ? 'numeric' : 'default'}
//                 multiline = {multiline}     
//             />
//             <Text style = {{fontSize:responsiveFontSize(3)}}>{errors.name}</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     textStyle: {
//         fontSize: responsiveFontSize(2),
//         color:'black',
//         fontWeight:'bold'
//     },
//     textinputStyle: {
//         elevation:1 ,

//         paddingHorizontal: responsiveHeight(2),
//         fontSize: responsiveFontSize(2),
//         height: responsiveHeight(7),
//         width: responsiveWidth(90),
//         color:'black',
//     }
// })