/* eslint-disable no-unused-vars */
import Card from "./Card";
import '../styles/Cards.css'
import ScoreBoard from "./ScoreBoard";
import React, { useState } from 'react';

export default function Cards() {

    const [score, setScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const [bestScore, setBestScore] = useState(0);

    const handleCardClick = (cardName) => {
        if (clickedCards.includes(cardName)) {
            // Card clicked twice: reset score
            if (score > bestScore) {
                setBestScore(score); // Update best score if current score is higher
            }
            setScore(0);
            setClickedCards([]);
        } else {
            // Increase score and add card to history
            setScore(prevScore => {
                const newScore = prevScore + 1;
                if (newScore > bestScore) {
                    setBestScore(newScore); // Update best score if new score is higher
                }
                return newScore;
            });
            setClickedCards(prevClickedCards => [...prevClickedCards, cardName]);
        }
    };

    return (
        <>
            <div>
                <ScoreBoard Score={score} bestScore={bestScore}/>
            </div>
            <div className='card-contanier'>
                <Card name="Abaddon" image='/abaddon.png' onClick={() => {
                    console.log('You clicked Abaddon!')
                    handleCardClick('Abaddon')
                }}/>
                    <Card name="Bane" image='/bane.png' onClick={() => {
                    console.log('You clicked Bane!');
                    handleCardClick('Bane')
                }}/>

                <Card name="Chaos Knight" image='/chaos_knight.png' onClick={() => {
                    console.log('You clicked Chaos Knight!');
                    handleCardClick('Chaos Knight')
                }}/>

                <Card name="Ember Spirit" image='/ember_spirit.png' onClick={() => {
                    console.log('You clicked Ember Spirit!');
                    handleCardClick('Ember Spirit')
                }}/>

                <Card name="Faceless Void" image='/faceless_void.png' onClick={() => {
                    console.log('You clicked Faceless Void!');
                    handleCardClick('Faceless Void')
                }}/>

                <Card name="Lina" image='/lina.png' onClick={() => {
                    console.log('You clicked Lina!');
                    handleCardClick('Lina')
                }}/>

                <Card name="Lion" image='/lion.png' onClick={() => {
                    console.log('You clicked Lion!');
                    handleCardClick('Lion')
                }}/>

                <Card name="Necrophos" image='/necrophos.png' onClick={() => {
                    console.log('You clicked Necrophos!');
                    handleCardClick('Necrophos')
                }}/>

                <Card name="Obsidian Destroyer" image='/obsidian_destroyer.png' onClick={() => {
                    console.log('You clicked Obsidian Destroyer!');
                    handleCardClick('Obsidian Destroyer')
                }}/>

                <Card name="Wraith King" image='/wraith_king.png' onClick={() => {
                    console.log('You clicked Wraith King!');
                    handleCardClick('Wraith King')
                }}/>
            </div>
        </>
        
    )
}
