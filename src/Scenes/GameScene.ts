import 'phaser';

/**
 * Scène du jeu
 */
export default class GameScene extends Phaser.Scene {

    constructor () {
        super('Game');
    }
    preload(): void {
        // load images
        this.load.image('logo', '../assets/img.png');
    }

    create():void {
        // ajout de l'image à la scène
        this.add.image(400, 300, 'logo');
    }
};