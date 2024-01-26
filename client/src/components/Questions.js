import React, { useState } from 'react'
import { useEffect } from 'react'
import data from '../database/data'
const Questions = () => {
    const [checked, setChecked] = useState(undefined)
    const question = data[0]
    useEffect(() => {
        console.log(question)
    })
    function onSelect() {
        setChecked(true)
        console.log("Radio Button Clicked")
    }
    return (
        <div className='questions'>
            <h2 className='text-light'>{question.question}</h2>
            <ul key={question.id}>
                {
                    question.options.map((ques, index) => (
                        <li key={index}>
                            <input
                                type="radio"
                                value={false}
                                name="options"
                                id={`ques$[index]-option`}
                                onChange={onSelect}
                            />
                            <label className='text-primary' htmlFor={`ques$[index]-option`}></label>
                            <div className='check checked'></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Questions