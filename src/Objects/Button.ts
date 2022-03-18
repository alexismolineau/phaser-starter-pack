import 'phaser';
import Sprite = Phaser.GameObjects.Sprite;
import Text = Phaser.GameObjects.Text;
import {Scene} from "phaser";

export default class Button extends Phaser.GameObjects.Container {

    scene: Scene;
    button: Sprite
    text: Text
    x: number;
    y: number;

    constructor(scene : Scene, x: number, y: number, key1: string, key2: string, text: string, targetScene: string) {
        super(scene);
        this.scene = scene;
        this.x = x;
        this.y = y;
        // config du bouton et du texte
        this.button = this.scene.add.sprite(0, 0, key1).setInteractive();
        this.text = this.scene.add.text(0, 0, text, { fontSize: '32px', color: '#fff' });

        // Positionnement et ajout du bouton au container
        Phaser.Display.Align.In.Center(this.text, this.button);
        this.add(this.button);
        this.add(this.text);
        // action du bouton (direction vers une autre scene)
        this.button.on('pointerdown',  () => {
            this.scene.scene.start(targetScene);
        });
        // animations bouton
        this.button.on('pointerover',  () => {
            this.button.setTexture(key2);
        });
        this.button.on('pointerout', () => {
            this.button.setTexture(key1);
        });

        // ajoute le bouton à la scene
        this.scene.add.existing(this);
    }


}