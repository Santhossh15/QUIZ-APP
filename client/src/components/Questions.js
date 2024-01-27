import React, { useState } from 'react'
import { useEffect } from 'react'
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { useSelector } from 'react-redux'
const Questions = ({ onChecked }) => {
    const [{ isLoading, apiData, serverError }] = useFetchQuestion();
    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    useEffect(() => {
        console.log(questions);
    })
    function onSelect(index) {
        onChecked(index)
    }
    if (isLoading) return <h3 className='text-light'>isLoading</h3>
    if (serverError) return <h3 className='text-light'>{serverError.message || "Unknown Error"}</h3>
    return (
        <div className='questions'>
            <h2 className='text-light'>{questions?.question}</h2>
            <ul key={questions?.id}>
                {
                    questions?.options.map((ques, index) => (
                        <li key={index}>
                            <input
                                type="radio"
                                value={false}
                                name="options"
                                id={`ques${index}-option`}
                                onChange={() => onSelect(index)}
                            />
                            <label className='text-primary' htmlFor={`ques${index}-option`}>{ques}</label>
                            <div className='check checked'></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Questions