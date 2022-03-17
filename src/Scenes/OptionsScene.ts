import 'phaser';
import Text = Phaser.GameObjects.Text;
import Image = Phaser.GameObjects.Image;
import Sprite = Phaser.GameObjects.Sprite;
import Model from "../Model";
import DataManager = Phaser.Data.DataManager;
import Button from "../Objects/Button";

export default class OptionsScene extends Phaser.Scene {

    text: Text;
    musicButton: Image;
    musicText: Text;
    soundButton: Image;
    soundText: Text;
    menuButton: Button;
    menuText: Text;
    model: Model;

    constructor (config) {
        super('Options');
    }

    init(): void {
        // initialisation du modele de config
        this.model = this.registry.get('model');

        // initialisation des objets
        this.text = this.add.text(300, 100, 'Options', { fontSize: '40px' });
        this.musicButton = this.add.image(200, 200, 'checkedBox');
        this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: '24px' });
        this.soundButton = this.add.image(200, 300, 'checkedBox');
        this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: '24px' });

        this.musicButton.setInteractive();
        this.soundButton.setInteractive();

        // maj des objets en fonction de la config enregistrée
        this.updateAudio();
    }


    create(): void {

        this.musicButton.on('pointerdown',  () => {
            this.model.musicOn = !this.model.musicOn;
            this.updateAudio();
        });

        this.soundButton.on('pointerdown',  () => {
            this.model.soundOn = !this.model.soundOn;
            this.updateAudio();
        });

        this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    }

    // méthode de mise à jour de l'interface
    updateAudio() {
        if (this.model.musicOn) {
            this.musicButton.setTexture('checkedBox');
            //si la musique n'est pas déjà démarrée on la démarre
            if(!this.model.bgMusicPlaying){
                this.model.bgMusic.play();
                this.model.bgMusicPlaying = true;
            }
        } else {
            this.musicButton.setTexture('box');
            this.model.bgMusic.stop();
            this.model.bgMusicPlaying = false;
        }
        if (this.model.soundOn) {
            this.soundButton.setTexture('checkedBox');
        } else {
            this.soundButton.setTexture('box');
        }
    }
};