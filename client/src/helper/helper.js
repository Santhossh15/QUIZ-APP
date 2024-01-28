import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function attempts_Number(result) {
    return result.filter(result => result !== undefined).length
}

export function earnpoints_Number(result, answers, point) {
    return result.map((element, index) => answers[index] === element).filter(index => index).map(index => point).reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints
}

export function CheckUserExist({ children }) {
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={`/`} replace={true}></Navigate>
}

//Get Server Data
export async function getServerData(url, callback) {
    const data = await (await axios.get(url))?.data
    return callback ? callback(data) : data;
}

//Post Server Data
export async function postServerData(url, result, callback) {
    const data = await (await axios.post(url, result))?.data
    return callback ? callback(data) : data;
}
