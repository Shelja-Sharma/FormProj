// import React, { useEffect } from 'react'
// import { FlatList, Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
// import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import { useDispatch, useSelector } from 'react-redux'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import { DecrementItemAction, IncrementItemAction, RemoveItemAction } from '../../redux/Action'
// import { useFocusEffect } from '@react-navigation/core'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// const SelecteditemScr = ({ navigation }) => {

//     let bool_val = false;
//     const dispatch = useDispatch()
//     const data = useSelector(state => state.dataRedu.itemAdded)

//     const countArr = useSelector(state => state.dataRedu.countArray)
//     let added_data = [];
//     const Data_here = useSelector(state => state.dataRedu.allData)

//     const getData = () => {
//         data.map((item, index) => {
//             added_data.push(Data_here[item])
//         })
//         added_data.splice(0, 1)
//     }

//     const RemoveItem = (indexVal) => {
//         dispatch(RemoveItemAction(data[indexVal]))
//     }

//     const incrementMethod = (itemIndex) => {
//         dispatch(IncrementItemAction(data[itemIndex]))
//     }
//     const decrementMethod = (itemIndex) => {

//         countArr.map((item, index) => {

//             if (item.index == data[itemIndex]) {
//                 if (item.countVal == 1) {
//                     dispatch(RemoveItemAction(data[itemIndex]))
//                 }
//                 else {
//                     dispatch(DecrementItemAction(data[itemIndex]))
//                 }
//             }
//         })
//     }

//     const renderItemMethod = ({ item, index }) => {
//         return (

//             <View style={styles.flatListItemStyle}>
//                 <Image source={item.pic} resizeMode='contain' style={{ width: responsiveWidth(30), height: responsiveHeight(15) }} />
//                 <View style={{ justifyContent: 'center' }}>
//                     <View style={{ width: responsiveWidth(30), justifyContent: 'center', height: responsiveHeight(10) }}>
//                         <Text style={{ fontSize: responsiveFontSize(2.5), color: 'lightcoral', fontWeight: 'bold' }}>{item.title}</Text>
//                     </View>

//                     <Text style={styles.countTextStyle}>${countArr[index].amount}</Text>
//                 </View>

//                 <View style={{ justifyContent: 'flex-end', position: 'absolute', top: responsiveHeight(1), right: responsiveWidth(3) }}>
//                     <Text style={{ marginBottom: responsiveHeight(0.5), fontWeight: 'bold', color: 'white', fontSize: responsiveFontSize(2) }}>Qty:</Text>
//                     <View style={{ flexDirection: 'row', marginBottom: responsiveHeight(2), alignItems: 'center', justifyContent: 'center', backgroundColor: "lightcoral", paddingVertical: responsiveHeight(1) }}>
//                         <TouchableOpacity onPress={() => decrementMethod(index)}>
//                             <AntDesign name="minus" size={20} color="maroon" />
//                         </TouchableOpacity>

//                         <Text style={styles.countTextStyle}>{countArr[index].countVal}</Text>

//                         <TouchableOpacity onPress={() => incrementMethod(index)}>
//                             <AntDesign name="plus" size={20} color="maroon" />
//                         </TouchableOpacity>
//                     </View>
//                     <TouchableOpacity style={styles.addToCartStyle} onPress={() => RemoveItem(index)} >
//                         <Ionicons name="trash-bin-sharp" size={20} color="gray" />
//                         <Text style={{ fontWeight: 'bold', color: 'white', fontSize: responsiveFontSize(2) }}>Remove</Text>
//                     </TouchableOpacity>
//                 </View>

//             </View>
//         )
//     }

//     const proceedToBuyMethod = async () => {
//         const value = await AsyncStorage.getItem("AddressKey")
//         console.log("Async value", value)
//         if (value != null) {
//             navigation.navigate('PlaceOrder')
//         }
//         else {
//             navigation.navigate('AddressPlace')
//         }
//     }

//     return (
//         <View style={{ flex: 1 }}>
//             {
//                 data.map((item, index) => {
//                     added_data.push(Data_here[item])
//                     bool_val = true
//                 })
//             }

//             <View style={styles.headingAreaStyle}>
//                 <TouchableOpacity onPress={() => navigation.navigate("Dashboard")} style={{ position: 'absolute', top: responsiveHeight(2), left: responsiveWidth(2) }}>
//                     <Ionicons name="arrow-back" size={30} color="white" />
//                 </TouchableOpacity>

//                 <Text style={styles.headingStyle}>My Cart</Text>
//                 <TouchableOpacity style={{
//                     position: 'absolute',
//                     right: responsiveWidth(1),
//                     top: responsiveHeight(2.5),
//                     marginRight: responsiveWidth(5)
//                 }}
//                     onPress={() => navigation.navigate("CartItems")}>
//                     <MaterialIcons name="local-grocery-store" size={30} color="white" />
//                 </TouchableOpacity>
//                 <Text style={styles.cartValueStyle}>{data.length}</Text>

//             </View>

