import React, { useEffect } from 'react'
import Questions from './Questions';
import { useSelector, useDispatch } from "react-redux"
import { MoveNextQuestion, MovePreviousQuestion } from '../hooks/FetchQuestion';
const Quiz = () => {
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(trace)
    })
    function onNext() {
        if (trace < queue.length)
            dispatch(MoveNextQuestion())
    }
    function onPrev() {
        if (trace > 0)
            dispatch(MovePreviousQuestion())
    }
    return (
        <div className='container'>
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