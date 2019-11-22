import React from 'react';

import svg404 from '../assets/404.svg';

const Error404 = () => {
    return (
        <div className="m-auto">
            <span className=" d-flex justify-content-center">
                <img src={svg404} alt="screen Cleaning" className="error404" />
            </span>
            <p className="loadingTxt text-center"><em>OOPS! No Polls Found. <br />Sorry!</em></p>
        </div>
    )
}

export default Error404;