
import { legacy_createStore as createStore } from 'redux';
import {switchReducer} from './reducers'

const store= createStore(switchReducer);
export default store;