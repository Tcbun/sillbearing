import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FalseSearch extends Component {
    render() {
        let wrapStyle = {
            paddingTop: ".1rem"
        }
        return (
            <div className="falseSearch" style={wrapStyle} >
                <Link to="/search">
                    <div className="toSearch" style={{background:"#f5f5f5"}}>
                        <i className="searchIcon"></i>
                        Search the product
                </div>
                </Link>
            </div >
        )
    }
}

export default FalseSearch;