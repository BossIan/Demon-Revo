class startmenu extends Phaser.Scene {
  constructor(){
    super({key: "startmenu"});
  }
  preload(){
    this.load.setPath('assets/');
     this.load.spritesheet('startbutton', 'start1.png', {frameWidth: 258, frameHeight: 172});
    this.load.image('splashtitle', 'demonrevo.png');
  }
  create(){
    var button = this.add.image(width / 2 , height / 2 + height / 7.68, 'startbutton', 0);
    this.soundFX = this.sound.add('Shadowswing',{
      volume: 1,
    loop: "true",
  });
  this.sound.pauseOnBlur = false;
    this.soundFX.play();
    this.add.image( width / 2, height / 2 - height / 5.12, 'splashtitle');
button.inputEnabled = true;
    button.setInteractive();
    button.once('pointerup', function () {
            this.add.image( width / 2 , height / 2 + height / 7.68, 'startbutton', 0);
            this.scene.start('tutoriallevel');
          }, this);
          button.once('pointerout', function () {
                  this.add.image( width / 2 , height / 2 + height / 7.68, 'startbutton', 0);
          }, this);
    button.once('pointerdown', function(){
      this.add.image( width / 2 , height / 2 + height / 7.68, 'startbutton', 1);
    }, this);
  }
  update(){
  }
}
