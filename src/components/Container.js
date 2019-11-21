import React from 'react';
import PollContainer from './PollContainer'


function Container() {
    let optionArr = ["React", "Node", "Vue", "angular"];
	let animeArr = ["One Piece", "Naruto"];

    return (
        <div>

            <div className="text-center">
                <a>Home </a>
                <a>Trending </a>
                <a>Voted </a>
            </div>
            <hr />
            <div className="container-fluid">
                <div className="row">
                    <PollContainer options={optionArr} question="Fav Js" />
                    <PollContainer options={animeArr} question="Fav Anime" />
                    
                    <PollContainer options={optionArr} question="Fav Js" /> 
                    
                    
                </div>
            </div>
        </div >
    )
}

export default Container;