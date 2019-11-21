import React from 'react';


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

	render() {
        return (
            <div className="options" >
                {/* {console.log(this.props.options, 'optsec')} */}
                <div>
                {
                    this.props.options.map( (option) => {
                        return (
                             <Option option={option.option} votes={option.votes} id={option._id} key={option._id}/>
                        )
                    } )
                }
                </div>
                <div className={this.state.displayBtn?'d-block': 'd-none'}>
                    <button >Vote</button>
                </div>
            
            </div>
        );
    }
}

export default OptionSec;