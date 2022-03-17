import 'phaser';

export default class BootScene extends Phaser.Scene {

    constructor () {
        super('Boot');
    }

    preload(): void {
        this.load.image('logo', 'assets/img.png');

    }

    create(): void {
        this.scene.start('Preloader');
    }
};