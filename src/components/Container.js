import React from 'react';



function Container() {
    return (
        <div className="text-center" role="status">

            <strong>Home Trending Voted</strong>
            <hr />
            <div className="container-fluid">
                <div className="row mr-3">
                    <div className="jumbotron mr-3 ">
                        <div className="col-md-4 border rounded-lg text-center ">
                            Here is Question and Answer Components
                        {/* <Question />
                        <Option /> */}
                        </div>
                    </div>
                    <div className="jumbotron mr-3">
                        <div className="col-md-4 border rounded text-center">
                            {/* <Question />
                        <Option /> */}
                            Here is Question and Answer Components

                        </div>

                    </div>
                    <div className="jumbotron mr-3">
                        <div className="col-md-4 border rounded text-center">
                            {/* <Question />
                        <Option /> */}
                            Here is Question and Answer Components
                    </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Container;