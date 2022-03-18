import 'phaser';
import Graphics = Phaser.GameObjects.Graphics;
import Text = Phaser.GameObjects.Text;

/**
 * Scène de chargement des ressources
 */
export default class PreloaderScene extends Phaser.Scene {


    constructor () {
        super('Preloader');
    }

    preload(): void {
        this.add.image(400, 200, 'logo');

        // barre de progression
        const progressBar: Graphics = this.add.graphics();
        const progressBox: Graphics = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        // texte de chargement
        const width: number = this.cameras.main.width;
        const height: number = this.cameras.main.height;

        const loadingText: Text = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                color: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        // texte %
        const percentText: Text = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                color: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        // texte des ressources chargées
        const assetText: Text = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                color: '#ffffff'
            }
        });

        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress',  (value: number) => {
            percentText.setText(value * 100 + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });

        // affichage de la maj du chargement des ressources
        this.load.on('fileprogress',  (file) => {
            assetText.setText('Loading asset: ' + file.key);
        });

        // chargement des ressources
        this.load.image('blueButton1', 'assets/ui/blue_button02.png');
        this.load.image('blueButton2', 'assets/ui/blue_button03.png');
        this.load.image('phaserLogo', 'assets/logo.png');
        this.load.image('box', 'assets/ui/grey_box.png');
        this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');
        this.load.audio('bgMusic', ['assets/TownTheme.mp3']);

        // une fois le chargement terminé on passe à l'écran titre
        this.load.on('complete',  () => {
            this.scene.start('Title');
        });

    }

};