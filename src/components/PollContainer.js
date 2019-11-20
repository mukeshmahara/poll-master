import React from 'react';
import Question from './Question';
import Option from './Option';


class PollContainer extends React.Component {
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4  containerBox mb-2 d-flex justify-content-center align-item-stretch">
                <div className="border text-center p-2 rounded" style={{ width: "20rem", height: "15rem", backgroundColor: "#E9ECEF" }}>
                    <Question question={this.props.question} />
                    <Option options={this.props.options} question={this.props.question}/>
                </div>
            </div>
        )
    }
}

export default PollContainer;