import React from 'react';
import axios from 'axios';


import PollContainer from './PollContainer';
import Error404 from './Error404';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            polls: []
        }
    }
    componentDidMount () {
        this.fetchPoll();
    }
    shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }
    fetchTrending = () => {
        axios.get('http://localhost:5500/poll/trending')
            .then (response => {
                // console.log(response.data)
                this.setState({ polls: response.data })

            })
            .catch ( (err) => { console.log(err) })
    }

    fetchPoll = () => {
        axios.get('http://localhost:5500/poll/')
            .then (response => {
                let shuffledPolls = this.shuffle(response.data);
                this.setState({ polls: shuffledPolls })
            })
            .catch ( (err) => { console.log(err) })
    }

    render() {
        // console.log(this.state.polls)
    return (
        <div className="ContainerSec">

            <div className="text-center pt-3">
                <button className="btn btn-link" onClick={ this.fetchPoll }> Home </button>
                <button className="btn btn-link" onClick={ this.fetchTrending }> Trending </button> 
                <button className="btn btn-link disabled" onClick={ this.fetchTrending }> Voted </button> 
                 
                {/* {console.log(this.state.polls) */}
            </div>
            <hr />
            <div className="container-fluid">
                <div className="row">
                    {
                        ( this.state.polls.length === 0 )?
                            <Error404 />
                        :
                            this.state.polls.map(poll => {
                                // console.log(poll)
                                return(
                                    <PollContainer key={poll._id} id={poll._id} question={poll.question} options={poll.options} />
                                )
                            })
                    }
                    
                    
                </div>
            </div>
        </div >
    )
    }
}

export default Container;
