import React from 'react';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
const Home = () => {
    return (
        <div>
            <Header />
            I am home page!
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log('state ', state);
}

export default connect(mapStateToProps, null)(Home);