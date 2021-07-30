import Phaser from "phaser";
import React from "react";

import logoImg from '../assets/logo.png';


class MyGame extends Phaser.Scene
{
    constructor (){
        super();
    }

    preload (){
        this.load.image('logo', logoImg);
    }
      
    create (){
        const logo = this.add.image(400, 150, 'logo');
      
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

class Game extends React.Component {
    componentDidMount(){
        const config = {
            type: Phaser.AUTO,
            parent: 'game-container',
            width: 800,
            height: 600,
            scene: MyGame
        };
        new Phaser.Game(config)
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return(
            <div id="phaser-game"></div>
        )
    }
}

export default Game;