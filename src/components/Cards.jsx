/* eslint-disable no-unused-vars */
import Card from "./Card";
import '../styles/Card.css'
import ScoreBoard from "./ScoreBoard";
import React, { useState } from 'react';
import WinPage from './winPage';
import LosePage from "./LosePage";
export default function Cards() {

    const [score, setScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const [bestScore, setBestScore] = useState(0);
    const [cardOrder, setCardOrder] = useState([
        { name: "Abaddon", image: '/abaddon.png' },
        { name: "Bane", image: '/bane.png' },
        { name: "Chaos Knight", image: '/chaos_knight.png' },
        { name: "Ember Spirit", image: '/ember_spirit.png' },
        { name: "Faceless Void", image: '/faceless_void.png' },
        { name: "Lina", image: '/lina.png' },
        { name: "Lion", image: '/lion.png' },
        { name: "Necrophos", image: '/necrophos.png' },
        { name: "Obsidian Destroyer", image: '/obsidian_destroyer.png' },
        { name: "Wraith King", image: '/wraith_king.png' }
    ]);
    const [isShuffling, setIsShuffling] = useState(false);
    const [showWinModal, setShowWinModal] = useState(false);
    const [showLoseModal, setShowLoseModal] = useState(false);

    const shuffleCards = () => {
        setIsShuffling(true); // Start animation
        const shuffled = [...cardOrder];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setCardOrder(shuffled);
    
        // Remove the animation class after it finishes
        setTimeout(() => {
            setIsShuffling(false);
        }, 600); // Duration matches the animation time
    };

    const handleCardClick = (cardName) => {
        if (clickedCards.includes(cardName)) {
            // User loses the game
            if (score > bestScore) {
                setBestScore(score);
            }
            setScore(0);
            setClickedCards([]);
            setShowLoseModal(true); // Show lose modal
        } else {
            setScore(prevScore => {
                const newScore = prevScore + 1;
                if (newScore > bestScore) {
                    setBestScore(newScore);
                }
                return newScore;
            });
            setClickedCards(prevClickedCards => {
                const newClickedCards = [...prevClickedCards, cardName];
                if (newClickedCards.length === cardOrder.length) {
                    setShowWinModal(true); // Show win modal if user wins
                }
                return newClickedCards;
            });
        }
        shuffleCards();
    };

    const handleRestart = () => {
        setShowWinModal(false);
        setShowLoseModal(false);
        setScore(0);
        setClickedCards([]);
        shuffleCards(); // Optionally shuffle the cards on restart
    };


    return (
        <>
            {showWinModal && <WinPage onRestart={handleRestart} />}
            {showLoseModal && <LosePage onRestart={handleRestart} />}
            <div>
                <ScoreBoard Score={score} bestScore={bestScore} />
            </div>
            <div className={`card-container ${isShuffling ? 'shuffling' : ''}`}>
                {cardOrder.map(card => (
                    <Card
                        key={card.name}
                        name={card.name}
                        image={card.image}
                        onClick={() => handleCardClick(card.name)}
                    />
                ))}
            </div>
        </>
    );
}