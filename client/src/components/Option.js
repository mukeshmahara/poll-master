import React from 'react';

class Option extends React.Component {

    handleClick = () => {
        this.props.handleVote(this.props.optionId)
    }
    render() {
        const { option, optionId } = this.props;

        return( 
            <div key={optionId} className="option" onClick={this.handleClick}>
                {/* {console.log(votes,'votes')} */}
                {option}
            </div> 
        )
    }
}

export default Option;