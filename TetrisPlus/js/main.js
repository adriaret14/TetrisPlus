var tetrisPlus = tetrisPlus || {};

tetrisPlus.game = new Phaser.Game(1024, 512, Phaser.AUTO, null, this, false, false);

tetrisPlus.game.state.add('main',tetrisPlus.gameState);
tetrisPlus.game.state.start('main');