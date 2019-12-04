import React from 'react';
import { TweenMax } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;

class PollOption extends React.Component {
    constructor(props) {
        super(props);
        
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
    }
    componentDidMount() {
        // use the node ref to create the animation
        this.myTween = TweenMax.to(this.myElement, 0.5, {opacity: 1});
    }

    
    render () {
        const { index, option } = this.props;
        return (
            <div className="form-inline mx-sm-3 mb-2" style={{opacity: 0}} ref={div => this.myElement = div}>
                <input
                    type="text"
                    className="form-control"
                    placeholder={`Option #${index + 1}`}
                    value={option.name}
                    onChange={this.props.handleOptionInput(index)}
                    required

                />
                <button
                    type="button"
                    onClick={this.props.handleRemoveOption(index)}
                    className="fonticons text-danger"
                >
                <i className="fas fa-minus-circle"></i>
                </button>
            </div>
        )
    }
}

export default PollOption;