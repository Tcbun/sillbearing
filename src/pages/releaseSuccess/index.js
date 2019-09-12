import React from 'react';
import releaseSuccess from '../../static/releaseSuccess.png';
import './index.scss';
import Footer from '../../components/footer';

function ReleaseSuccess() {
    return (
        <div className="releaseSuccess">
            <img src={releaseSuccess} alt="sill" style={{ height:'1.87rem',width:'2rem' }}/>
            <Footer />
        </div>
    )
}

export default ReleaseSuccess;