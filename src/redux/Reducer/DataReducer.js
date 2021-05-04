

import { step0 } from 'react-native/Libraries/Animated/Easing';
import { act } from 'react-test-renderer';
import { ActionType } from '../ActionType';
import store from '../store';

const initialValue = {


    allData: [{
        id: 101, title: 'Cute Doll', type: 'toy', pic: require('../../assets/images/image1.png'), starVal: 2.5, count: 1, price: 100, updatePrice: 100
    },
    {
        id: 102, title: 'Cute Baby Elephant', type: 'toy', pic: require('../../assets/images/happiley.png'), starVal: 4.3, count: 1, price: 150, updatePrice: 150
    }, {
        id: 103, title: 'Winnie the Pooh', type: 'toy', pic: require('../../assets/images/image2.png'), starVal: 3, count: 1, price: 500, updatePrice: 500
    },
    {
        id: 104, title: 'Tweety Bird', type: 'toy', pic: require('../../assets/images/image4.png'), starVal: 4.5, count: 1, price: 250, updatePrice: 250
    },
    {
        id: 105, title: 'Little Cute Ganesha', type: 'toy', pic: require('../../assets/images/image3.png'), starVal: 2, count: 1, price: 300, updatePrice: 300
    },
    {
        id: 106, title: 'Blue shoes', type: 'shoes', pic: require('../../assets/images/shoes1.png'), starVal: 2.5, count: 1, price: 200, updatePrice: 200
    },
    {
        id: 107, title: 'White shoes', type: 'shoes', pic: require('../../assets/images/shoes2.png'), starVal: 5, count: 1, price: 400, updatePrice: 400
    },
    {
        id: 108, title: 'Pink shoes', type: 'shoes', pic: require('../../assets/images/shoes3.png'), starVal: 1.5, count: 1, price: 100, updatePrice: 400
    },
    {
        id: 109, title: 'Black shoes', type: 'shoes', pic: require('../../assets/images/shoes4.png'), starVal: 2.5, count: 1, price: 200, updatePrice: 200
    },
    {
        id: 110, title: 'MultiColorshoes', type: 'shoes', pic: require('../../assets/images/shoes5.png'), starVal: 5, count: 1, price: 400, updatePrice: 400
    },
    {
        id: 111, title: 'Brown shoes', type: 'shoes', pic: require('../../assets/images/shoes6.png'), starVal: 1.2, count: 1, price: 100, updatePrice: 100
    },
    {
        id: 112, title: 'Blue Kurta', type: 'cloths', pic: require('../../assets/images/blue_kurta.png'), starVal: 2.5, count: 1, price: 200, updatePrice: 200
    },
    {
        id: 113, title: 'Yellow Kurta', type: 'cloths', pic: require('../../assets/images/yellow_kurta.png'), starVal: 5, count: 1, price: 400, updatePrice: 400
    },
    {
        id: 114, title: 'Black Kurta', type: 'cloths', pic: require('../../assets/images/black_kurta.png'), starVal: 1, count: 1, price: 100, updatePrice: 100
    }
    ],
    itemAdded: [],
    countArray: [],
    count: 0
};

const DataReducer = (state = { ...initialValue }, action) => {
    switch (action.type) {
        case ActionType.ADD_ITEM:

            var bool_value = true;
            let selectedItem = [...state.itemAdded]
            console.log("selected items are", selectedItem)
            selectedItem.map((item, index) => {
                if (item == action.payload) {
                    bool_value = false
                }
            })
            if (bool_value) {
                return {
                    ...state,
                    itemAdded: [...state.itemAdded, action.payload],

                }
            }
            else {
                return state
            }

        //remove items
        case ActionType.REMOVE_ITEM:

            const index = state.itemAdded.indexOf(action.payload)
            // state.countArray.splice(index, 1)
            state.itemAdded.splice(index, 1)

            return ({
                ...state,
                itemAdded: [...state.itemAdded],
                // countArray: [...state.countArray]
            })

        case ActionType.INCREMENT_ITEM:

            let originalarr = [...state.allData]
            let incrementPrice = []
            const UpdateArray = originalarr.map((item, idx) => {
                if (item.id == action.payload) {
                    item.count = item.count + 1
                    item.updatePrice = item.price * item.count
                    return item
                }
                else { return item }
            })
           
            return ({
                ...state,
                allData: UpdateArray

            })

        //decrement item
        case ActionType.DECREMENT_ITEM:

            let original_arr = [...state.allData]
            const updateArr = original_arr.map((item, idx) => {
                if (item.id == action.payload) {
                    item.count = item.count - 1
                    item.updatePrice = item.price * item.count
                    return item
                }
                else { return item }
            })
            return ({
                ...state,
                itemAdded: [...state.itemAdded],
                allData: updateArr
            })

        default:
            return state
    }
}

