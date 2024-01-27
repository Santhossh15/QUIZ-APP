import React from 'react'
import "../styles/Result.css"
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch } from 'react-redux'
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
const Result = () => {
    const dispatch = useDispatch()
    function onRestart() {
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }
    return (

        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            <div className='result flex-center'>
                <div className='flex'>
                    <span>Total Quiz Points : </span>
                    <span className='bold'>50</span>
                </div>
                <div className='flex'>
                    <span>Total Questions : </span>
                    <span className='bold'>05</span>
                </div>
                <div className='flex'>
                    <span>Total Attempts : </span>
                    <span className='bold'>03</span>
                </div>
                <div className='flex'>
                    <span>Total Earn Points : </span>
                    <span className='bold'>30</span>
                </div>
                <div className='flex'>
                    <span>Result</span>
                    <span className='bold'>Passed</span>
                </div>
            </div>
            <div className="start">
                <Link to={"/"} className='btn' onClick={onRestart}>Restart</Link>
            </div>
            <div className="container">
                <ResultTable />
            </div>
        </div>
    )
}

export default Result