import React, { Component } from 'react';
import './index.scss';
import FalseSearch from '../../components/falseSearch';
import Swiper from 'swiper/dist/js/swiper.js';
import { WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';
import ModuleTitle from '../../components/moduleTitle';
import ProductList from '../../components/productList';
import { connect } from 'react-redux';

// 本地图片
import Banner from '../../static/TB2GBAQrOCYBuNkSnaVXXcMsVXa___3470984378.png';
import Bearing from '../../static/Bearing.png';
import SteelPipe from '../../static/SteelPipe.png';
import SteelBall from '../../static/SteelBall.png';
import Equipment from '../../static/Equipment.png';
import Stock from '../../static/Stock.png';

import Footer from '../../components/footer';

class Mall extends Component {
    componentDidMount = () => {
        new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
        })
    }
    render() {
        const { recommendList } = this.props;
        return (
            <div className="mall">
                <div className="mallTop">
                    <FalseSearch />
                    <WingBlank>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src={Banner} alt="sill" style={{ width: '100%' }} />
                                </div>
                                <div className="swiper-slide"></div>
                                <div className="swiper-slide"></div>
                            </div>
                        </div>
                    </WingBlank>
                    <ul className="mallTypes">
                        <li>
                            <Link to="/">
                                <div>
                                    <img src={Bearing} alt="sill" />
                                    <div>Bearing</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <div>
                                    <img src={SteelPipe} alt="sill" />
                                    <div>Steel pipe</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <div>
                                    <img src={SteelBall} alt="sill" />
                                    <div>Steel ball</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <div>
                                    <img src={Equipment} alt="sill" />
                                    <div>Equipment</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <div>
                                    <img src={Stock} alt="sill" />
                                    <div>Stock</div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="recommend">
                    <ModuleTitle content={"Recommend"} styleWidth={'1.2rem'} styleMarginLeft={"-.6rem"} />
                    <div style={{ marginTop:'-.1rem' }}>
                        <ProductList productList={recommendList} style={{ marginTop: '-.6rem' }} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
const mapProps = (store) => {
    return {
        recommendList: store.mall.recommendList
    }
}
const mapDispatch = (dispatch) => {
    return {



    }
}
export default connect(mapProps, mapDispatch)(Mall);