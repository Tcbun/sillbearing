import React, { Component } from 'react';
import './index.scss';

class SuccessDialog extends Component {
    render() {
        return (
            <div className="successDialog" style={{ display: this.props.ifSuccessShow ? 'block' : 'none'}}>
                {this.props.successContent}
            </div>
        )
    }
}

export default SuccessDialog;