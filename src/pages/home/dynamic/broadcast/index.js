import React, { Component } from 'react';
import LABA from '../../../../static/laba.png';

class Broadcast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            broadcastContent: [
                { id: 0, name: 'Bob', content: 'Publish a Purchase!0', time: 'now' },
                { id: 1, name: 'Jack', content: 'Publish a Purchase!1', time: 'yesterday' },
                { id: 2, name: 'June', content: 'Publish a Purchase!2', time: 'recent' }
            ]
        }
        this.broadcastTimer = this.broadcastTimer.bind(this);
    }
    // 广播定时器
    broadcastTimer() {
        let broadcastEle = document.getElementById('broadcastContent');
        let ele = parseInt(window.getComputedStyle(broadcastEle, null).marginTop);
        if (ele < 96) {
            broadcastEle.classList.remove('transition-broadcast');
            broadcastEle.style.marginTop = 96 + 'px';
            const arrayFirst = this.state.broadcastContent.shift();
            this.state.broadcastContent.push(arrayFirst);
            this.setState({
                broadcastContent: this.state.broadcastContent
            })
        } else {
            broadcastEle.classList.add('transition-broadcast');
            broadcastEle.style.marginTop = ele - 96 + 'px';
        }
    }
    componentDidMount = () => {
        this.timer1 = setInterval(this.broadcastTimer,1000)
    }
    componentWillUnmount = () => {
        clearInterval(this.timer1);
    }
    render() {
        // 广播内容
        const broadcastContent = this.state.broadcastContent.map((item) => (
            <li key={item.id}>
                <span style={{ color: '#0089e9', marginRight: '.09rem' }}>{item.name}</span>
                <span style={{ color: '#666666' }}>{item.content}</span>
                <span className="broadcastTip">{item.time}</span>
            </li>
        ))
        // 广播面板
        return (
            <div className="broadcast transition-broadcast">
                <img src={LABA} alt="" />
                <div className="broadcastContent" id="broadcastContent">
                    <ul>
                        {broadcastContent}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Broadcast;