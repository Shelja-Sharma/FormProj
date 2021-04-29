import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useDispatch } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { AddItemAction, addItemMethod, DecrementItemAction, IncrementItemAction, RemoveItemAction } from '../../redux/Action'
import { useSelector } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import StarRating from 'react-native-star-rating';
import CustomModal from '../../components/atoms/CustomModal/CustomModal'


const DashBoard = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    console.log("dashboard screen")

    const dispatch = useDispatch()
    const data = useSelector(state => state.dataRedu.allData)

    const [checkData, setCheckdata] = useState(data)
    const selector = useSelector(state => state.dataRedu.itemAdded)
    var bookVal = false;
    const addedItemVal = selector.length;
    const count_Val = useSelector(state => state.dataRedu.countArray)

    const addToCartMethod = (itemIndex) => {
        // console.log("add to cart value",itemIndex)
        dispatch(AddItemAction(itemIndex))
    }
    const incrementMethod = (itemIndex) => {
        // console.log("itemindex", itemIndex)
        dispatch(IncrementItemAction(itemIndex))
    }
    const decrementMethod = (itemIndex) => {

        count_Val.map((item, index) => {
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
            <View key={index} style={styles.flatListItemStyle}>
                <Image source={item.pic} resizeMode='contain' style={{ width: responsiveWidth(40), height: responsiveHeight(22) }} />

                <Text style={{ fontSize: responsiveFontSize(2), color: 'maroon', fontWeight: 'bold' }}>{item.title}</Text>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={item.starVal}
                    starSize={20}
                    fullStarColor="goldenrod"
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    {
                        selector.find((items, idx) => {
                            if (items == item.id) {
                                return true
                            }

                        }) ?
                            count_Val.map((items, id) => {
                                if (items.id == item.id) {
                                    return (
                                        <Text key={id} style={styles.priceStyle}>${items.amount}</Text>
                                    )
                                }
                            })
                            :
                            <Text style={styles.priceStyle}>${item.price}</Text>
                    }

                    {

                        selector.find((items, idx) => {
                            if (items == item.id) {
                                return true
                            }
                        })
                            ?
                            <View style={[styles.addToCartStyle, { flexDirection: 'row', justifyContent: 'space-evenly' }]}>

                                <TouchableOpacity onPress={() => decrementMethod(item.id)} >
                                    <AntDesign name="minus" size={20} color="white" />
                                </TouchableOpacity>
                                {
                                    // console.log("count val is",count_Val)
                                    count_Val.map((items, id) => {
                                        if (items.id == item.id) {
                                            return (
                                                <Text key={id} style={{ fontSize: responsiveFontSize(2), color: 'black' }}>{items.countVal}</Text>
                                            )
                                        }
                                    })
                                }
                                <TouchableOpacity onPress={() => incrementMethod(item.id)} >
                                    <AntDesign name="plus" size={20} color="white" />
                                </TouchableOpacity>
                            </View>
                            :
                            <TouchableOpacity style={styles.addToCartStyle} onPress={() => addToCartMethod(item.id)}>
                                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: responsiveFontSize(1.7) }} >Add to Cart</Text>
                            </TouchableOpacity>
                    }

                </View>
                <Text style={{ color: 'maroon', fontWeight: 'bold' }}>FREE Delivery on your first</Text>
                <Text style={{ color: 'maroon', fontWeight: 'bold' }}>order in this category</Text>

            </View>
        )
    }

    const LogOutMethod = async () => {
        await AsyncStorage.removeItem("LoginKey")
        //dispatch(LogOutAction())
        navigation.replace('Login')
    }

    // const closeModalMethod = (value) => {
    //     console.log("value from modal", value)
    //     console.log("inside the close modal ")
    //     const check = []
    //     setModalVisible(false)

    //     console.log("selected items are", selector)

    //     for (let i = 0; i < data.length; i++) {
    //         for (let j = 0; j < value.length; j++) {

    //             if (value[j] == data[i].type) {
    //                 check.push(data[i])
    //             }
    //         }
    //     }
    //     console.log("new array data is ", check);

    //     if (check == '') {
    //         setCheckdata(data)
    //     }
    //     else {
    //         setCheckdata(check)
    //     }
    // }


    const closeModalMethod = (value) => {
        console.log("value from modal", value)
        console.log("inside the close modal ")

        const check = data.filter(element => value.includes(element.type));

        console.log("new array data is ", check);
        if (!check.length) {
            setCheckdata(data)
        }
        else {
            setCheckdata(check)
        }

        setModalVisible(false)
    }

    return (
        <>
            <View style={styles.headingAreaStyle}>

                {/* <TouchableOpacity style={{ backgroundColor: 'red', }} onPress={() => sortData(1)}>
                    <Text>Sort A-Z</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sortData(0)}>
                    <Text>Sort Z-A</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ position: 'absolute', left: responsiveHeight(1), top: responsiveHeight(1) }}>
                    <Ionicons name="md-reorder-three-sharp" size={30} color="white" />
                </TouchableOpacity>

                <Text style={styles.headingStyle}>WELCOME</Text>

                <TouchableOpacity style={{
                    position: 'absolute',
                    right: responsiveWidth(0),
                    top: responsiveHeight(1)
                }}
                    onPress={() => LogOutMethod()}>
                    <Image source={require('../../assets/images/logout.png')}
                        resizeMode="contain" style={{ marginRight: responsiveWidth(5), width: responsiveWidth(7), height: responsiveHeight(7) }} />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    position: 'absolute',
                    right: responsiveWidth(12),
                    top: responsiveHeight(2.5),
                    marginRight: responsiveWidth(3)
                }}
                    onPress={() => navigation.navigate("CartItems")}>
                    <MaterialIcons name="local-grocery-store" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    position: 'absolute',
                    right: responsiveWidth(14),
                    top: responsiveHeight(2.5),
                    marginRight: responsiveWidth(10)
                }}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <AntDesign name="filter" size={30} color="white" />
                </TouchableOpacity>

                <Text style={styles.cartValueStyle}>{addedItemVal > 0 ? addedItemVal : ''}</Text>
            </View>
            <View style={styles.viewStyle}>
                <FlatList
                    data={checkData}
                    renderItem={renderItemMethod}
                    numColumns={2}
                    keyExtractor={item => item.id} />
            </View>

            <CustomModal modalVisible={modalVisible} modalClose={(val) => closeModalMethod(val)} />
        </>
    )
}



export default DashBoard


const styles = StyleSheet.create({
    flatListItemStyle: {
        borderWidth: 2,
        borderRadius: 7,
        borderColor: 'lightcoral',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(1),

        // marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(0.5),
        marginBottom: responsiveHeight(1),
        marginRight: responsiveWidth(0.8)
    },
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(2),
        marginBottom: responsiveHeight(3)

    },
    addToCartStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: responsiveHeight(2),
        marginTop: responsiveHeight(2),
        width: responsiveWidth(20),
        backgroundColor: 'lightcoral',
        height: responsiveHeight(5)
    },
    priceStyle: {
        color: 'maroon',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2),
        marginRight: responsiveWidth(5)
    },
    cartValueStyle: {
        color: 'white',
        position: 'absolute',
        right: responsiveWidth(14),
        top: responsiveHeight(1.2),
        fontWeight: 'bold'
    },
    headingAreaStyle: {
        width: responsiveWidth(100),
        // alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(8),
        backgroundColor: "lightcoral"
    },
    headingStyle: {

        fontSize: responsiveFontSize(3),
        alignSelf: "center",
        color: "white",

    }
})





// import AsyncStorage from '@react-native-async-storage/async-storage'
// import React, { useEffect, useState } from 'react'
// import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import { useDispatch } from 'react-redux'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import { AddItemAction, addItemMethod, DecrementItemAction, IncrementItemAction, RemoveItemAction } from '../../redux/Action'
// import { useSelector } from 'react-redux'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import StarRating from 'react-native-star-rating';
// import CustomModal from '../../components/atoms/CustomModal/CustomModal'


// const DashBoard = ({ navigation }) => {
//     const [modalVisible, setModalVisible] = useState(false);

//     console.log("dashboard screen")
//     const dispatch = useDispatch()
//     const data = useSelector(state => state.dataRedu.allData)

//     const [checkData,setCheckdata] = useState(data)

//     const selector = useSelector(state => state.dataRedu.itemAdded)
//     const addedItemVal = selector.length;
//     const count_Val = useSelector(state => state.dataRedu.countArray)

//     const addToCartMethod = (item) => {
//         dispatch(AddItemAction(item))
//     }
//     const incrementMethod = (itemIndex) => {
//         dispatch(IncrementItemAction(itemIndex))
//     }
//     const decrementMethod = (itemIndex) => {

//         count_Val.map((item, index) => {
//             if (item.index == itemIndex) {
//                 if (item.countVal == 1) {
//                     dispatch(RemoveItemAction(itemIndex))
//                 }
//                 else {
//                     dispatch(DecrementItemAction(itemIndex))
//                 }
//             }
//         })

//     }
//     const renderItemMethod = ({ item, index }) => {

//         return (
//             <View key={index} style={styles.flatListItemStyle}>
//                 <Image source={item.pic} resizeMode='contain' style={{ width: responsiveWidth(40), height: responsiveHeight(22) }} />

//                 <Text style={{ fontSize: responsiveFontSize(2), color: 'maroon', fontWeight: 'bold' }}>{item.title}</Text>
//                 <StarRating
//                     disabled={false}
//                     maxStars={5}
//                     rating={item.starVal}
//                     starSize={20}
//                     fullStarColor="goldenrod"
//                 />
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

//                     {
//                         selector.includes(index) ?
//                             count_Val.map((item, id) => {
//                                 if (item.index == index) {
//                                     return (
//                                         <Text style={styles.priceStyle}>${item.amount}</Text>
//                                     )
//                                 }
//                             })
//                             :

//                             <Text style={styles.priceStyle}>${item.price}</Text>
//                     }

//                     {
//                         selector.includes(index)
//                             ?
//                             <View style={[styles.addToCartStyle, { flexDirection: 'row', justifyContent: 'space-evenly' }]}>

//                                 <TouchableOpacity onPress={() => decrementMethod(index)} >
//                                     <AntDesign name="minus" size={20} color="white" />
//                                 </TouchableOpacity>
//                                 {
//                                     count_Val.map((item, id) => {
//                                         if (item.index == index) {
//                                             return (
//                                                 <Text style={{ fontSize: responsiveFontSize(2), color: 'black' }}>{item.countVal}</Text>
//                                             )
//                                         }
//                                     })  
//                                 }
//                                 <TouchableOpacity onPress={() => incrementMethod(index)} >
//                                     <AntDesign name="plus" size={20} color="white" />
//                                 </TouchableOpacity>
//                             </View>
//                             :
//                             <TouchableOpacity style={styles.addToCartStyle} onPress={() => addToCartMethod(index)}>
//                                 <Text style={{ fontWeight: 'bold', color: 'white', fontSize: responsiveFontSize(1.7) }} >Add to Cart</Text>
//                             </TouchableOpacity>
//                     }

//                 </View>
//                 <Text style={{ color: 'maroon', fontWeight: 'bold' }}>FREE Delivery on your first</Text>
//                 <Text style={{ color: 'maroon', fontWeight: 'bold' }}>order in this category</Text>

//             </View>
//         )
//     }

//     const LogOutMethod = async () => {
//         await AsyncStorage.removeItem("LoginKey")
//         //dispatch(LogOutAction())
//         navigation.replace('Login')
//     }

//     const closeModalMethod = (value) => {
//         console.log("value from modal",value)
//         console.log("inside the close modal ")
//         const check = []
//         setModalVisible(false)

//         for(let i = 0;i<data.length;i++)
//         { 
//             for(let j=0; j<value.length;j++){

//                 if(value[j] == data[i].type)
//                 {
//                     check.push(data[i])
//                 }
//             }
//         }
//         console.log("new array data is ",check);

//         if(check == '') {
//             setCheckdata(data)
//         }
//         else{
//             setCheckdata(check)
//         }


//     }
//     return (
//         <>
//             <View style={styles.headingAreaStyle}>
//                 <Text style={styles.headingStyle}>WELCOME</Text>
//                 <TouchableOpacity style={{
//                     position: 'absolute',
//                     right: responsiveWidth(0),
//                     top: responsiveHeight(1)
//                 }}
//                     onPress={() => LogOutMethod()}>
//                     <Image source={require('../../assets/images/logout.png')}
//                         resizeMode="contain" style={{ marginRight: responsiveWidth(5), width: responsiveWidth(7), height: responsiveHeight(7) }} />
//                 </TouchableOpacity>

//                 <TouchableOpacity style={{
//                     position: 'absolute',
//                     right: responsiveWidth(12),
//                     top: responsiveHeight(2.5),
//                     marginRight: responsiveWidth(3)
//                 }}
//                     onPress={() => navigation.navigate("CartItems")}>
//                     <MaterialIcons name="local-grocery-store" size={30} color="white" />
//                 </TouchableOpacity>

//                 <TouchableOpacity style={{
//                     position: 'absolute',
//                     right: responsiveWidth(14),
//                     top: responsiveHeight(2.5),
//                     marginRight: responsiveWidth(10)
//                 }}
//                 onPress={() => setModalVisible(!modalVisible)}
//                 >
//                     <AntDesign name="filter" size={30} color="white" />
//                 </TouchableOpacity>

//                 <Text style={styles.cartValueStyle}>{addedItemVal > 0 ? addedItemVal : ''}</Text>
//             </View>
//             <View style={styles.viewStyle}>
//                 <FlatList
//                     data={checkData}
//                     renderItem={renderItemMethod}
//                     numColumns={2}

//                     keyExtractor={item => item.id} />
//             </View>

//             <CustomModal modalVisible = {modalVisible} modalClose = {(val)=>closeModalMethod(val)}/>
//         </>
//     )
// }



// export default DashBoard


// const styles = StyleSheet.create({
//     flatListItemStyle: {
//         borderWidth: 2,
//         borderRadius: 7,
//         borderColor: 'lightcoral',
//         alignItems: 'center',
//         paddingHorizontal: responsiveWidth(1),

//         // marginTop: responsiveHeight(1),
//         marginLeft: responsiveWidth(0.5),
//         marginBottom: responsiveHeight(1),
//         marginRight: responsiveWidth(0.8)
//     },
//     viewStyle: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: 'lightblue',
//         paddingHorizontal: responsiveWidth(2),
//         paddingVertical: responsiveHeight(2),
//         marginBottom: responsiveHeight(3)

//     },
//     addToCartStyle: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginBottom: responsiveHeight(2),
//         marginTop: responsiveHeight(2),
//         width: responsiveWidth(20),
//         backgroundColor: 'lightcoral',
//         height: responsiveHeight(5)
//     },
//     priceStyle: {
//         color: 'maroon',
//         fontWeight: 'bold',
//         fontSize: responsiveFontSize(2),
//         marginRight: responsiveWidth(5)
//     },
//     cartValueStyle: {
//         color: 'white',
//         position: 'absolute',
//         right: responsiveWidth(14),
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

//         fontSize: responsiveFontSize(3),
//         color: "white",

//     }
// })