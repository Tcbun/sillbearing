import React, { Component } from 'react';
import './index.scss';

// 组件
import Swiper from 'swiper/dist/js/swiper.js';
import Buyfooter from './buyFooter';
import Buydialog from './buydialog';
import SuccessDialog from './success';
// 图片
import CPDT from '../../static/cpdt.png';
import rightArrow from '../../static/rightArrow.png';
import sill from '../../static/sillStore.png';
import wtjs from '../../static/twjs.png';
import userIcon from '../../static/userIcon.png';

class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productPic: [
                { id: 0, url: CPDT }
            ],
            isDetail: true,
            isEvaluate: false,
            detailContent: [
                { id: 0, content: wtjs }
            ],
            evaluateContent: [
                { id: 0, userIcon: userIcon, userName: 'qian', date: '2019-08-22', category: '6201-ZZ' },
                { id: 1, userIcon: userIcon, userName: 'qian', date: '2019-08-22', category: '6201-ZZ' },
                { id: 2, userIcon: userIcon, userName: 'qian', date: '2019-08-22', category: '6201-ZZ' },
                { id: 3, userIcon: userIcon, userName: 'qian', date: '2019-08-22', category: '6201-ZZ' },
                { id: 4, userIcon: userIcon, userName: 'qian', date: '2019-08-22', category: '6201-ZZ' },
            ],
            buyfooterShow:true,
            buydialogShow:false,
            count:1,
            ifSuccessShow:false,
            successContent:'',
            buydialogProductCategoryList: [
                { id: 0, productName: '6201-ZZ' },
                { id: 1, productName: '6201-ZZ' },
                { id: 2, productName: '6201-ZZ' },
                { id: 3, productName: '6201-ZZ' },
            ]
        }
    }
    handleClick = () => {
        this.setState({
            isDetail: !this.state.isDetail,
            isEvaluate: !this.state.isEvaluate
        })
    }
    componentDidMount = () => {
        new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    handleClose = () => {
        this.setState({
            buyfooterShow:true,
            buydialogShow:false
        })
    }
    handleShowDialog = () => {
        this.setState({
            buyfooterShow:false,
            buydialogShow:true
        })
    }
    handleAdd = () => {
        this.setState({
            count:this.state.count + 1
        })
    }
    handleSub = () => {
        if (this.state.count>0) {
            this.setState({
                count:this.state.count - 1
            })
        }
    }
    handleAddToCart = () => {
        // 这里需要发送请求
        this.setState({
            buydialogShow:false,
            ifSuccessShow:true,
            successContent:'Successfully joining the shopping cart ！',
            buyfooterShow:true
        })
        const _that = this;
        setTimeout(function(){
            console.log(this)
            _that.setState({
                ifSuccessShow:false
            })
        },1000);
    }
    render() {

        const productBigPicList = this.state.productPic.map((item) => (
            <li className="" key={item.id}>
                <img src={item.url} alt="sill" />
            </li >
        ));
        const mapDetailData = this.state.detailContent.map((item) => (
            <img src={item.content} alt="sill" key={item.id} />
        ));
        const mapEvaluateData = this.state.evaluateContent.map((item) => (
            <li key={item.id}>
                <div>
                    <div>
                        <img src={item.userIcon} alt="sill" />
                    </div>
                    <div>
                        <div>1**q</div>
                        <div>
                            <div>2019-08-22</div>
                            <div>Category: 6201-ZZ</div>
                        </div>
                        <div>Very good！</div>
                    </div>
                </div>
            </li>
        ));
        const nothing = <div className="nothing">Nothing</div>;

        return (
            <div className="buy">
                <Buydialog 
                    handleClose={this.handleClose}
                    ifDialogShow={this.state.buydialogShow}
                    count={this.state.count}
                    handleAdd={this.handleAdd}
                    handleSub={this.handleSub}
                    handleAddToCart={this.handleAddToCart}
                    buydialogProductCategoryList={this.state.buydialogProductCategoryList}
                />
                <SuccessDialog 
                    successContent={this.state.successContent}
                    ifSuccessShow={this.state.ifSuccessShow}
                />
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <ul className="productBigPicList">
                                {productBigPicList}
                            </ul>
                        </div>
                        <div className="swiper-slide"></div>
                        <div className="swiper-slide"></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="productInfo">
                    <div className="productInfoTitle">Ball bearing  6201-ZZ</div>
                    <div className="productInfoPriceSold">
                        <div>
                            <div>$10.000</div>
                            <div>$15.000</div>
                        </div>
                        <div>
                            Sold: 1000 sets
                        </div>
                    </div>
                    <div className="productInfoOther">
                        <div>Freight: $15.000</div>
                        <div>China</div>
                    </div>
                </div>
                <div className="choiceProductModel" onClick={this.handleShowDialog}>
                    <div>
                        <div>
                            Selected
                        </div>
                        <div>
                            {this.state.buydialogProductCategoryList[0].productName}
                        </div>
                    </div>
                    <div>
                        <img src={rightArrow} alt="sill" />
                    </div>
                </div>
                <div className="productStore">
                    <div className="productStoreLeft">
                        <img src={sill} alt="sill" className="productStoreLogo" />
                        <div>
                            <div>SILL BEARINGS</div>
                            <div>
                                <div>1200&nbsp;</div>
                                <div>products on sale</div>
                            </div>
                        </div>
                    </div>
                    <div className="productStoreRight">
                        <div>Enter shop</div>
                        <img src={rightArrow} alt="sill" />
                    </div>
                </div>
                <div className="productDetail">
                    <div className="productDetailType">
                        <div>
                            <div className={this.state.isDetail ? 'active-productDetail' : ''} onClick={() => this.handleClick()}>Details</div>
                        </div>
                        <div>
                            <div className={this.state.isEvaluate ? 'active-productDetail' : ''} onClick={() => this.handleClick()}>Evaluate</div>
                        </div>
                    </div>
                    <div className="productDetailTypeOne" style={{ display: this.state.isDetail ? 'block' : 'none' }}>
                        {this.state.detailContent.length > 0 ? mapDetailData : nothing}
                    </div>
                    <ul className="productDetailTypeTwo" style={{ display: this.state.isEvaluate ? 'block' : 'none' }}>
                        <div className="evaluateTitle">A total of {this.state.evaluateContent.length} comments</div>
                        {this.state.evaluateContent.length > 0 ? mapEvaluateData : nothing}
                        <div className="overLine">
                            <div>一 It's over. 一</div>
                        </div>
                    </ul>
                </div>
                <Buyfooter ifShow={this.state.buyfooterShow} handleShowDialog={this.handleShowDialog} />
            </div>
        )
    }
}

export default Buy;