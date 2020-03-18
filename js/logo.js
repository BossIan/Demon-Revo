class logo extends Phaser.Scene {
  constructor(){
    super({key: "logo"});
  }
	preload(){
	    this.load.setPath('assets/');
	this.add.image( width / 2, height / 2, 'logo');
	this.load.audio('lab', 'Enter, Lab Rats!.mp3');
	this.load.audio('Shadowswing', 'Shadowswing.mp3');
}
	create(){
	this.scene.start('startmenu');
	}
}
