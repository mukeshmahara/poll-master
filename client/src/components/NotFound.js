import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import PageNotFound from '../assets/PageNotFound.svg';

const NotFound = () => (
    <div>
        <Navbar />
        <div>
            <h1 className="text-center mt-4 heading mb-3">Error 404</h1>
        </div>
        <div className="m-auto">
            <span className=" d-flex justify-content-center">
                <img src={PageNotFound} alt="screen Cleaning" className="error404" />
            </span>
            <p className="loadingTxt text-center mt-3"><em>This is not the page you are looking for.</em></p>
            <p className="loadingTxt text-center mt-3"><em>Go back <Link to="/">home</Link></em></p>
        </div>
    </div>

    
);
export default NotFound;