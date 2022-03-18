import 'phaser';
import Zone = Phaser.GameObjects.Zone;
import config from '../config';
import Tween = Phaser.Tweens.Tween;
import Text = Phaser.GameObjects.Text;

/**
 * Scène des crédits
 */
export default class CreditsScene extends Phaser.Scene {

    // texte crédit
    creditsText: Text;
    madeByText: Text;
    // zone d'ancre pour les texte / tween
    zone: Zone;
    // Tween (défilement)
    creditsTween: Tween;
    madeByTween: Tween;

    constructor () {
        super('Credits');
    }

    init(): void {
        this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', color: '#fff' });
        this.madeByText = this.add.text(0, 0, 'Created By: Anyone', { fontSize: '26px', color: '#fff' });
        this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);
    }


    create(): void {

        // alignement au centre
        Phaser.Display.Align.In.Center(
            this.creditsText,
            this.zone
        );
        Phaser.Display.Align.In.Center(
            this.madeByText,
            this.zone
        );

        // texte madeBy hors de l'écran
        this.madeByText.setY(1000);


        // configuration tweens
        this.creditsTween = this.tweens.add({
            targets: this.creditsText,
            y: -100,
            ease: 'Power1',
            duration: 3000,
            delay: 1000,
            onComplete: () => {
                this.creditsTween.destroy;
            }
        });

        this.madeByTween = this.tweens.add({
            targets: this.madeByText,
            y: -300,
            ease: 'Power1',
            duration: 8000,
            delay: 1000,
            onComplete:  () => {
                this.madeByTween.destroy;
                this.scene.start('Title');
            }
        });
    }

};