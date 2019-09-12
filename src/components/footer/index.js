import React, { Component } from 'react';
import './index.scss';
import HomeIcon from '../../static/home.png';
import HomeActiveIcon from '../../static/home-active.png';
import MallIcon from '../../static/mall.png';
import MallActiveIcon from '../../static/mall-active.png';
import PurchaseIcon from '../../static/purchase.png';
import PurchaseActiveIcon from '../../static/purchase-active.png';
import PeopleIcon from '../../static/people.png';
import PeopleActiveIcon from '../../static/people-active.png';
import { connect } from 'react-redux';
import {
    AT_HOME_ACTIONCREATOR,
    AT_MALL_ACTIONCREATOR,
    AT_PURCHASE_ACTIONCREATOR,
    AT_PEOPLE_ACTIONCREATOR
} from './store/actionCreator';
import { Link } from 'react-router-dom';
import releaseIcon from '../../static/40da76e1352464391f53cad7919d230.png';

class FooterComponent extends Component {
    render() {
        const { isHomePage, isMallPage, isPurchasePage, isPeoplePage, atHomeDispatchFunction, atMallDispatchFunction, atPurchaseDispatchFunction, atPeopleDispatchFunction } = this.props;
        return (
            <div className="footer">
                <div onClick={() => atHomeDispatchFunction()}>
                    <Link to="/">
                        <div>
                            <img src={isHomePage ? HomeActiveIcon : HomeIcon} alt="sill" />
                        </div>
                        <div>Home</div>
                    </Link>
                </div>
                <div onClick={() => atMallDispatchFunction()}>
                    <Link to="/mall">
                        <div>
                            <img src={isMallPage ? MallActiveIcon : MallIcon} alt="sill" />
                        </div>
                        <div>Mall</div>
                    </Link>
                </div>
                <div className="releaseBtn">
                    <Link to="/release" style={{ height:'100%' }}>
                        <div>
                            <img src={releaseIcon} alt="sill" />
                        </div>
                        <div></div>
                        <div style={{fontSize:'.12rem'}}>Release</div>
                    </Link>
                </div>
                <div onClick={() => atPurchaseDispatchFunction()}>
                    <Link to="/purchase">
                        <div>
                            <img src={isPurchasePage ? PurchaseActiveIcon : PurchaseIcon} alt="sill" />
                        </div>
                        <div>Purchase</div>
                    </Link>
                </div>
                <div onClick={() => atPeopleDispatchFunction()}>
                    <Link to="/people">
                        <div>
                            <img src={isPeoplePage ? PeopleActiveIcon : PeopleIcon} alt="sill" />
                        </div>
                        <div>Me</div>
                    </Link>
                </div>
            </div>
        )
    }
}
const mapProps = (store) => {
    return {
        isHomePage: store.footer.isHomePage,
        isMallPage: store.footer.isMallPage,
        isPurchasePage: store.footer.isPurchasePage,
        isPeoplePage: store.footer.isPeoplePage
    }
}
const mapDispatch = (dispatch) => {
    return {
        atHomeDispatchFunction() {
            dispatch(AT_HOME_ACTIONCREATOR);
        },
        atMallDispatchFunction() {
            dispatch(AT_MALL_ACTIONCREATOR);
        },
        atPurchaseDispatchFunction() {
            dispatch(AT_PURCHASE_ACTIONCREATOR);
        },
        atPeopleDispatchFunction() {
            dispatch(AT_PEOPLE_ACTIONCREATOR);
        }
    }
}
export default connect(mapProps, mapDispatch)(FooterComponent);