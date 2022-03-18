import 'phaser';

/**
 * Scène de démarrage du jeu
 */
export default class BootScene extends Phaser.Scene {

    constructor () {
        super('Boot');
    }

    preload(): void {
        // ajout image au chargement
        this.load.image('logo', 'assets/img.png');
    }

    create(): void {
        // navigation vers la scene preloader
        this.scene.start('Preloader');
    }
};