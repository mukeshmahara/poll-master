import React from 'react';

class Option extends React.Component {
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

	render() {
        return (
            <div className="options" >

                {
                    this.props.options.map( (option) => {
                        return (
                            <span key={option} className="option" onClick={this.handleClick}><input type="radio" id={option} name={this.props.question} value={option} /><label htmlFor={option}>{option}</label></span>  
                        )
                    } )
                }
                <div className={this.state.displayBtn?'d-block': 'd-none'}>
                    <button >Vote</button>
                </div>
            
            </div>
        );
    }
}

export default Option;