import React from 'react';

import loadingGIF from '../loading.gif'

const LoadingVote = () => {
    
        return (
            <div className="options loadingComp" >
                
                <img src={loadingGIF} className="loadingGIF" alt="loading..." />
                <em>Voting in progress</em>
            </div>
        );
    }


export default LoadingVote;