//             <View style={{ marginBottom: responsiveHeight(20) }}>
//                 {
//                     bool_val ?
//                         <FlatList data={added_data} renderItem={renderItemMethod} />
//                         :
//                         <TouchableOpacity onPress={() => navigation.navigate("Dashboard")} style={{ marginTop: responsiveHeight(20), alignItems: 'center', justifyContent: 'center' }}>
//                             <Text style={{ textAlign: 'center', color: 'maroon', fontSize: responsiveFontSize(2.5) }}>Add Item To Cart</Text>
//                         </TouchableOpacity>
//                 }
//             </View>

//             <View style={styles.placeOrderAreaStyle}>

//                 <TouchableOpacity style={[styles.placeOrderStyle, { backgroundColor: 'lightcoral' }]} onPress={() => proceedToBuyMethod()}>
//                     <Text style={{ fontSize: responsiveFontSize(2.5), color: 'white', fontWeight: 'bold' }}>Proceed To Buy</Text>
//                 </TouchableOpacity>
//             </View>

//         </View>
//     )
// }


// export default SelecteditemScr

// const styles = StyleSheet.create({
//     flatListItemStyle: {
//         borderWidth: 1,
//         borderColor: 'lightcoral',
//         flexDirection: 'row',
//         paddingHorizontal: responsiveWidth(2),
//         paddingVertical: responsiveHeight(2),
//         margin: responsiveWidth(1)
//     },
//     countTextStyle: {
//         // marginLeft: responsiveWidth(1),
//         // marginRight: responsiveWidth(1),
//         fontSize: responsiveFontSize(2.5),
//         color: 'black'
//     },
//     placeOrderAreaStyle: {
//         width: responsiveWidth(100),
//         height: responsiveHeight(10),
//         alignItems: 'center',
//         flexDirection: 'row',
//         justifyContent: 'flex-end',
//         position: 'absolute',
//         bottom: responsiveHeight(0.1),
//         backgroundColor: 'white',
//     },
//     viewStyle: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: 'lightblue',
//         paddingHorizontal: responsiveWidth(5),
//         paddingVertical: responsiveHeight(5)
//     },
//     addToCartStyle: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row',
//         // width: responsiveWidth(20),
//         backgroundColor: 'lightcoral',
//         //height: responsiveHeight(5),
//         paddingHorizontal: responsiveWidth(1),
//         paddingVertical: responsiveHeight(1),
//         marginRight: responsiveWidth(1)
//     },
//     cartValueStyle: {
//         color: 'white',
//         position: 'absolute',
//         right: responsiveWidth(5),
//         top: responsiveHeight(1.2),
//         fontWeight: 'bold'
//     },
//     headingAreaStyle: {
//         width: responsiveWidth(100),
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: responsiveHeight(8),
//         backgroundColor: "lightcoral"
//     },
//     headingStyle: {
//         // textAlign: 'center',
//         fontSize: responsiveFontSize(3),
//         color: "white",
//         // marginBottom: responsiveHeight(2)
//     },
//     placeOrderStyle: {
//         paddingHorizontal: responsiveWidth(2),
//         paddingVertical: responsiveHeight(1),
//         alignItems: 'center',
//         marginBottom: responsiveHeight(1),
//         marginRight: responsiveWidth(3)


//     },
// })



