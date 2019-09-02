import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class SearchIcon extends Component {
    render() {
        let wrapStyle = {
            height: "1.5rem",
            backgroundImage: `url(${require('../../../static/banner.png')})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            paddingTop: ".1rem"
        }
        return (
            <div className="searchWrap" style={wrapStyle} >
                <Link to="/search">
                    <div className="toSearch">
                        <i className="searchIcon"></i>
                        Search the product
                    </div>
                </Link>
            </div >
        )
    }
}

export default SearchIcon;
