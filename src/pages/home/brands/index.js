import React, { Component } from 'react';
import './index.scss';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css'
import SILL from '../../../static/824398358054846464.png';
import NTN from '../../../static/823350110720507904.png';
import SKF from '../../../static/823349840515055616.png';
import ANN from '../../../static/c0fc05ea53782e90ef1ef14c8d6afb8.png';
import CILO from '../../../static/824393649097162752.png';
import TC from '../../../static/824348545779122176.png';
import IINAA from '../../../static/824347884127666176.png';
import WKHT from '../../../static/167ea20f9e4046564df7e456ccbb136.png';
import ModuleTitle from '../../../components/moduleTitle';

class Brands extends Component {
    state = {
        brands: [
            { key: 0, alt: 'SILL', url: SILL },
            { key: 1, alt: 'SXF', url: NTN },
            { key: 2, alt: 'SKF', url: SKF },
            { key: 3, alt: 'ANN', url: ANN },
            { key: 4, alt: 'CILO', url: CILO },
            { key: 5, alt: 'TC', url: TC },
            { key: 6, alt: 'IINAA', url: IINAA },
            { key: 7, alt: 'WKHT', url: WKHT },
        ]
    }
    componentDidMount = () => {
        new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
        })
    }
    render() {
        const brandsList = this.state.brands.map((item) => (
            <li className="brandsItem" key={item.key}>
                <img src={item.url} alt={item.alt} />
            </li >
        ))
        return (
            <div className="brands" >
                <ModuleTitle content={"Brands"} />
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <ul className="brandsList">
                                {brandsList}
                            </ul>
                        </div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Brands;