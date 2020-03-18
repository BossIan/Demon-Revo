var width = 1024;
var height = 768;
let config;
config = {
    type: Phaser.AUTO,
    backgroundColor: '#2dab2d',
    scale: {
      mode: Phaser.Scale.FIT,
      parent: 'phaser-example',
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: width,
      height: height
    },
    transparent: false,
    antialias: false,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 600}
        }
    },
    scene: [prelogo, logo, startmenu, tutoriallevel]
};
let game = new Phaser.Game(config);
var button;
var wingdings;
var platforms;
var SPEED = 125;
var key_A;
var key_D;
var key_W;
var key_Space;
var cam;
var doors;
var walls;
var doorup1;
var doordown1;
var doorup2;
var doordown2;
var enemy;
var mechhitbox;
var mech1;
var laser_drone_right1;
var laser_drone_left1;
var cursors;
var laser1;
var laser2;
var laser;
var wingdingshp = 5;
var txt;
var txt2;
var invincible = 0;
function lasershoot() {
  this.time.delayedCall(8000, lasershoot, [], this);
  if (wingdings.x > 315.0 && wingdings.x < 600.0) {
  var laser_drone_right1angle = Phaser.Math.Angle.BetweenPoints (laser_drone_right1, wingdings);
  laser1 = this.physics.add.sprite(laser_drone_right1.x, laser_drone_right1.y - 2, 'laser', 0);
  laser1.rotation = laser_drone_right1angle;
  laser1.body.velocity.x = Math.cos(laser_drone_right1angle) * 500;
  laser1.body.velocity.y = Math.sin(laser_drone_right1angle) * 500;
  laser1.body.allowGravity = false;
  this.physics.add.overlap( laser1, platforms, laserdestroy);
  this.physics.add.overlap( laser1, doors, laserdestroy);
  this.physics.add.overlap( laser1, walls, laserdestroy);
  this.physics.add.overlap( laser1, laser_drone_left1, laserdestroy);
  this.physics.add.overlap( laser1, wingdings, laserdestroyhp);
}};
function lasershoot2() {
  this.time.delayedCall(8000, lasershoot2, [], this);
  if (wingdings.x > 315.0 && wingdings.x < 600.0) {
  var laser_drone_left1angle = Phaser.Math.Angle.BetweenPoints (laser_drone_left1, wingdings);
  laser2 = laser.create(laser_drone_left1.x, laser_drone_left1.y - 2, 'laser', 0);
  laser2.rotation = laser_drone_left1angle;
  laser2.body.velocity.x = Math.cos(laser_drone_left1angle) * 500;
  laser2.body.velocity.y = Math.sin(laser_drone_left1angle) * 500;
  laser2.body.allowGravity = false;
  this.physics.add.overlap( laser2, platforms, laserdestroy2);
  this.physics.add.overlap( laser2, doors, laserdestroy2);
  this.physics.add.overlap( laser2, walls, laserdestroy2);
  this.physics.add.overlap( laser2, laser_drone_right1, laserdestroy2);
  this.physics.add.overlap( laser2, wingdings, laserdestroy2hp);
}};
function invincibilityframes2() {
    invincible = 0;
}
function laserdestroy() {
   laser1.destroy();
}
function laserdestroyhp() {
  if (invincible > 1) {
    laser1.destroy();
  }
  else {
    wingdingshp -= 1;
    laser1.destroy();
    invincible = 100
  }
}
function laserdestroy2() {
    laser2.destroy();
}
function laserdestroy2hp() {
  if (invincible > 1) {
    laser2.destroy();
  }
  else {
    wingdingshp -= 1;
    laser2.destroy();
    invincible = 100
  }
}
function cammove1() {
  cam.x += 10
}
function cammove2() {
  cam.x -= 10
}
