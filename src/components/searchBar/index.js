import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import './index.scss';
import { withRouter } from 'react-router';

class SearchBarComponent extends Component {
    state = {
        value: '',
    }
    goToBack = () => {
        this.setState({ value: '' });
        this.props.history.go(-1);
        const inputSelector = document.querySelector('.am-search-value');
        inputSelector.blur();
    }
    changeInput = (value) => {
        this.setState({
            value: value
        })
    }
    componentDidMount = () => {
        this.autoFocusInst.focus();
    }
    render() {
        return (
            <div className="searchBar">
                <SearchBar
                    value={this.state.value}
                    placeholder="Search the product"
                    onChange={(value) => this.changeInput(value)}
                    onCancel={() => this.goToBack()}
                    ref={ref => this.autoFocusInst = ref}
                />
            </div>
        )
    }
}

export default withRouter(SearchBarComponent);