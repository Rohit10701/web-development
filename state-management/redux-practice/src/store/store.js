import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from "./features/counter/counterSlice";

const persistConfig = {
  key: 'webDev-reduxPractice',
  storage,
  version : 1
};
const baseReducer = combineReducers({
  counter: counterReducer,
})

const persistedReducer = persistReducer(persistConfig, baseReducer    );

const store = configureStore({
  reducer: persistedReducer,
}

);

const persistor = persistStore(store);

export { store, persistor };
