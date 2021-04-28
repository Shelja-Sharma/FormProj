import { createStore } from "redux";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import RootReducer from "./Reducer/RootReducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

const persistedReducer = persistReducer(persistConfig,RootReducer);
const store = createStore(persistedReducer);


export default store;
export const persistor = persistStore(store);