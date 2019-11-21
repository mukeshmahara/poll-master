import React from 'react';

class VotedItem extends React.Component {

    render() {
        const { option, votes, optionId, width } = this.props;
        const style ={
            background: "rgba(38,83,175,0.7)" , height: '100%',padding: '0', margin: '0', width: `${width}%`, position: 'absolute'
        }
        return( 
            <div key={optionId} className="voteItem" style={{position: "relative"}}>
                <div style={style}>
                </div>
                <span style={{paddingLeft: '0.5rem'}}>{Number((width).toFixed(2))}% {option}</span>

            </div> 
        )
    }
}

export default VotedItem;