export default DataReducer




//latest code

// import { step0 } from 'react-native/Libraries/Animated/Easing';
// import { act } from 'react-test-renderer';
// import { ActionType } from '../ActionType';
// import store from '../store';

// const initialValue = {

//     allData: [{
//         id: 101, title: 'Cute Doll', type: 'toy', pic: require('../../assets/images/image1.png'), starVal: 2.5, count: 1, price: 100
//     },
//     {
//         id: 102, title: 'Cute Baby Elephant', type: 'toy', pic: require('../../assets/images/happiley.png'), starVal: 4, count: 1, price: 150
//     }, {
//         id: 103, title: 'Winnie the Pooh', type: 'toy', pic: require('../../assets/images/image2.png'), starVal: 3, count: 1, price: 500
//     },
//     {
//         id: 104, title: 'Tweety Bird', type: 'toy', pic: require('../../assets/images/image4.png'), starVal: 4.5, count: 1, price: 250
//     },
//     {
//         id: 105, title: 'Little Cute Ganesha', type: 'toy', pic: require('../../assets/images/image3.png'), starVal: 2, count: 1, price: 300
//     },
//     {
//         id: 106, title: 'Blue shoes', type: 'shoes', pic: require('../../assets/images/shoes1.png'), starVal: 2.5, count: 1, price: 200
//     },
//     {
//         id: 107, title: 'White shoes', type: 'shoes', pic: require('../../assets/images/shoes2.png'), starVal: 5, count: 1, price: 400
//     },
//     {
//         id: 108, title: 'Pink shoes', type: 'shoes', pic: require('../../assets/images/shoes3.png'), starVal: 1, count: 1, price: 100
//     },
//     {
//         id: 109, title: 'Black shoes', type: 'shoes', pic: require('../../assets/images/shoes4.png'), starVal: 2.5, count: 1, price: 200
//     },
//     {
//         id: 110, title: 'MultiColorshoes', type: 'shoes', pic: require('../../assets/images/shoes5.png'), starVal: 5, count: 1, price: 400
//     },
//     {
//         id: 111, title: 'Brown shoes', type: 'shoes', pic: require('../../assets/images/shoes6.png'), starVal: 1, count: 1, price: 100
//     },
//     {
//         id: 112, title: 'Blue Kurta', type: 'cloths', pic: require('../../assets/images/blue_kurta.png'), starVal: 2.5, count: 1, price: 200
//     },
//     {
//         id: 113, title: 'Yellow Kurta', type: 'cloths', pic: require('../../assets/images/yellow_kurta.png'), starVal: 5, count: 1, price: 400
//     },
//     {
//         id: 114, title: 'Black Kurta', type: 'cloths', pic: require('../../assets/images/black_kurta.png'), starVal: 1, count: 1, price: 100
//     }
//     ],
//     itemAdded: [],
//     countArray: [],
//     count: 0
// };

// const DataReducer = (state = { ...initialValue }, action) => {
//     switch (action.type) {
//         // case ActionType.ADD_ITEM:
//         //     var bool_value = true;
//         //     state.itemAdded.map((item, index) => {
//         //         if (item.id == action.payload.id) {
//         //             bool_value = false
//         //         }
//         //     })
//         //     if (bool_value) {
//         //         return {
//         //             ...state,
//         //             itemAdded: [...state.itemAdded, action.payload],

//         //             countArray: [...state.countArray, {
//         //                 id: action.payload.id,
//         //                 index: action.payload.item,
//         //                 countVal: state.allData[action.payload.item].count,
//         //                 amount: state.allData[action.payload.item].price
//         //             }],
//         //         }
//         //     } else {
//         //         return state
//         //     }

