import React from 'react';
import Shop from '../Shop/Shop';
import Showcase from '../Showcase/Showcase';

const Home = () => {
    return (
        <div style={{  background: '#eaeded'}}>
            <Showcase />
            <Shop />
        </div>
    );
};

export default Home;