/* eslint-disable react/prop-types */
import '../index.css'
export default function WinPage({ onRestart }) {
    return (
        <div className="win-modal">
            <div className="win-modal-content">
                <h1>Congratulations, You Win!</h1>
                <p>Your memory is top-notch!</p>
                <button className='reset-btn' onClick={onRestart}>Play Again</button>
            </div>
        </div>
    );
}