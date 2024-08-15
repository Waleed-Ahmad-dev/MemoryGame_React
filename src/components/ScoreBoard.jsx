/* eslint-disable react/prop-types */
import '../index.css';
function ScoreBoard(props) {
    return (
        <div className="score-board">
            <h1>Score: {props.Score}</h1>
            <h1>Best Score: {props.bestScore}</h1>
        </div>
    )
}

export default ScoreBoard
