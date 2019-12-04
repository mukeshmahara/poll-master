import React from 'react';
import { TweenMax } from 'gsap/all';



class VotedItem extends React.Component  {
    constructor (props) {
        super(props);
        
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
    }

    componentDidMount() {
        // use the node ref to create the animation
        this.myTween = TweenMax.to(this.myElement, 2, {width: `${this.props.width}%`});
    }

    render () {
        const { option, optionId, width } = this.props;

        return( 
            <div key={optionId} className="voteItem">
    
                <div className="voteBar" ref={div => this.myElement = div}></div>
        
                <span style={{paddingLeft: '0.5rem'}}>{Number((width).toFixed())}% {option}</span>
            </div> 
        )
    }
    
}

export default VotedItem;
