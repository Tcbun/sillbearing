import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

import Mebg from '../../static/mebg.png';
import UserTX from '../../static/userTX.png';
import myOrder from '../../static/myorder.png';
import rightArrow from '../../static/rightArrow.png';
import buyCar from '../../static/buycar.png';
import collection from '../../static/collection.png';
import setting from '../../static/setting.png';
import Footer from '../../components/footer';

class People extends Component {
    render() {
        return (
            <div className="people">
                <div className="mebg">
                    <img src={Mebg} alt="sill" className="mebg" />
                </div>
                <div className="user">
                    <div className="userTX">
                        <img src={UserTX} alt="sill" />
                        <div>Michelle</div>
                    </div>
                    <div className="userInfo">
                        <div className="userInfoAll">
                            <div>20</div>
                            <div>ALL</div>
                        </div>
                        <div className="userInfoUntraded">
                            <div>6</div>
                            <div>Untraded</div>
                        </div>
                        <div className="userInfoTurnover">
                            <div>10</div>
                            <div>Turnover</div>
                        </div>
                    </div>
                </div>
                <ul className="userManagerList">
                    <li>
                        <Link to="/">
                            <img src={myOrder} alt="sill" style={{ width: ".21rem" }} />
                            <div>My order</div>
                            <img src={rightArrow} alt="sill" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={buyCar} alt="sill" style={{ width: ".21rem" }} />
                            <div>Shopping Cart</div>
                            <img src={rightArrow} alt="sill" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={collection} alt="sill" style={{ width: ".21rem" }} />
                            <div>Collection</div>
                            <img src={rightArrow} alt="sill" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={setting} alt="sill" style={{ width: ".21rem" }} />
                            <div>Set up</div>
                            <img src={rightArrow} alt="sill" />
                        </Link>
                    </li>
                </ul>
                <Footer />
            </div>
        )
    }
}
export default People;