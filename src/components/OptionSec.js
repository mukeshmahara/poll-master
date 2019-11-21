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
        console.log(optionId)
        let newOptions = this.props.options.map( (option) => {
            if(option._id === optionId) {
                option.votes++
            }
            return option;
        });
        console.log(newOptions)
        let updatedPoll = {
            question: this.props.question,
            options: newOptions
        }
        // console.log(votedOption, 'found')
        console.log(this.props.pollId)
        axios.post('http://localhost:5500/poll/vote/'+this.props.pollId, updatedPoll)
            .then(res => console.log(res.data));


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
                                votes={option.votes} 
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