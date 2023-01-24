import { configureStore } from '@reduxjs/toolkit';
import guitarsListReducer from '../features/guitarsList/guitarsListSlice';
import sortSearchReducer from '../features/sortSearch/searchSortSlice';
import dropdownReducer from '../features/sortDropdown/dropdownSlice';
import shoppingCartReducer from '../features/shoppingCart/shoppingCartSlice';
import userInfoReducer from '../features/userInfo/userInfoSlice';
import stringsListReducer from '../features/strings/stringsSlice';
import logger from 'redux-logger';

const rootReducer = {
	guitarsList: guitarsListReducer,
	stringsList: stringsListReducer,
	sortSearch: sortSearchReducer,
	dropdown: dropdownReducer,
	shoppingCart: shoppingCartReducer,
	userInfo: userInfoReducer,
};
export const store = configureStore({
	reducer: rootReducer,
	middleware: [logger],
});
