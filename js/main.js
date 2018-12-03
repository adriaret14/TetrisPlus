var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.game = new Phaser.Game(1024, 800, Phaser.AUTO, null, this, false, false);

tetrisPlus.game.state.add('menu',tetrisPlus.menuState);
tetrisPlus.game.state.start('menu');