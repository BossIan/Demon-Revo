class tutoriallevel extends Phaser.Scene {
  constructor(){
    super({key: "tutoriallevel"});
  }
  preload(){
		this.sound.stopAll();
    var lab = this.sound.add('lab',{
      volume: 1,
    loop: "true",
  });
	lab.play()
	this.load.setPath('assets/');
  this.load.spritesheet('tilemap 1-A', 'tilemap 1-A.png', {frameWidth: 30, frameHeight: 30});
    this.load.image('wingdings', 'Wingdings.png');
    this.load.image('cam', 'cam.png');
    this.load.image('bg1', 'bg1.jpg');
    this.load.image('doorup', 'doorup.png');
    this.load.image('doordown', 'doordown.png');
    this.load.image('wall', 'wall.png');
    this.load.spritesheet('mech', 'mech.png', {frameWidth: 64, frameHeight: 64});
    this.load.image('mechhitbox', 'mech-hitbox.png');
    this.load.spritesheet('laser drone left', 'laser drone left.png', {frameWidth: 30, frameHeight: 29});
    this.load.spritesheet('laser drone right', 'laser drone right.png', {frameWidth: 30, frameHeight: 29});
    this.load.spritesheet('laser', 'laser.png', {frameWidth: 13, frameHeight: 5});
    this.load.image('background1', 'background1.png');
    this.load.image('wongdongs', 'wongdongs.png');
    this.load.spritesheet('elevator', 'elevator.png', {frameWidth: 91, frameHeight: 85});
  }
  create(){
    wingdingshp = 5;
    this.physics.world.bounds.width = 900;
    this.physics.world.bounds.height = 422;
    this.add.image(width / 2, height / 2, 'background1');
    platforms = this.physics.add.staticGroup();
    doors = this.physics.add.group();
    enemy = this.physics.add.group();
    walls = this.physics.add.staticGroup();
    floors = this.physics.add.staticGroup();
    cursors = this.input.keyboard.createCursorKeys();
    laser = this.physics.add.group();
    laser1 = this.physics.add.sprite(10000, 10000 - 2, 'laser', 0);
    laser2 = this.physics.add.sprite(10000, 10000 - 2, 'laser', 0);
    laser_drone_right1 = this.physics.add.sprite(345.0, 254.5, "laser drone right", 0);
    laser_drone_left1 = this.physics.add.sprite(555.0, 254.5, "laser drone left", 0);
    elevator = this.physics.add.sprite(750.0, 367.5, 'elevator', 0).setScale(0.88235295);
    elevator.body.allowGravity = false;
    elevator2 = this.physics.add.sprite(750.0, 157.5, "elevator", 0).setScale(0.9, 0.88235295);
    elevator2.body.allowGravity = false;
    wingdings = this.physics.add.image(45.0, 385.0, 'wingdings');
    cam = this.add.image(wingdings.x, wingdings.y - 70 , 'cam');
    cam2 = this.add.image(800.0, 105.0, 'cam');
    doordown1 = doors.create(300.0, 390.0, "doordown");
    doordown1.body.allowGravity = false;
    doorup1 = doors.create(300.0, 358.0, "doorup");
    doorup1.body.allowGravity = false;
    doordown2 = doors.create(600.0, 390.0, "doordown");
    doordown2.body.allowGravity = false;
    doorup2 = doors.create(600.0, 358.0, "doorup");
    doorup2.body.allowGravity = false;
    doordown3 = doors.create(30.0, 180.0, "doordown");
    doordown3.body.allowGravity = false;
    doorup3 = doors.create(30.0, 150.0, "doorup");
    doorup3.body.allowGravity = false;
    this.anims.create({
      key: 'elevatoropen',
      repeat: -1,
      frameRate: 15,
      frames: this.anims.generateFrameNumbers("elevator")
    });
    elevator.anims.play('elevatoropen');
    wingdings.setCollideWorldBounds(true);
platforms.create(495.0, 330.0, "tilemap 1-A", 12);
platforms.create(465.0, 330.0, "tilemap 1-A", 10);
platforms.create(435.0, 330.0, "tilemap 1-A", 10);
platforms.create(405.0, 330.0, "tilemap 1-A", 13);
floors.create(180.0, 420.0, "tilemap 1-A", 1);
floors.create(720.0, 420.0, "tilemap 1-A", 1);
floors.create(600.0, 420.0, "tilemap 1-A", 2);
floors.create(300.0, 420.0, "tilemap 1-A", 2);
floors.create(300.0, 210.0, "tilemap 1-A", 3);
floors.create(900.0, 420.0, "tilemap 1-A", 4);
floors.create(0.0, 420.0, "tilemap 1-A", 5);
floors.create(780.0, 420.0, "tilemap 1-A", 0);
floors.create(810.0, 420.0, "tilemap 1-A", 0);
floors.create(840.0, 420.0, "tilemap 1-A", 0);
floors.create(750.0, 420.0, "tilemap 1-A", 0);
floors.create(690.0, 420.0, "tilemap 1-A", 0);
floors.create(660.0, 420.0, "tilemap 1-A", 0);
floors.create(630.0, 420.0, "tilemap 1-A", 0);
floors.create(570.0, 420.0, "tilemap 1-A", 0);
floors.create(540.0, 420.0, "tilemap 1-A", 0);
floors.create(510.0, 420.0, "tilemap 1-A", 0);
floors.create(480.0, 420.0, "tilemap 1-A", 0);
floors.create(450.0, 420.0, "tilemap 1-A", 0);
floors.create(420.0, 420.0, "tilemap 1-A", 0);
floors.create(390.0, 420.0, "tilemap 1-A", 0);
floors.create(360.0, 420.0, "tilemap 1-A", 0);
floors.create(330.0, 420.0, "tilemap 1-A", 0);
floors.create(510.0, 210.0, "tilemap 1-A", 1);
floors.create(750.0, 210.0, "tilemap 1-A", 1);
floors.create(150.0, 210.0, "tilemap 1-A", 1);
floors.create(210.0, 420.0, "tilemap 1-A", 0);
floors.create(270.0, 420.0, "tilemap 1-A", 0);
floors.create(240.0, 420.0, "tilemap 1-A", 0);
floors.create(150.0, 420.0, "tilemap 1-A", 0);
floors.create(120.0, 420.0, "tilemap 1-A", 0);
floors.create(90.0, 420.0, "tilemap 1-A", 0);
floors.create(60.0, 420.0, "tilemap 1-A", 0);
floors.create(0.0, 210.0, "tilemap 1-A", 5);
floors.create(60.0, 210.0, "tilemap 1-A", 0);
floors.create(120.0, 210.0, "tilemap 1-A", 0);
floors.create(90.0, 210.0, "tilemap 1-A", 0);
floors.create(180.0, 210.0, "tilemap 1-A", 0);
floors.create(210.0, 210.0, "tilemap 1-A", 0);
floors.create(240.0, 210.0, "tilemap 1-A", 0);
floors.create(270.0, 210.0, "tilemap 1-A", 0);
floors.create(330.0, 210.0, "tilemap 1-A", 0);
floors.create(360.0, 210.0, "tilemap 1-A", 0);
floors.create(390.0, 210.0, "tilemap 1-A", 0);
floors.create(420.0, 210.0, "tilemap 1-A", 0);
floors.create(450.0, 210.0, "tilemap 1-A", 0);
floors.create(480.0, 210.0, "tilemap 1-A", 0);
floors.create(540.0, 210.0, "tilemap 1-A", 0);
floors.create(570.0, 210.0, "tilemap 1-A", 0);
floors.create(600.0, 210.0, "tilemap 1-A", 0);
floors.create(630.0, 210.0, "tilemap 1-A", 0);
floors.create(660.0, 210.0, "tilemap 1-A", 0);
floors.create(690.0, 210.0, "tilemap 1-A", 0);
floors.create(720.0, 210.0, "tilemap 1-A", 0);
floors.create(780.0, 210.0, "tilemap 1-A", 0);
floors.create(840.0, 210.0, "tilemap 1-A", 0);
floors.create(810.0, 210.0, "tilemap 1-A", 0);
floors.create(900.0, 210.0, "tilemap 1-A", 4);
floors.create(30.0, 210.0, "tilemap 1-A", 0);
floors.create(30.0, 420.0, "tilemap 1-A", 0);
floors.create(870.0, 210.0, "tilemap 1-A", 0);
floors.create(870.0, 420.0, "tilemap 1-A", 0);
platforms.create(540.0, 120.0, "tilemap 1-A", 12);
platforms.create(510.0, 120.0, "tilemap 1-A", 10);
platforms.create(480.0, 120.0, "tilemap 1-A", 10);
platforms.create(450.0, 120.0, "tilemap 1-A", 10);
platforms.create(420.0, 120.0, "tilemap 1-A", 10);
platforms.create(360.0, 120.0, "tilemap 1-A", 13);
platforms.create(390.0, 120.0, "tilemap 1-A", 10);
walls.create(300.0, 150.0, "tilemap 1-A", 6);
walls.create(300.0, 180.0, "tilemap 1-A", 8);
walls.create(600, 150.0, "tilemap 1-A", 6);
walls.create(600, 180.0, "tilemap 1-A", 8);
floors.create(60.0, 0.0, "tilemap 1-A", 0);
floors.create(90.0, 0.0, "tilemap 1-A", 0);
floors.create(30.0, 0.0, "tilemap 1-A", 0);
floors.create(150.0, 0.0, "tilemap 1-A", 0);
floors.create(180.0, 0.0, "tilemap 1-A", 0);
floors.create(120.0, 0.0, "tilemap 1-A", 0);
floors.create(240.0, 0.0, "tilemap 1-A", 0);
floors.create(270.0, 0.0, "tilemap 1-A", 0);
floors.create(210.0, 0.0, "tilemap 1-A", 0);
floors.create(330.0, 0.0, "tilemap 1-A", 0);
floors.create(360.0, 0.0, "tilemap 1-A", 0);
floors.create(300.0, 0.0, "tilemap 1-A", 0);
floors.create(420.0, 0.0, "tilemap 1-A", 0);
floors.create(450.0, 0.0, "tilemap 1-A", 0);
floors.create(390.0, 0.0, "tilemap 1-A", 0);
floors.create(510.0, 0.0, "tilemap 1-A", 0);
floors.create(540.0, 0.0, "tilemap 1-A", 0);
floors.create(480.0, 0.0, "tilemap 1-A", 0);
floors.create(600.0, 0.0, "tilemap 1-A", 0);
floors.create(630.0, 0.0, "tilemap 1-A", 0);
floors.create(570.0, 0.0, "tilemap 1-A", 0);
floors.create(690.0, 0.0, "tilemap 1-A", 0);
floors.create(720.0, 0.0, "tilemap 1-A", 0);
floors.create(660.0, 0.0, "tilemap 1-A", 0);
floors.create(780.0, 0.0, "tilemap 1-A", 0);
floors.create(810.0, 0.0, "tilemap 1-A", 0);
floors.create(750.0, 0.0, "tilemap 1-A", 0);
floors.create(870.0, 0.0, "tilemap 1-A", 0);
floors.create(900.0, 0.0, "tilemap 1-A", 0);
floors.create(840.0, 0.0, "tilemap 1-A", 0);
floors.create(0.0, 0.0, "tilemap 1-A", 0);
walls.create(30.0, 30.0, "tilemap 1-A", 6);
walls.create(30.0, 120.0, "tilemap 1-A", 9);
walls.create(30.0, 60.0, "tilemap 1-A", 7);
walls.create(600.0, 270.0, "tilemap 1-A", 7);
walls.create(600.0, 300.0, "tilemap 1-A", 8);
walls.create(300.0, 270.0, "tilemap 1-A", 7);
walls.create(300.0, 300.0, "tilemap 1-A", 8);
walls.create(300.0, 240.0, "tilemap 1-A", 6);
walls.create(600.0, 240.0, "tilemap 1-A", 6);
walls.create(300.0, 330.0, "tilemap 1-A", 9);
walls.create(600.0, 330.0, "tilemap 1-A", 9);
walls.create(30.0, 90.0, "tilemap 1-A", 8);
walls.create(0.0, 270.0, "tilemap 1-A", 7);
walls.create(0.0, 300.0, "tilemap 1-A", 8)
walls.create(0.0, 330.0, "tilemap 1-A", 7);
walls.create(0.0, 360.0, "tilemap 1-A", 8);
walls.create(0.0, 390.0, "tilemap 1-A", 14);
walls.create(0.0, 240.0, "tilemap 1-A", 6);
walls.create(900.0, 270.0, "tilemap 1-A", 7);
walls.create(900.0, 300.0, "tilemap 1-A", 8);
walls.create(900.0, 330.0, "tilemap 1-A", 7);
walls.create(900.0, 360.0, "tilemap 1-A", 8);
walls.create(900.0, 390.0, "tilemap 1-A", 14);
walls.create(900.0, 240.0, "tilemap 1-A", 6);
walls.create(900.0, 60.0, "tilemap 1-A", 7);
walls.create(900.0, 90.0, "tilemap 1-A", 8);
walls.create(900.0, 120.0, "tilemap 1-A", 7);
walls.create(900.0, 150.0, "tilemap 1-A", 8);
walls.create(900.0, 180.0, "tilemap 1-A", 14);
walls.create(900.0, 30.0, "tilemap 1-A", 6);
    txt = this.add.text(460, 275,"Wingdings Hp = " + wingdingshp).setScrollFactor(0);
    txt3 = this.add.text(460, 315,"Wingdings Hp = " + wingdingshp).setScrollFactor(0);
    txt2 = this.add.text(460, 375,"Wingdings inv = " + invincible).setScrollFactor(0);
    laser_drone_right1.body.allowGravity = false;
    this.anims.create({
      key: 'idlelaserright',
      repeat: -1,
      frameRate: 30,
      frames: this.anims.generateFrameNumbers("laser drone right")
    });
    laser_drone_right1.anims.play('idlelaserright');
    laser_drone_left1.body.allowGravity = false;
    this.anims.create({
      key: 'idlelaserleft',
      repeat: -1,
      frameRate: 30,
      frames: this.anims.generateFrameNumbers("laser drone left")
    });
    laser_drone_left1.anims.play('idlelaserleft');
    key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    key_Space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    var camera = this.cameras.main;
    camera.setBounds(-50, -90, 1000, 3000).setZoom(3.25);
    camera.startFollow(cam);
    mechhitbox = enemy.create( 480.0, 73.0, 'mechhitbox');
    mech1 = this.physics.add.image( 480.0, 73.0, 'mech');
    this.physics.add.collider( wingdings, platforms);
    this.physics.add.collider( wingdings, floors);
    this.physics.add.collider( enemy, wingdings);
    this.physics.add.collider( enemy, platforms);
    this.physics.add.collider( mech1, platforms);
    this.physics.add.collider( walls, wingdings);
    this.physics.add.overlap( laser1, platforms, laserdestroy);
    this.physics.add.overlap( laser1, doors, laserdestroy);
    this.physics.add.overlap( laser1, walls, laserdestroy);
    this.physics.add.overlap( laser1, laser_drone_left1, laserdestroy);
    this.physics.add.overlap( laser1, wingdings, laserdestroyhp);
    this.physics.add.overlap( laser2, platforms, laserdestroy2);
    this.physics.add.overlap( laser2, doors, laserdestroy2);
    this.physics.add.overlap( laser2, walls, laserdestroy2);
    this.physics.add.overlap( laser2, laser_drone_left1, laserdestroy2);
    this.physics.add.overlap( laser2, wingdings, laserdestroy2hp);
    this.physics.add.overlap( elevator, wingdings, goup);
    this.physics.add.overlap( elevator2, wingdings, godown);
    function goup() {
      if (godownk == 0) {
        wingdings.y = 175.0;
        wingdings.x = 750.0;
        camera.startFollow(cam2);
        cam.y = 200
      }
    }
    function godown() {
      if (godownk == 1) {
        wingdings.y = 385.0;
        wingdings.x = 750.0;
      camera.startFollow(cam);
      cam.y = 315.0
      }
    }
    this.physics.add.collider( wingdings, doordown1 && doorup1, function (wingdings, doors) {
      doorup1.body.velocity.y = -50;
      doordown1.body.velocity.y = 50;
    });
    this.physics.add.collider( wingdings, doordown2 && doorup2, function (wingdings, doors) {
      doorup2.body.velocity.y = -50;
      doordown2.body.velocity.y = 50;
    });
      this.time.delayedCall(8000, lasershoot, [], this);
      this.time.delayedCall(8000, lasershoot2, [], this);
    };
  update(){
    var laser_drone_left1angle = Phaser.Math.Angle.BetweenPoints (laser_drone_left1, wingdings);
    var laser_drone_right1angle = Phaser.Math.Angle.BetweenPoints (laser_drone_right1, wingdings);
    doorup1.x = 300.0;
    doorup2.x = 600;
    mechhitbox.x = mech1.x;
    txt.text = "Wingdings Hp = " + wingdingshp;
    txt2.text = "Wingdings inv = " + invincible;
    txt3.text = godownk;
    if (invincible > 0) {
      invincible -= 1;
    }
    if (wingdingshp < 1) {
      this.scene.start('tutoriallevel');
      wingdingshp = 0;
    }
    if (key_D.isDown) {
        wingdings.body.velocity.x = SPEED;
    }
    else if (cursors.right.isDown) {
        wingdings.body.velocity.x = SPEED;
    }

    else if (key_A.isDown) {
        wingdings.body.velocity.x = -SPEED;
    }
    else if (cursors.left.isDown) {
        wingdings.body.velocity.x = -SPEED;
    }
    else {
      wingdings.body.velocity.x = 0;
    }
    if (key_W.isDown && wingdings.body.touching.down) {
        wingdings.setVelocityY(-340);
    }
    else if (cursors.up.isDown && wingdings.body.touching.down) {
        wingdings.setVelocityY(-340);
    }
    else if (key_Space.isDown && wingdings.body.touching.down) {
        wingdings.setVelocityY(-340);
    }
    else {}
    if (cam.x == 450) {
      if (laser_drone_right1.rotation < laser_drone_right1angle && cam.y > 210){
        laser_drone_right1.angle += 1;
      }
      else if (laser_drone_right1.rotation > laser_drone_right1angle && cam.y > 210) {
        laser_drone_right1.angle -= 1;
      }
    }
    if (cam.x == 450) {
      laser_drone_left1.flipX = true;
      if (laser_drone_left1.rotation < laser_drone_left1angle && cam.y > 210){
        laser_drone_left1.angle += 1;
      }
      else if (laser_drone_left1.rotation > laser_drone_left1angle && cam.y > 210) {
        laser_drone_left1.angle -= 1;
      }
    }
      if (wingdings.x > 315.0 && wingdings.x < 450) {
          cammove1();
          if (cam.x > 450) {
            cam.x = 450
          }
        }
      else if (wingdings.x < 600 && wingdings.x > 450) {
            cammove2();
            if (cam.x < 450) {
              cam.x = 450
            }
          }
        else if (wingdings.x < 315.0) {
          cammove2();
          if (cam.x < 150.0) {
          cam.x = 150.0
        }
      }
      if (wingdings.x > 600) {
        cammove1();
        if (cam.x > 750.0) {
          cam.x = 750.0
        }
      }
      if (wingdings.x > 315.0 && wingdings.x < 450) {
          cam2move1();
          if (cam2.x > 450) {
            cam2.x = 450
          }
        }
      else if (wingdings.x < 600 && wingdings.x > 450) {
            cam2move2();
            if (cam2.x < 450) {
              cam2.x = 450
            }
          }
        else if (wingdings.x < 315.0) {
          cam2move2();
          if (cam2.x < 150.0) {
          cam2.x = 150.0
        }
      }
      if (wingdings.x > 600) {
        cam2move1();
        if (cam2.x > 750.0) {
          cam2.x = 750.0
        }
      }
      if (invincible < 100 && invincible > 90) {
        wingdings.alpha = 0.5;
      }
      else if (invincible < 60 && invincible > 50) {
        wingdings.alpha = 0.5;
      }
      else if (invincible < 20 && invincible > 10) {
        wingdings.alpha = 0.5;
      }
      else {
        wingdings.alpha = 1;
      }
      if (wingdings.x < 694.05 && wingdings.y < 210) {
        godownk = 1;
      }
      if (wingdings.x < 694.05 && wingdings.y > 210) {
        godownk = 0;
      }
      if (wingdings.y < 100.0) {
        godownk = 1;
      }
      if (wingdings.y < 310.0 && wingdings.y > 210) {
        godownk = 0;
      }
      if (wingdings.x > 805.95 &&  wingdings.y < 210) {
        godownk = 1;
      }
      if (wingdings.x > 805.95 &&  wingdings.y > 210) {
        godownk = 0;
      }
    doorup1.body.velocity.x = 0;
    doordown1.body.velocity.x = 0;

  }
}
