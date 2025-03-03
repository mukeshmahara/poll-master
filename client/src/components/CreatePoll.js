import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import PollOption from './PollOption';


class CreatePoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            options: [
                {option: '', votes: 0},
                {option: '', votes: 0},
                {option: '', votes: 0}
            ],
            error: ''
        }
    }


    handleQuestionInput = (event) => {
        this.setState({
            question: event.target.value
        });
    }

    handleOptionInput = (index) => (event) => {
        const newOptions = this.state.options.map((option, optId) => {
          if (index !== optId) return option;
          return { ...option, option: event.target.value };
        });
    
        this.setState({ options: newOptions });
    };

    handleAddOption = () => {
        this.setState({
          options: this.state.options.concat([{ option: "", votes: 0 }])
        });
    };

    handleRemoveOption = index => () => {
        console.log(this.state.options.length)
        if( this.state.options.length >= 3 ) {
            this.setState({
                options: this.state.options.filter((opt, optId) => index !== optId)
              });
        }
        else {
            this.setState({
                error: 'You need at least Two Options for the poll'
            })
            setTimeout(() => {
                this.setState({
                    error: ''
                })
            },5000)
        }

    };

    onSubmit = (e) => {
        e.preventDefault();
        const poll = {
            question: this.state.question,
            options: this.state.options,
        }

        axios.post('https://pollmaster-v2.herokuapp.com/poll/add', poll)
            .then(res => console.log(res.data));

        console.log(poll);


        window.location = '/'; //Take the user back to home page '/'
    }


    render() {
        return (
            <div className="container-fluid">
                <Navbar />

                <div className="ContainerSec px-5 py-4">
                    <h1 className="text-center heading">Create A Poll</h1>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="pollQuestion" className="heading">Question:</label>
                            <input type="text" className="form-control" name="question" id="pollQuestion" value={this.state.question} onChange={this.handleQuestionInput} placeholder="Enter your Poll Question" required />
                        </div>
                        <div>
                            <label className="heading">Options:</label>
                            {
                                this.state.options.map((option, index) => (
                                    <PollOption key={index} option={ option } index={ index } handleRemoveOption={this.handleRemoveOption} handleOptionInput ={this.handleOptionInput} />
                                ))
                            }
                            <button
                                type="button"
                                onClick={this.handleAddOption}
                                className="btn btn-link text-decoration-none"
                                >
                                <i className="fas fa-plus-circle"></i> Add Option
                            </button>

                            {
                                this.state.error?
                                <div className="alert alert-danger">{this.state.error}</div>
                                :
                                ''
                            }

                        </div>
                        <input className="btn btn-primary mt-4" type="submit" value="Add Poll" />

                    </form>

                </div>
                            
            </div>
        );
    }
}

export default CreatePoll;