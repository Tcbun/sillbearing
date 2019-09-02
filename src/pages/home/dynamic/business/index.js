import React, { Component } from 'react';
import ModuleTitle from '../../../../components/moduleTitle';

class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businessContent: [
                { id: 0, name: 'Judy', money: '10,000', time: '17:11' },
                { id: 1, name: 'Daniel', money: '1000', time: '12:35' },
                { id: 2, name: 'Daniel', money: '1000', time: 'Yesterday' },
                { id: 3, name: 'Daniel', money: '1000', time: 'Yesterday' },
                { id: 4, name: 'Daniel', money: '1000', time: 'Yesterday' },
            ]
        }
        this.businessTimer = this.businessTimer.bind(this);
    }
    // 生意订单定时器
    businessTimer() {
        let businessListEle = document.getElementById('businessList');
        let businessListMarginTop = parseInt(window.getComputedStyle(businessListEle, null).marginTop);
        if (businessListMarginTop < -24) {
            businessListEle.classList.remove('transition-business');
            const arrayFirst = this.state.businessContent.shift();
            this.state.businessContent.push(arrayFirst);
            this.setState({
                businessContent: this.state.businessContent
            });
            businessListEle.style.marginTop = 0 + 'px';
        } else {
            businessListEle.classList.add('transition-business');
            businessListEle.style.marginTop = businessListMarginTop - 28 + 'px';
        }
    }
    componentDidMount = () => {
        this.timer1 = setInterval(this.businessTimer, 500);
    }
    componentWillUnmount = () => {
        clearInterval(this.timer1)
    }
    render() {
        // 生意面板内容
        const BusinessContent = this.state.businessContent.map((item) => (
            <li key={item.id}>
                <div>{item.name}</div>
                <div>Transaction ${item.money}</div>
                <div>{item.time}</div>
            </li>
        ))
        // 生意面板
        return (
            <div className="businessPanel">
                <ModuleTitle content={"Deal"}/>
                <div className="businessListWrap">
                    <ul className="businessList transition-business" id="businessList">
                        {BusinessContent}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Business;