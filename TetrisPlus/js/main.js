var Phaser = Phaser || {};
var tetrisPlus = tetrisPlus || {};

tetrisPlus.game = new Phaser.Game(1024, 512, Phaser.AUTO, null, this, false, false);

tetrisPlus.game.state.add('main',tetrisPlus.gameState);
tetrisPlus.game.state.add('backPJ',tetrisPlus.BackgroundPJ);
tetrisPlus.game.state.start('backPJ');
