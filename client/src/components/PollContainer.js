import React from 'react';


import Question from './Question';
import OptionSec from './OptionSec';
import VoteSec from './VoteSec';
import LoadingVote from './LoadingVote';


class PollContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voted: false,
            loading: false
        }
    }
    displayVotingPercentage = () => {
        this.setState({
            voted: true
        })
    }

    toggleLoadVoting = () => {
        this.setState(prevState => {
            return {
                loading: !prevState.loading
            }
        })
    }
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4  containerBox mb-4 d-flex justify-content-center align-item-stretch">
                <div className="container border text-center p-2">
                    <Question question={this.props.question} />
                    <hr />
                    {
                        (this.state.loading)?
                            <LoadingVote />
                            :
                            (this.state.voted)?
                                <VoteSec
                                    pollId= {this.props.id}  
                                />
                            :
                            <OptionSec 
                                pollId= {this.props.id} 
                                options={this.props.options} 
                                question={this.props.question} 
                                displayVotingPercentage={this.displayVotingPercentage} 
                                toggleLoadVoting = {this.toggleLoadVoting}
                            />

                    }
                </div>
            </div>
        )
    }
}

export default PollContainer;