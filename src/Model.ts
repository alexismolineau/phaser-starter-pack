import BaseSound = Phaser.Sound.BaseSound;

export default class Model {

    private _soundOn: boolean;
    private _musicOn: boolean;
    private _bgMusicPlaying: boolean;
    private _bgMusic;

    constructor() {
        this._soundOn = true;
        this._musicOn = true;
        this._bgMusicPlaying = false;
    }

    set musicOn(value) {
        this._musicOn = value;
    }

    get musicOn() {
        return this._musicOn;
    }

    set soundOn(value: boolean) {
        this._soundOn = value;
    }

    get soundOn() {
        return this._soundOn;
    }

    set bgMusicPlaying(value: boolean) {
        this._bgMusicPlaying = value;
    }

    get bgMusicPlaying() {
        return this._bgMusicPlaying;
    }

    set bgMusic(bgMusic: BaseSound){
        this._bgMusic = bgMusic;
    }

    get bgMusic(){
        return this._bgMusic;
    }
}