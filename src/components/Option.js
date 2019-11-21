import React from 'react';

class Option extends React.Component {

    handleClick = () => {
        console.log('click handled')
    }
    render() {
        const { option, votes, id } = this.props;

        return( 
            <div key={id} className="option" onClick={this.handleClick}>
                {option}
            </div> 
        )
    }
}

export default Option;