//         case ActionType.ADD_ITEM:

//             var bool_value = true;
//             let selectedItem = [...state.itemAdded]
//             console.log("selected items are", selectedItem)
//             selectedItem.map((item, index) => {
//                 if (item == action.payload) {
//                     bool_value = false
//                 }
//             })
//             if (bool_value) {
//                 let originalarr = [...state.allData]
//                 let countValIs = []
//                 let amountValIs = []
//                 originalarr.map((item, idx) => {

//                     if (item.id == action.payload) {
//                         countValIs.push(item.count)
//                         amountValIs.push(item.price)
//                     }
//                 })
//                 return {
//                     ...state,
//                     itemAdded: [...state.itemAdded, action.payload],

//                     countArray: [...state.countArray, {
//                         id: action.payload,
//                         countVal: countValIs[0],
//                         amount: amountValIs[0]
//                     }],
//                 }
//             }
//             else {
//                 return state
//             }

//         //remove items
//         case ActionType.REMOVE_ITEM:

//             const index = state.itemAdded.indexOf(action.payload)
//             state.countArray.splice(index, 1)
//             state.itemAdded.splice(index, 1)

//             return ({
//                 ...state,
//                 itemAdded: [...state.itemAdded],
//                 countArray: [...state.countArray]
//             })

//         // increment items 
//         case ActionType.INCREMENT_ITEM:

//             let originalarr = [...state.allData]
//             let incrementPrice = []
//             originalarr.map((item, idx) => {

//                 if (item.id == action.payload) {
//                     incrementPrice.push(item.price)
//                 }
//             })
//             state.countArray = state.countArray.map((item, index) => {
//                 if (item.id == action.payload) {
//                     item.countVal = item.countVal + 1;
//                     item.amount = incrementPrice[0] * item.countVal
//                     return item
//                 }
//                 else {
//                     return item
//                 }
//             })

//             return ({
//                 ...state,
//                 countArray: [...state.countArray]
//             })

//         //decrement item
//         case ActionType.DECREMENT_ITEM:

//             let original_arr = [...state.allData]
//             let decrementPrice = []
//             original_arr.map((item, idx) => {

//                 if (item.id == action.payload) {
//                     decrementPrice.push(item.price)
//                 }
//             })

//             state.countArray = state.countArray.map((item, index) => {

//                 if (item.id == action.payload) {

//                     item.countVal = item.countVal - 1;
//                     item.amount = decrementPrice[0] * item.countVal
//                     return item
//                 }
//                 else {

//                     return item
//                 }
//             })

//             return ({
//                 ...state,
//                 countArray: [...state.countArray],
//                 itemAdded: [...state.itemAdded]
//             })

//         default:
//             return state
//     }
// }

// export default DataReducer

//lastest code end



// import { step0 } from 'react-native/Libraries/Animated/Easing';
// import { act } from 'react-test-renderer';
// import { ActionType } from '../ActionType';
// import store from '../store';

// const initialValue = {

