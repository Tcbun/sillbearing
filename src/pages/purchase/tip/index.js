import React, { Component } from 'react';
import './index.scss';
import WechatIMG164 from '../../../static/WechatIMG164.png';

class PurchaseTip extends Component {
    render() {
        return (
            <div className="purchaseTipWrap" style={{ display: this.props.isTipShow ? 'block' : 'none' }} >
                <div className="purchaseTip">
                    <div>
                        Tip:
                    </div>
                    <div>
                        After becoming a member, you can quote a price.
                    </div>
                    <div>
                        $10000/Year
                    </div>
                    <div>
                        <button>Open VIP member</button>
                    </div>
                    <div className="purchaseTipClose" onClick={this.props.changeTipState}>
                        <img src={WechatIMG164} alt="sill" />
                    </div>
                </div>
            </div>
        )
    }
}
export default PurchaseTip;