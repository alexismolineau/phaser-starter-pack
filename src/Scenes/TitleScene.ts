import 'phaser';
import config from '../config';
import GameObject = Phaser.GameObjects.GameObject;
import {Game} from "phaser";
import Model from "../Model";
import BaseSound = Phaser.Sound.BaseSound;
import Button from "../Objects/Button";

export default class TitleScene extends Phaser.Scene {

    model: Model;

    // bouton jeu
    gameButton: Button;
    // bouton options
    optionsButton: Button;
    // bouton crédits
    creditsButton: Button;

    bgMusic: BaseSound;

    constructor () {
        super('Title');
    }

    init(): void {
        this.model = this.registry.get('model');
    }

    create(): void {
        // Game
        this.gameButton = new Button(this, config.width/2, config.height/2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');
        // Options
        this.optionsButton = new Button(this, config.width/2, config.height/2, 'blueButton1', 'blueButton2', 'Options', 'Options');
        // Credits
        this.creditsButton = new Button(this, config.width/2, config.height/2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

        if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
            this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
            this.bgMusic.play();
            this.model.bgMusicPlaying = true;
            this.model.bgMusic = this.bgMusic;
        }

    }



};