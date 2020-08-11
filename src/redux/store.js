
import {createStore} from 'redux';
import Bookreducer from './book/bookreducer';

const Store=createStore(Bookreducer);
export default Store;