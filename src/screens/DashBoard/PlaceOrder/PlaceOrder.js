import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux'

const PlaceOrder = ({ navigation }) => {

    let bool_val = false;
    const data = useSelector(state => state.dataRedu.itemAdded)
    let added_data = [];
    const Data_here = useSelector(state => state.dataRedu.allData)
    const address_selector = useSelector(state => state.addressRedu.address)
    const countArr = useSelector(state => state.dataRedu.countArray)

    let initial_val = 0

    let sum = data.reduce((total, item) => { 
        let value
        Data_here.map((items,idx)=>{
             if(items.id == item)
             {
                 value =  total + items.updatePrice
             }
        })
        return value
    
    
    }, initial_val)
   
    const PlaceOrderMethod = () => {
        navigation.navigate("Payment")
    }

    const renderItemMethod = ({ item, index }) => {
        return (
            <View style={styles.flatListItemStyle}>
                <Image source={item.pic} resizeMode='contain' style={{ width: responsiveWidth(30), height: responsiveHeight(15) }} />
                <View style={{ justifyContent: 'center' }}>
                    <View style={{ width: responsiveWidth(30), justifyContent: 'center', height: responsiveHeight(10) }}>
                        <Text style={{ fontSize: responsiveFontSize(2.5), color: 'lightcoral', fontWeight: 'bold' }}>{item.title}</Text>
                    </View>

                    <Text>Quantity: {item.count}</Text>
                </View>

                <View style={styles.priceStyle}>
                    <Text style={{ marginBottom: responsiveHeight(0.5), fontWeight: 'bold', color: 'lightcoral', fontSize: responsiveFontSize(2) }}>Amount</Text>
                    <Text style={styles.countTextStyle}>${item.updatePrice}</Text>
                </View>

            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {
                data.map((item, index) => {
                    return(
                        Data_here.map((items,index)=>{
                            if(items.id == item){
                                added_data.push(items)
                                return bool_val = true
                            }
                        })
                    )
                })
            }

            <View style={styles.headingAreaStyle}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', elevation: 1, top: responsiveHeight(2), left: responsiveWidth(2) }}>
                    <Ionicons name="arrow-back" size={30} color="white" />
                </TouchableOpacity>

                <Text style={styles.headingStyle}>Order Summery</Text>

            </View>

            <View style={styles.addressAreaStyle}>
                <Text style={styles.textStyle}>Deliver To:</Text>
                <View style={{ width: responsiveWidth(70) }}>
                    <Text style={styles.textStyle}>{address_selector.name}, {address_selector.address},
                 {address_selector.state}, {address_selector.pinCode}</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.replace("AddressPlace")} style={styles.changeAddStyle}>
                    <Text style={[styles.textStyle, { color: 'lightcoral' }]}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginBottom: responsiveHeight(33) }}>
                <FlatList data={added_data} renderItem={renderItemMethod} />
            </View>



            <View style={styles.placeOrderAreaStyle}>
                <View style={[styles.placeOrderStyle, { flexDirection: 'row' }]}>

                    <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold', color: 'lightcoral' }}>Price: </Text>
                    <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: 'black' }}>${sum}</Text>
                </View>

                <TouchableOpacity style={[styles.placeOrderStyle, { backgroundColor: 'lightcoral' }]} onPress={() => PlaceOrderMethod()}>
                    <Text style={{ fontSize: responsiveFontSize(2.5), color: 'white', fontWeight: 'bold' }}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default PlaceOrder

const styles = StyleSheet.create({
    headingAreaStyle: {
        width: responsiveWidth(100),
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(8),
        backgroundColor: "lightcoral"
    },
    headingStyle: {
        fontSize: responsiveFontSize(3),
        color: "white",
    },
    placeOrderAreaStyle: {
        width: responsiveWidth(100),
        height: responsiveHeight(10),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: responsiveHeight(1),
        backgroundColor: 'white',
    },
    addressAreaStyle: {
        borderWidth: 1,
        width: responsiveWidth(100),
        height: responsiveHeight(12),
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(5),
        //justifyContent: "space-between"
    },
    textStyle: {
        fontSize: responsiveFontSize(2),
        fontWeight: "bold"
    },
    placeOrderStyle: {
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(1),
        alignItems: 'center',
        marginBottom: responsiveHeight(1),

    },
    flatListItemStyle: {
        borderWidth: 1,
        borderColor: 'lightcoral',
        flexDirection: 'row',
        // alignItems:'center',
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(2),
        margin: responsiveWidth(1)
    },
    changeAddStyle:{
        position: 'absolute',
         borderWidth: 1,
          top: responsiveHeight(2),
         right: responsiveWidth(6),
          paddingHorizontal: responsiveWidth(1.5),
           paddingVertical: responsiveHeight(1) 
    },
    priceStyle:{
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        position: 'absolute', 
        top: responsiveHeight(5),
         right: responsiveWidth(4)
    }
})