//     allData: [{
//         id: 101, title: 'Cute Doll',type:'toy', pic: require('../../assets/images/image1.png'), starVal: 2.5, count: 1, price: 100
//     },
//     {
//         id: 102, title: 'Cute Baby Elephant',type:'toy', pic: require('../../assets/images/happiley.png'), starVal: 4, count: 1, price: 150
//     }, {
//         id: 103, title: 'Winnie the Pooh',type:'toy', pic: require('../../assets/images/image2.png'), starVal: 3, count: 1, price: 500
//     },
//     {
//         id: 104, title: 'Tweety Bird',type:'toy', pic: require('../../assets/images/image4.png'), starVal: 4.5, count: 1, price: 250
//     },
//      {
//         id: 105, title: 'Little Cute Ganesha',type:'toy', pic: require('../../assets/images/image3.png'), starVal: 2, count: 1, price: 300
//     },
//     {
//         id: 106, title: 'Blue shoes',type:'shoes', pic: require('../../assets/images/shoes1.png'), starVal: 2.5, count: 1, price: 200
//     },
//     {
//         id: 107, title: 'White shoes',type:'shoes', pic: require('../../assets/images/shoes2.png'), starVal: 5, count: 1, price: 400
//     },
//     {
//         id: 108, title: 'Pink shoes',type:'shoes', pic: require('../../assets/images/shoes3.png'), starVal: 1, count: 1, price: 100
//     },
//     {
//         id: 106, title: 'Black shoes',type:'shoes', pic: require('../../assets/images/shoes4.png'), starVal: 2.5, count: 1, price: 200
//     },
//     {
//         id: 107, title: 'MultiColorshoes',type:'shoes', pic: require('../../assets/images/shoes5.png'), starVal: 5, count: 1, price: 400
//     },
//     {
//         id: 108, title: 'Brown shoes',type:'shoes', pic: require('../../assets/images/shoes6.png'), starVal: 1, count: 1, price: 100
//     },
//     {
//         id: 109, title: 'Blue Kurta',type:'cloths', pic: require('../../assets/images/blue_kurta.png'), starVal: 2.5, count: 1, price: 200
//     },
//     {
//         id: 110, title: 'Yellow Kurta',type:'cloths', pic: require('../../assets/images/yellow_kurta.png'), starVal: 5, count: 1, price: 400
//     },
//     {
//         id: 111, title: 'Black shoes',type:'cloths', pic: require('../../assets/images/black_kurta.png'), starVal: 1, count: 1, price: 100
//     }
// ],
//     itemAdded: [],
//     countArray: [],
//     count: 0
// };

// const DataReducer = (state = { ...initialValue }, action) => {
//     switch (action.type) {
//         case ActionType.ADD_ITEM:

//             const updateCheck = state.itemAdded.includes(action.payload)
//             if (!updateCheck) {
//                 return {
//                     ...state,
//                     itemAdded: [...state.itemAdded, action.payload],

//                     countArray: [...state.countArray, {
//                         index: action.payload,
//                         countVal: state.allData[action.payload].count,
//                         amount: state.allData[action.payload].price
//                     }],

//                 }
//             }

//         case ActionType.REMOVE_ITEM:

//             const index = state.itemAdded.indexOf(action.payload)
//             state.countArray.splice(index, 1)
//             state.itemAdded.splice(index, 1)

//             return ({
//                 ...state,
//                 itemAdded: [...state.itemAdded],
//                 countArray: [...state.countArray]
//             })

//         case ActionType.INCREMENT_ITEM:

//             state.countArray = state.countArray.map((item, index) => {
//                 if (item.index == action.payload) {
//                     item.countVal = item.countVal + 1;
//                     item.amount = state.allData[item.index].price * item.countVal
//                     return item
//                 }
//                 else {
//                     return item
//                 }
//             })
//             return ({
//                 ...state,
//                 countArray: [...state.countArray]
//             })

//         // case ActionType.DECREMENT_ITEM:

//         //     state.countArray = state.countArray.filter((item, index) => {
//         //         console.log("action payload is",action.payload)
//         //         if (item.index == action.payload) {

//         //             if (item.countVal == 1 ) {
//         //                 console.log("in if part ",item)
//         //                 const index_item = state.itemAdded.indexOf(action.payload)
//         //                 state.countArray.splice(index_item, 1)
//         //                 state.itemAdded.splice(index_item, 1)
//         //                 console.log("count array is",state.countArray)
//         //                 console.log("state array itemadded",state.itemAdded)
//         //                 //return false
//         //             } 

//         //             else {
//         //                 console.log("in else part",item)
//         //                 item.countVal = item.countVal - 1;
//         //                  //return true
//         //                 return item
//         //             }
//         //         }
//         //         else {
//         //            console.log("item is not changing",item)
//         //             return item
//         //         }
//         //     })

//         //     return ({
//         //         ...state,
//         //         countArray: [...state.countArray],
//         //         itemAdded: [...state.itemAdded]

//         //     })
//         case ActionType.DECREMENT_ITEM:

//             state.countArray = state.countArray.map((item, index) => {

//                 if (item.index == action.payload) {

//                     item.countVal = item.countVal - 1;
//                     item.amount = state.allData[item.index].price * item.countVal
//                     return item
//                 }
//                 else {

//                     return item
//                 }
//             })

//             return ({
//                 ...state,
//                 countArray: [...state.countArray],
//                 itemAdded: [...state.itemAdded]
//             })

//         default:
//             return state
//     }
// }

// export default DataReducer