/* eslint-disable react/prop-types */
import '../index.css'
export default function LosePage({ onRestart }) {
    return (
        <div className="win-modal">
            <div className="win-modal-content">
                <h1>Game Over 😞!</h1>
                <p>You clicked the same card twice. Better luck next time!</p>
                <button className='reset-btn' onClick={onRestart}>Try Again 🙄</button>
            </div>
        </div>
    );
}