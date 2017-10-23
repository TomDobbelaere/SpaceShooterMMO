Region = function(game, region) {
    Phaser.TileSprite.call(this, game, region.x * 32, region.y * 32, region.width * 32, region.height * 32, "region");

    game.physics.arcade.enable(this);
    //this.body.immovable = true;

    var factionColor = 0x000000;

    if (region.faction === "TRRA") factionColor = 0x0033ff;
    else if (region.faction === "BOLT") factionColor = 0xff0000;
    else if (region.faction === "TEST") factionColor = 0x00ff00;

    this.background = game.add.tileSprite(0, 0, this.width, this.height, "white");
    this.background.tint = factionColor;
    this.background.alpha = 0.1;

    var tweenA = game.add.tween(this.background).to( { alpha: 0.2 }, 2000, "Linear");

    tweenA.start();
    tweenA.repeat(-1);
    tweenA.yoyo(true);


    this.addChild(this.background);
    game.add.existing(this);

    var border = game.add.graphics(0, 0);
    border.lineStyle(2, factionColor, 0.5);
    border.drawRect(2, 2, this.width - 2, this.height - 2);


    this.addChild(border);

    var fontSize = this.width / 10;

    /*var style = { font: fontSize + "px Arial", fill: "#ffffff", align: "center" };
    var text = game.add.text(this.width / 2, this.height / 2, "u gay", style);
    text.anchor.set(0.5);
    //text.setShadow(5, 5, 'rgba(0,0,0,0.7)', 5);
    text.stroke = '#000000';
    text.strokeThickness = fontSize / 8;
    text.alpha = 0.6;
    this.addChild(text);*/

    this.tint = factionColor;
    this.game = game;
    this.tilePositionPoint = new Phaser.Point(32, 32);
    this.tilePosition = this.tilePositionPoint;
    this.background.tilePosition = this.tilePositionPoint;
    this.timer = 0;
};

Region.prototype = Object.create(Phaser.TileSprite.prototype);
Region.prototype.constructor = Region;
Region.prototype.update = function() {
    this.tilePositionPoint.x+=0.3;
    this.tilePositionPoint.y+=0.3;
};