import React from 'react';
import Question from './Question';
import OptionSec from './OptionSec';


class PollContainer extends React.Component {
   
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4  containerBox mb-2 d-flex justify-content-center align-item-stretch">
                <div className="container border text-center p-2">
                    <Question question={this.props.question} />
                    <hr />
                    <OptionSec pollId= {this.props.id} options={this.props.options} question={this.props.question} />
                </div>
            </div>
        )
    }
}

export default PollContainer;