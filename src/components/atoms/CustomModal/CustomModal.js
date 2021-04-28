import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
// import { RadioButton } from 'react-native-paper';
import { useSelector } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
const checkedData = require('../../../shared/json/checkItem.json')

export default class CustomModal extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: checkedData,
           
        }
    }
    //  onApplyMethod = () => {

    //     var keys = this.state.data.map((itm) => itm.key)
    //     var checks = this.state.data.map((t) => t.checked)
    //     let Selected = []
    //     for (let i = 0; i < checks.length; i++) {
    //         if (checks[i] == true) {
    //             Selected.push(keys[i])
    //         }
    //     }
    //     this.props.modalClose(Selected)
    // }
    onApplyMethod = () => {
        let checks = []
        checks = this.state.data.filter((t) => {
            if (t.checked)
                return t.key
        })
        let selected = []
        checks.map((obj) => selected.push(obj.key))

        this.props.modalClose(selected)
    }

    checkedMethod = (id) => {
        let newData = [...this.state.data]
        const index = newData.findIndex(x => x.id === id)
        let checkedValue = newData[index].checked
        newData[index].checked = !checkedValue
        this.setState({ data: newData })
    }

     checkedMethod = (id) => {
        const data = this.state.data
        const index = data.findIndex(x => x.id === id)
        // console.log("data in index is is", data[index].checked)
        data[index].checked = !data[index].checked
        this.setState(data)
    }
    render(){
        return (
            <View>
                <Modal style={styles.modalStyle}
                    // onBackdropPress={() => this.props.modalClose()}
                    isVisible={this.props.modalVisible} >
                    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: responsiveWidth(2), paddingVertical: responsiveHeight(2) }}>
                        <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: 'lightcoral' }}>Category</Text>
    
                        {
                            this.state.data.map((item, key) => {
                                return (
                                    <TouchableOpacity key={key} style={{ flexDirection: 'row', alignItems: 'center' }}
                                        onPress={() => this.checkedMethod(item.id)}>
                                        <CheckBox value={item.checked} onValueChange={() => {this.checkedMethod(item.id)}} />
                                        <Text style={{ fontSize: responsiveFontSize(1.7),fontWeight:"bold" }}>{item.key.toUpperCase()}</Text>
                                    </TouchableOpacity>
                                )
                            })

                        }
    
                        <TouchableOpacity onPress={() =>{this.onApplyMethod()}} style={styles.applyStyle}>
                            <Text style={{ fontSize: responsiveFontSize(2) ,fontWeight:"bold"}}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }

}

//using functional component

// const CustomModal = (props) => {
//     const { modalVisible, modalClose } = props
//     const [data, setData] = useState(checkedData)
//     console.log(" custom modal is r")

//     const onApplyMethod = () => {

//         var keys = data.map((itm) => itm.key)
//         var checks = data.map((t) => t.checked)
//         let Selected = []
//         for (let i = 0; i < checks.length; i++) {
//             if (checks[i] == true) {
//                 Selected.push(keys[i])
//             }
//         }
//         modalClose(Selected)
//     }

//     const checkedMethod = (id) => {
       
//         const index = data.findIndex(x => x.id === id)
//         console.log("data in index is is", data[index].checked)

//         data[index].checked = !data[index].checked
//         setData(data)
//     }

//     return (
//         <View>
//             <Modal style={styles.modalStyle}
//                 onBackdropPress={() => modalClose()}
//                 isVisible={modalVisible} >
//                 <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: responsiveWidth(2), paddingVertical: responsiveHeight(2) }}>
//                     <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: responsiveFontSize(2.5), color: 'lightcoral' }}>Category</Text>

//                     {

//                         data.map((item, key) => {

//                             return (
//                                 <TouchableOpacity key={key} style={{ flexDirection: 'row', alignItems: 'center' }}
//                                     onPress={(id) => checkedMethod(item.id)}>
//                                     <CheckBox value={item.checked} onValueChange={(id) => checkedMethod(item.id)} />
//                                     <Text style={{ fontSize: responsiveFontSize(2) }}>{item.key}</Text>
//                                 </TouchableOpacity>
//                             )
//                         })


