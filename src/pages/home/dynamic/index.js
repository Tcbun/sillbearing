import React, { Component } from 'react';
import './index.scss';
import { WingBlank } from 'antd-mobile';
import Broadcast from './broadcast';
import Business from './business';

class Dynamic extends Component {
    render() {   
        return (
            <div className="dynamic">
                <div className="dynamicBroadcast" style={{ padding: '15px 0' }}>
                    <WingBlank>
                        <Broadcast />
                    </WingBlank>
                    <WingBlank>
                        <Business />
                    </WingBlank>
                </div>
            </div>
        )
    }
}

export default Dynamic;