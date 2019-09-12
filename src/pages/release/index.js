import React, { Component } from 'react';
import ModuleTitle from '../../components/moduleTitle';
import './index.scss';
import Footer from '../../components/footer';

class Release extends Component {
    constructor(props) {
        super(props)
        this.state = {
            placeholderValue: ''
        }
    }
    handleInputBlur = (e) => {
        if (e.target.value === '') {
            e.target.nextSibling.style.display = 'block';
            e.target.placeholder = this.state.placeholderValue;
        } else {
            e.target.nextSibling.style.display = 'none';
        }
    }
    handleInputClick = (e) => {
        this.setState({
            placeholderValue: e.target.placeholder
        })
        e.target.placeholder = '';
    }
    render() {
        return (
            <React.Fragment>
                <div className="release">
                    <ModuleTitle content={"ITEMS"} />
                    <ul className="releaseForm">
                        <li>
                            <span>*</span>
                            <div>Category：</div>
                            <select name="Category">
                                <option value="Bearing">Bearing</option>
                            </select>
                        </li>
                        <li>
                            <span>*</span>
                            <div>Model：</div>
                            <input type="text" placeholder="Please enter the model" name="Model" onBlur={(e) => this.handleInputBlur(e)} onClick={(e) => this.handleInputClick(e)} />
                            <span className="releaseTip">Wrong</span>
                        </li>
                        <li>
                            <span style={{ color: '#fff' }}>*</span>
                            <div>Brand：</div>
                            <input type="text" placeholder="Please enter brand" name="Brand" onBlur={(e) => this.handleInputBlur(e)} onClick={(e) => this.handleInputClick(e)} />
                            <span className="releaseTip">Wrong</span>
                        </li>
                        <li>
                            <span>*</span>
                            <div>Pack：</div>
                            <input type="text" placeholder="Please enter pack" name="Pack" onBlur={(e) => this.handleInputBlur(e)} onClick={(e) => this.handleInputClick(e)} />
                            <span className="releaseTip">Wrong</span>
                        </li>
                        <li>
                            <span>*</span>
                            <div>Quality：</div>
                            <input type="text" placeholder="Please enter quality" name="Quality" onBlur={(e) => this.handleInputBlur(e)} onClick={(e) => this.handleInputClick(e)} />
                            <span className="releaseTip">Wrong</span>
                        </li>
                        <li>
                            <span>*</span>
                            <div>Quantity：</div>
                            <input type="text" placeholder="Please enter quantity" name="Quantity" onBlur={(e) => this.handleInputBlur(e)} onClick={(e) => this.handleInputClick(e)} />
                            <span className="releaseTip">Wrong</span>
                        </li>
                        <li>
                            <span>*</span>
                            <div>Date of delivery：</div>
                            <input type="text" placeholder="2019-06-22" name="dateOfDelivery" onBlur={(e) => this.handleInputBlur(e)} onClick={(e) => this.handleInputClick(e)} />
                            <span className="releaseTip">Wrong</span>
                        </li>
                        <li>
                            <span>*</span>
                            <div>Place of delivery：</div>
                            <input type="text" placeholder="Please enter place" name="placeOfDelivery" onBlur={(e) => this.handleInputBlur(e)} onClick={(e) => this.handleInputClick(e)} />
                            <span className="releaseTip">Wrong</span>
                        </li>
                        <li>
                            <span style={{ color: '#fff' }}>*</span>
                            <div>Remarks：</div>
                            <input type="text" placeholder="Please enter notes" name="placeOfDelivery" onBlur={(e) => this.handleInputBlur(e)} onClick={(e) => this.handleInputClick(e)} />
                            <span className="releaseTip">Wrong</span>
                        </li>
                    </ul>
                    <button>RELEASE</button>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
export default Release;