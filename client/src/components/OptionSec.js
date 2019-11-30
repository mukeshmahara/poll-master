import React from 'react';
import axios from 'axios';

import Option from './Option';


class OptionSec extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            displayBtn: false
        }

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick () {
        this.setState({
            displayBtn: true
        })
    }

    handleVote = (optionId) => {
        this.props.toggleLoadVoting()
        let newOptions = this.props.options.map( (option) => {
            if(option._id === optionId) {
                option.votes++
            }
            return option;
        });
        // console.log(newOptions)
        let updatedPoll = {
            question: this.props.question,
            options: newOptions
        }
        // console.log(votedOption, 'found')
        // console.log(this.props.pollId)
        axios.post('https://stark-hamlet-26518.herokuapp.com/poll/vote/'+this.props.pollId, updatedPoll)
            .then(res => {
                console.log(res.data);
                this.props.toggleLoadVoting();
                this.props.displayVotingPercentage();
            });
    }



	render() {
        return (
            <div className="options" >
                {/* {console.log(this.props.options, 'optsec')} */}
                <div>
                {
                    this.props.options.map( (option) => {
                        return (
                            <Option 
                                option={option.option}
                                optionId={option._id} 
                                key={option._id} 
                                handleVote={this.handleVote} 
                            />
                        )
                    } )
                }
                </div>
            
            </div>
        );
    }
}

export default OptionSec;