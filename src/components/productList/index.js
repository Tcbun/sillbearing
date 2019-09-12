import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import PIC from '../../static/a240649b38391a1a02acace447c07e7.png';
import Email from '../../static/email.png';
import { WingBlank } from 'antd-mobile';


class HotProduct extends Component {
    render() {
        return (
            <div className="productListWrap">
                <WingBlank>
                    <ul className="productList">
                        {
                            this.props.productList.map((item) => (
                                <li key={item.id}>
                                    <Link to="/">
                                        <img src={PIC} alt="sill" className="productPic" />
                                        <div className="productBottom">
                                            <div className="subject">Subject: {item.subject}</div>
                                            <div className="category">Category: Ball bearing Model：{item.model}</div>
                                            <div className="priceAndEmail">
                                                <div className="productPrice">${item.price}</div>
                                                <img src={Email} alt="sill" className="emailIcon" />
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </WingBlank>
            </div>
        )
    }
}

export default HotProduct;