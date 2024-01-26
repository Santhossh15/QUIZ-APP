import React from 'react'
import Questions from './Questions';

const Quiz = () => {
    function onNext() {
        console.log("On next click");
    }
    function onPrev() {
        console.log("On Previous click");
    }
    return (
        <div className='conatiner'>
            <h1 className='title text-light'>Quiz Application</h1>
            <Questions />
            <div className='grid'>
                <button className='btn prev' onClick={onPrev}>Prev</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}

export default Quiz