//                     }

//                     <TouchableOpacity onPress={() => onApplyMethod()} style={styles.applyStyle}>
//                         <Text style={{ fontSize: responsiveFontSize(2) }}>Apply</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Modal>
//         </View>
//     )
// }

// export default CustomModal

//end functional component


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
        right: responsiveWidth(0.1),
        top: responsiveHeight(5),
        height: responsiveHeight(30),
        width: responsiveWidth(50)
    },
    applyStyle: {
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(1),
        alignSelf: 'center',
        backgroundColor: 'lightcoral'
    }
})


/// radio button 
{/* <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                            color="lightcoral"
                        />
                        <Text style={{ fontSize: responsiveFontSize(2), color: 'lightcoral' }}>By name</Text>
                    </View>

                    { 
                        checked === 'first' ?
                        <View style={{ position: 'absolute', top: responsiveHeight(4),right:responsiveWidth(2)}}>   
                           <TouchableOpacity 
                           style = {[styles.optionStyle,{marginBottom:responsiveHeight(1)}]} 
                           onPress = {()=>{
                            //sortData(1),
                           modalClose()}}>
                               <Text style = {styles.textStyle} >Sort A-Z</Text>
                           </TouchableOpacity>
                           <TouchableOpacity  style = {styles.optionStyle} onPress = {()=>
                            {
                                //reverseSort(),
                                modalClose()}}>
                               <Text style = {styles.textStyle}>Sort Z-A</Text>
                           </TouchableOpacity>
                        </View>:
                        null
                    } */}

{/* <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                            color="lightcoral"
                        />
                        <Text style={{ fontSize: responsiveFontSize(2), color: 'lightcoral' }}>
                            By Price
                        </Text>
                        { 
                        checked === 'second' ?
                        <View style={{ position: 'absolute', top: responsiveHeight(3),right:responsiveWidth(2)}}>   
                           <TouchableOpacity 
                           style = {[styles.optionStyle,{marginBottom:responsiveHeight(1)}]} 
                      >
                               <Text style = {styles.textStyle}>Low-High</Text>
                           </TouchableOpacity>
                           <TouchableOpacity  style = {styles.optionStyle}>
                               <Text style = {styles.textStyle}>High-Low</Text>
                           </TouchableOpacity>
                        </View>:
                        null
                    }
                    </View> */}
                    // <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    //     <RadioButton
                    //         value="Default"
                    //         status={checked === 'Default' ? 'checked' : 'unchecked'}
                    //         onPress={() => setChecked('Default')}
                    //         color="lightcoral"
                    //     />
                    //     <Text style={{ fontSize: responsiveFontSize(2), color: 'lightcoral' }}>
                    //        Default
                    //     </Text>
                    // </View>
 // console.log("modal values is", modalVisible)

    // const sortData = (sort)=>{
    //     console.log("sorted data is",sort)
    //     selector.sort((a, b) => {
    //         let fa = a.title.toLowerCase(),
    //             fb = b.title.toLowerCase();

    //         if (fa < fb) {
    //             return -1;
    //         }
    //         if (fa > fb) {
    //             return 1;
    //         }
    //         return 0;
    //     });
    // }
    // const reverseSort = (s)=>{
    //     selector.sort().reverse((a, b) => {
    //         let fa = a.title.toLowerCase(),
    //             fb = b.title.toLowerCase();

    //         if (fa < fb) {
    //             return -1;
    //         }
    //         if (fa > fb) {
    //             return 1;
    //         }
    //         return 0;
    //     });
    //     console.log("new array is",selector)
    // }
    // const priceLowToHighSort = ()=>{
    //     selector.sort((a, b) => {
    //         return a.price - b.price;
    //     });
    // }