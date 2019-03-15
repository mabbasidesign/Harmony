import React from 'react';
import Carrousel from './carrousel';
import TimeUntil from './timeUntil';

const Featured = () => {

    return (
        <div style={{ position:'reletive' }}>

        <Carrousel />

        <div className="artist_name">
            <div className="wrapper">
                Harmony Festival
            </div>
        </div>

        <TimeUntil />
        </div>
    );
}

export default Featured;