import React, { useEffect } from 'react'
import { FlatList, Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useDispatch, useSelector } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { DecrementItemAction, IncrementItemAction, RemoveItemAction } from '../../redux/Action'
import { useFocusEffect } from '@react-navigation/core'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SelecteditemScr = ({ navigation }) => {

    let bool_val = false;
    const dispatch = useDispatch()
    const data = useSelector(state => state.dataRedu.itemAdded)
    // console.log("item added is", data)
    const countArr = useSelector(state => state.dataRedu.countArray)
    // console.log("count array is", countArr)
    let added_data = [];
    const Data_here = useSelector(state => state.dataRedu.allData)
    // console.log("DAta here is", Data_here)

    const getData = () => {
        data.map((item, index) => {
            added_data.push(Data_here[item])
        })
        added_data.splice(0, 1)
    }

    const RemoveItem = (indexVal) => {
        dispatch(RemoveItemAction(data[indexVal]))
    }

    const incrementMethod = (itemIndex) => {
        // console.log("item index is selected", itemIndex)
        dispatch(IncrementItemAction(itemIndex))
    }
    const decrementMethod = (itemIndex) => {

        countArr.map((item, index) => {

            if (item.id == itemIndex) {
                if (item.countVal == 1) {
                    dispatch(RemoveItemAction(itemIndex))
                }
                else {
                    dispatch(DecrementItemAction(itemIndex))
                }
            }
        })
    }

    const renderItemMethod = ({ item, index }) => {
        return (

            <View style={styles.flatListItemStyle}>
                <Image source={item.pic} resizeMode='contain' style={{ width: responsiveWidth(30), height: responsiveHeight(15) }} />
                <View style={{ justifyContent: 'center' }}>
                    <View style={{ width: responsiveWidth(30), justifyContent: 'center', height: responsiveHeight(10) }}>
                        <Text style={{ fontSize: responsiveFontSize(2.5), color: 'lightcoral', fontWeight: 'bold' }}>{item.title}</Text>
                    </View>

                    <Text style={styles.countTextStyle}>${countArr[index].amount}</Text>
                </View>

                <View style={{ justifyContent: 'flex-end', position: 'absolute', top: responsiveHeight(1), right: responsiveWidth(3) }}>
                    <Text style={{ marginBottom: responsiveHeight(0.5), fontWeight: 'bold', color: 'lightcoral', fontSize: responsiveFontSize(2) }}>Qty:</Text>
                    <View style={{ flexDirection: 'row', marginBottom: responsiveHeight(2), alignItems: 'center', justifyContent: 'center', backgroundColor: "lightcoral", paddingVertical: responsiveHeight(1) }}>
                        <TouchableOpacity onPress={() => decrementMethod(item.id)}>
                            <AntDesign name="minus" size={20} color="maroon" />
                        </TouchableOpacity>

                        <Text style={styles.countTextStyle}>{countArr[index].countVal}</Text>

                        <TouchableOpacity onPress={() => incrementMethod(item.id)}>
                            <AntDesign name="plus" size={20} color="maroon" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addToCartStyle} onPress={() => RemoveItem(index)} >
                        <Ionicons name="trash-bin-sharp" size={20} color="gray" />
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: responsiveFontSize(2) }}>Remove</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    const proceedToBuyMethod = async () => {
        const value = await AsyncStorage.getItem("AddressKey")
        console.log("Async value", value)
        if (data.length > 0) {
            if (value != null) {
                navigation.navigate('PlaceOrder')
            }
            else {
                navigation.navigate('AddressPlace')
            }
        } else {
            alert("You have no item to place order")
        }

    }

    return (
        <View style={{ flex: 1 }}>
            {
                data.map((item, idx) => {
                    return (
                        Data_here.map((items, index) => {
                            if (items.id == item) {
                                added_data.push(items)
                                return bool_val = true
                            }
                        })
                    )
                })
            }


            <View style={styles.headingAreaStyle}>
                <TouchableOpacity onPress={() => navigation.navigate("Dashboard")} style={{ position: 'absolute', top: responsiveHeight(2), left: responsiveWidth(2) }}>
                    <Ionicons name="arrow-back" size={30} color="white" />
                </TouchableOpacity>

                <Text style={styles.headingStyle}>My Cart</Text>
                <TouchableOpacity style={{
                    position: 'absolute',
                    right: responsiveWidth(1),
                    top: responsiveHeight(2.5),
                    marginRight: responsiveWidth(5)
                }}
                    onPress={() => navigation.navigate("CartItems")}>
                    <MaterialIcons name="local-grocery-store" size={30} color="white" />
                </TouchableOpacity>
                <Text style={styles.cartValueStyle}>{data.length}</Text>

            </View>

            <View style={{ marginBottom: responsiveHeight(20) }}>
                {
                    bool_val ?
                        <FlatList data={added_data} renderItem={renderItemMethod} />
                        :
                        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")} style={{ marginTop: responsiveHeight(20), alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', color: 'maroon', fontSize: responsiveFontSize(2.5) }}>Add Item To Cart</Text>
                        </TouchableOpacity>
                }
            </View>

            <View style={styles.placeOrderAreaStyle}>

                <TouchableOpacity style={[styles.placeOrderStyle, { backgroundColor: 'lightcoral' }]} onPress={() => proceedToBuyMethod()}>
                    <Text style={{ fontSize: responsiveFontSize(2.5), color: 'white', fontWeight: 'bold' }}>Proceed To Buy</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


export default SelecteditemScr

const styles = StyleSheet.create({
    flatListItemStyle: {
        borderWidth: 1,
        borderColor: 'lightcoral',
        flexDirection: 'row',
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(2),
        margin: responsiveWidth(1)
    },
    countTextStyle: {
        // marginLeft: responsiveWidth(1),
        // marginRight: responsiveWidth(1),
        fontSize: responsiveFontSize(2.5),
        color: 'black'
    },
    placeOrderAreaStyle: {
        width: responsiveWidth(100),
        height: responsiveHeight(10),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: responsiveHeight(0.1),
        backgroundColor: 'white',
    },
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(5)
    },
    addToCartStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // width: responsiveWidth(20),
        backgroundColor: 'lightcoral',
        //height: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(1),
        paddingVertical: responsiveHeight(1),
        marginRight: responsiveWidth(1)
    },
    cartValueStyle: {
        color: 'white',
        position: 'absolute',
        right: responsiveWidth(5),
        top: responsiveHeight(1.2),
        fontWeight: 'bold'
    },
    headingAreaStyle: {
        width: responsiveWidth(100),
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(8),
        backgroundColor: "lightcoral"
    },
    headingStyle: {
        // textAlign: 'center',
        fontSize: responsiveFontSize(3),
        color: "white",
        // marginBottom: responsiveHeight(2)
    },
    placeOrderStyle: {
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(1),
        alignItems: 'center',
        marginBottom: responsiveHeight(1),
        marginRight: responsiveWidth(3)


    },
})

