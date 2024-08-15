import Card from "./Card";
import '../styles/Cards.css'

export default function Cards() {
    return (
        <div className='card-contanier'>
        <Card name="Abaddon" image='/abaddon.png' onClick={() => {
            console.log('You clicked Abaddon!')
        }}/>
            <Card name="Bane" image='/bane.png' onClick={() => {
            console.log('You clicked Bane!');
        }}/>

        <Card name="Chaos Knight" image='/chaos_knight.png' onClick={() => {
            console.log('You clicked Chaos Knight!');
        }}/>

        <Card name="Ember Spirit" image='/ember_spirit.png' onClick={() => {
            console.log('You clicked Ember Spirit!');
        }}/>

        <Card name="Faceless Void" image='/faceless_void.png' onClick={() => {
            console.log('You clicked Faceless Void!');
        }}/>

        <Card name="Lina" image='/lina.png' onClick={() => {
            console.log('You clicked Lina!');
        }}/>

        <Card name="Lion" image='/lion.png' onClick={() => {
            console.log('You clicked Lion!');
        }}/>

        <Card name="Necrophos" image='/necrophos.png' onClick={() => {
            console.log('You clicked Necrophos!');
        }}/>

        <Card name="Obsidian Destroyer" image='/obsidian_destroyer.png' onClick={() => {
            console.log('You clicked Obsidian Destroyer!');
        }}/>

        <Card name="Wraith King" image='/wraith_king.png' onClick={() => {
            console.log('You clicked Wraith King!');
        }}/>
    </div>
    )
}
