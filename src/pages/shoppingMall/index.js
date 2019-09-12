import React, { Component } from 'react';
import './index.scss';

// 组件
import FalseSearch from '../../components/falseSearch';
import ProductList from '../../components/productList';
//图片
import right from '../../static/right.png';
// 第三方库
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class ShoppingMall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoriesMenuShow: false,
            sortMenuShow: false,
            categoriesSelected: 0,
            sortSelected:0,
            shoppingMallData: [
                { id: '0', subject: 'SILL BEARING', model: '6019 ZZ', price: '22.000' },
                { id: '1', subject: 'SILL BEARING', model: '6019 ZZ', price: '22.000' },
                { id: '2', subject: 'SILL BEARING', model: '6019 ZZ', price: '22.000' }
            ],
            categories: [
                { id: '0', CategoriesName: 'All', count: '200' },
                { id: '1', CategoriesName: 'Ball bearing', count: '51' },
                { id: '2', CategoriesName: 'Spherical Roller Bearings', count: '51' },
                { id: '3', CategoriesName: 'Thrust self-aligning roller bearing', count: '51' },
                { id: '4', CategoriesName: 'Cylindrical roller bearing', count: '51' },
                { id: '5', CategoriesName: 'Angular contact bearing', count: '51' },
            ],
            sort:[
                {id:'0',sortType:'By Sales'},
                {id:'1',sortType:'From low to high by price'},
                {id:'2',sortType:'From high to low by price'}
            ]
        }
    }
    handleCategoriesMenuShow = () => {
        this.setState({
            sortMenuShow:false,
            categoriesMenuShow: !this.state.categoriesMenuShow
        })
    }
    handleSortMenuShow = () => {
        this.setState({
            categoriesMenuShow:false,
            sortMenuShow: !this.state.sortMenuShow
        })
    }
    handleToggleCategories = (selectedIndex, e) => {
        console.log(selectedIndex)
        this.setState({
            categoriesSelected: selectedIndex
        })
    }
    handleToggleSort = (selectedIndex,e) => {
        this.setState({
            sortSelected: selectedIndex
        })
    }
    render() {
        return (
            <div className="shoppingMall">
                <div className="falseSearchWrap">
                    <FalseSearch />
                </div>
                <div className="conditionsQuery">
                    <div className="conditionsQueryLeft" onClick={() => this.handleCategoriesMenuShow()} style={{ color: this.state.categoriesMenuShow ? 'red' : '' }} >
                        Categories<span className="dsj" style={{ borderColor: this.state.categoriesMenuShow ? 'red transparent transparent transparent' : '' }}></span>
                        <CSSTransition
                            timeout={500}
                        >
                            <ul className="conditionsQueryLeftMenu" style={{ display: this.state.categoriesMenuShow ? 'block' : 'none' }}>
                                {
                                    this.state.categories.map((item, selectedIndex) => (
                                        <li key={item.id} onClick={(e) => this.handleToggleCategories(selectedIndex, e)} className={this.state.categoriesSelected === selectedIndex ? 'selected' : ''}>
                                            <div><img src={right} alt="sill" />{item.CategoriesName}</div>
                                            <div>{item.count}</div>
                                        </li>
                                    ))
                                }
                            </ul>

                        </CSSTransition>
                    </div>
                    <div className="conditionsQueryRight" onClick={() => this.handleSortMenuShow()} style={{ color: this.state.sortMenuShow ? 'red' : '' }}>
                        Sort<span className="dsj" style={{ borderColor: this.state.sortMenuShow ? 'red transparent transparent transparent' : '' }}></span>
                        <CSSTransition
                            timeout={500}
                        >
                            <ul className="conditionsQueryRightMenu" style={{ display: this.state.sortMenuShow ? 'block' : 'none' }}>
                                {
                                    this.state.sort.map((item, selectedIndex) => (
                                        <li key={item.id} onClick={(e) => this.handleToggleSort(selectedIndex, e)} className={this.state.sortSelected === selectedIndex ? 'selected' : ''}>
                                            <div><img src={right} alt="sill" />{item.sortType}</div>
                                            <div>{item.count}</div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </CSSTransition>
                    </div>
                </div>
                <ProductList productList={this.state.shoppingMallData} />
            </div>
        )
    }
}

export default ShoppingMall;