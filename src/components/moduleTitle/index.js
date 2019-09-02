import React, { Component } from 'react';
class ModuleTitle extends Component {
    render() {
        return (
            <div className="moduleTitle">{this.props.content}<div className="gradblue" style={{width:this.props.styleWidth,marginLeft:this.props.styleMarginLeft}}></div></div>
        )
    }
}
export default ModuleTitle;