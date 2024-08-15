import '../index.css'

export default function Header() {
    return (
        <div className="Text">
            <h1 className='h1'>Memory Game</h1>
            <p>
                Click on each hero card only once. After every click, the cards shuffle positions. 
                Be careful not to click the same hero twice, or you&apos;ll have to start over!
            </p>
            <p>Good luck!</p>
        </div>
    )
}
