import React, { Component } from 'react';
import SearchIcon from './searchIcon';
import Brands from './brands';
import Dynamic from './dynamic/index';
import ProductList from '../../components/productList';
import { connect } from 'react-redux';
import './index.scss';
import ModuleTitle from '../../components/moduleTitle';

class Home extends Component {
    render() {
        const { hotProduct } = this.props;
        return (
            <div className="home">
                <SearchIcon />
                <Brands />
                <Dynamic />
                <div className="hotProduct">
                    <ModuleTitle content={"Hot-sale product"} styleWidth={'1.6rem'} styleMarginLeft={'-.8rem'} />
                    <div style={{ marginTop:'-.1rem' }}>
                        <ProductList productList={hotProduct} />
                    </div>
                </div>
            </div>
        )
    }
}
const mapProps = (store) => {
    return {
        hotProduct: store.home.hotProduct
    }
}
const mapDispatch = (dispatch) => {
    return {

    }
}
export default connect(mapProps, mapDispatch)(Home);