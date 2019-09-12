import React, { Component } from 'react';
import './index.scss';

// 图片
import buyfooteremail from '../../../static/buyfooteremail.png';
import buyfootercollection from '../../../static/buyfootercollction.png';

class BuyFooter extends Component {
    render() {
        return (
            <div className="buyfooter" style={{display: this.props.ifShow ? 'flex' : 'none'}}>
                <div>
                    <div><img src={buyfooteremail} alt="sill" /></div>
                    <div>E-mail</div>
                </div>
                <div>
                    <div><img src={buyfootercollection} alt="sill" /></div>
                    <div>Collection</div>
                </div>
                <div>
                    <button className="buyfooterAdd" onClick={this.props.handleShowDialog}>Add to cart</button>
                    <button className="buyfooterBuy">Buy Now</button>
                </div>
            </div>
        )
    }
}
export default BuyFooter;