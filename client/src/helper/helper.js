import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

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