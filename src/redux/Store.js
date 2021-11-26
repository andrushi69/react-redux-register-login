import contactsReducer from "./Contacts/ContactsReducer"
import changeFilter from "./Contacts/ContactsReducer"
import {authReducer} from './Authorize';
import storage from 'redux-persist/lib/storage';
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist";


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer, changeFilter,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development"
})

export const persist = persistStore(store);