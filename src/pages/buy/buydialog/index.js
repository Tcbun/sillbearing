import React, { Component } from 'react';
import './index.scss';

// 图片
import cpxt from '../../../static/cpxt.png';
import buyClose from '../../../static/buyClose.png';

class Buydialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemActiveIndex: 0,
        }
    }
    confirmProduct = (itemId, e) => {
        this.setState({
            itemActiveIndex: itemId
        })
    }
    render() {
        const buydialogProductCategoryItemList = this.props.buydialogProductCategoryList.map((item, itemId) => (
            <div className={this.state.itemActiveIndex === itemId ? 'buydialogProductCategoryItem-active buydialogProductCategoryItem' : 'buydialogProductCategoryItem'} onClick={(e) => this.confirmProduct(itemId, e)} key={item.id}>{item.productName}</div>
        ))
        return (
            <div className="buydialogWrap" style={{display: this.props.ifDialogShow ? 'block' : 'none'}}>
                <div className="buydialog">
                    <img src={buyClose} alt="sill" className="buydialogClose" onClick={this.props.handleClose}/>
                    <div className="buydialogProductInfo">
                        <div>
                            <img src={cpxt} alt="sill" />
                        </div>
                        <div>
                            <div>$ 2.100-2.250</div>
                            <div>2000 sets in stock</div>
                            <div>Please choose the category</div>
                        </div>
                    </div>
                    <div className="buydialogProductCategory">
                        <div>Category</div>
                        {buydialogProductCategoryItemList}
                    </div>
                    <div className="purchaseQuantity">
                        <div>PurchaseQuantity</div>
                        <div>
                            <div onClick={this.props.handleSub}>-</div>
                            <div>{this.props.count}</div>
                            <div onClick={this.props.handleAdd}>+</div>
                        </div>
                    </div>
                    <div className="buydialogBtns">
                        <button onClick={this.props.handleAddToCart}>Add to cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Buydialog;