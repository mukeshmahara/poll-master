import React from 'react';



function Container() {
    return (
        <div>

            <div className="text-center">
                <a>Home </a>
                <a>Trending </a>
                <a>Voted </a>
            </div>
            <hr />
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-sm-6 col-md-4  containerBox mb-2 d-flex justify-content-center align-item-stretch">
                        <div className="border text-center p-2 rounded" style={{width: "20rem", height: "15rem", backgroundColor: "#E9ECEF"}}>
                        Here is Question and Answer Components

                            </div>
                        {/* <Question />
                        <Option /> */}
                    </div>
                    <div className="col-12 col-sm-6 col-md-4  containerBox mb-2 d-flex justify-content-center align-item-stretch">
                        <div className="border text-center p-2 rounded" style={{width: "20rem", height: "15rem", backgroundColor: "#E9ECEF"}}>
                        Here is Question and Answer Components

                            </div>
                        {/* <Question />
                        <Option /> */}
                    </div>
                    <div className="col-12 col-sm-6 col-md-4  containerBox mb-2 d-flex justify-content-center align-item-stretch">
                        <div className="border text-center p-2 rounded" style={{width: "20rem", height: "15rem", backgroundColor: "#E9ECEF"}}>
                        Here is Question and Answer Components

                            </div>
                        {/* <Question />
                        <Option /> */}
                    </div>
                    <div className="col-12 col-sm-6 col-md-4  containerBox mb-2 d-flex justify-content-center align-item-stretch">
                        <div className="border text-center p-2 rounded" style={{width: "20rem", height: "15rem", backgroundColor: "#E9ECEF"}}>
                        Here is Question and Answer Components

                            </div>
                        {/* <Question />
                        <Option /> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Container;