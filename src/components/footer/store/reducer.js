import {
    AT_HOME_ACTIONTYPES,
    AT_MALL_ACTIONTYPES,
    AT_PURCHASE_ACTIONTYPES,
    AT_PEOPLE_ACTIONTYPES
} from './actionTypes';

const defaultValue = {
    isHomePage: true,
    isMallPage: false,
    isPurchasePage: false,
    isPeoplePage: false
}

export default (state = defaultValue, action) => {
    if (action.type === AT_HOME_ACTIONTYPES) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.isHomePage = true;
        newState.isMallPage = false;
        newState.isPurchasePage = false;
        newState.isPeoplePage = false;
        return newState;
    }
    if (action.type === AT_MALL_ACTIONTYPES) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.isHomePage = false;
        newState.isMallPage = true;
        newState.isPurchasePage = false;
        newState.isPeoplePage = false;
        return newState;
    }
    if (action.type === AT_PURCHASE_ACTIONTYPES) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.isHomePage = false;
        newState.isMallPage = false;
        newState.isPurchasePage = true;
        newState.isPeoplePage = false;
        return newState;
    }
    if (action.type === AT_PEOPLE_ACTIONTYPES) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.isHomePage = false;
        newState.isMallPage = false;
        newState.isPurchasePage = false;
        newState.isPeoplePage = true;
        return newState;
    }
    return state;
}