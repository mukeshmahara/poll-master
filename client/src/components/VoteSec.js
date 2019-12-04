import React from 'react';
import axios from 'axios';

import VotedItem from './VotedItem';


class VotedSec extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            totalVote: 0,
        }
    }
    calculateWidth = (votes) => {
        let totalVote = this.state.totalVote;

        let width = ((votes / totalVote) * 100);
        return width;
    }

    componentDidMount() {
        axios.get('https://pollmaster-v2.herokuapp.com/poll/'+this.props.pollId)
            .then(response => {
                // console.log(response.data, 'option')
                let totalVote = 0;
                let options = response.data.options;
                options.forEach(option => totalVote += option.votes);
                // console.log(totalVote)
                this.setState({
                    options: options,
                    totalVote: totalVote,
                })
            }
        )
    }
	render() {
        return (
            <div className="options" >
                {/* {console.log(this.props.options, 'optsec')} */}
                <div>
                {
                    this.state.options.map( (option) => {
                        return (
                            <VotedItem 
                                key={option._id} 
                                option={option.option}
                                optionId={option._id} 
                                votes={option.votes}
                                width = {this.calculateWidth(option.votes)}
                            />
                        )
                    } )
                }
                </div>
                <div>
                    <small className="text-secondary votedinfo">{this.state.totalVote} votes</small>
                </div>
            
            </div>
        );
    }
}

export default VotedSec;