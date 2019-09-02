import { combineReducers } from 'redux';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as mallReducer } from '../pages/mall/store';
import { reducer as purchaseReducer } from '../pages/purchase/store';
import { reducer as footerReducer } from '../components/footer/store';
export default combineReducers({
    home:homeReducer,
    mall:mallReducer,
    purchase:purchaseReducer,
    footer:footerReducer
});