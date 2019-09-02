import React, { Component } from 'react';
import './index.scss';
import { WingBlank } from 'antd-mobile';
import FalseSearch from '../../components/falseSearch';
import ModuleTitle from '../../components/moduleTitle';
import { connect } from 'react-redux';

class Purchase extends Component {
    render() {
        const { purchaseData } = this.props;
        return (
            <div className="purchase">
                <FalseSearch />
                <WingBlank>
                    <div className="purchaseTitle">
                        <ModuleTitle content={"Purchase"} styleWidth={'1rem'} styleMarginLeft={"-.5rem"} />
                    </div>
                    <ul className="purchaseList">
                        {purchaseData.map((item) => (
                            <li key={item.id}>
                                <div className="indexOrder">
                                    <div>Buy:{item.buy}</div>
                                    <div>In the quotation</div>
                                </div>
                                <div className="indexTime">
                                    {item.time}
                                </div>
                                <div className="indexItem">
                                    <div>Brand:</div>
                                    <div>{item.brand}</div>
                                </div>
                                <div className="indexItem">
                                    <div>Pack: </div>
                                    <div>{item.pack}</div>
                                </div>
                                <div className="indexItem">
                                    <div>Quality:</div>
                                    <div>{item.quality}</div>
                                </div>
                                <div className="indexItem">
                                    <div>Quantity: </div>
                                    <div>{item.quantity} sets</div>
                                </div>
                                <div className="indexItem">
                                    <div>Place of receipt:</div>
                                    <div>{item.place}</div>
                                </div>
                                <div className="indexItem">
                                    <div>Date of delivery:</div>
                                    <div>{item.date}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </WingBlank>
            </div>
        )
    }
}
const mapProps = (store) => {
    return {
        purchaseData: store.purchase.purchaseData
    }
}
const mapDispatch = (Dispatch) => {
    return {

    }
}
export default connect(mapProps, mapDispatch)(Purchase);