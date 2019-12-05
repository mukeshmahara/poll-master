import React from 'react';

import Navbar from './Navbar';
import Container from './Container';


class Main extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                <Container />
            </div>
        )
    }
}

export default Main;