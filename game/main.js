define([
	'jquery',
	'phaser',
	'./game/states/boot',
	'./game/states/gameover',
	'./game/states/menu',
	'./game/states/play',
	'./game/states/preload'
], function($, Phaser, Boot, GameOver, Menu, Play, Preload) {

	$(function() {
		var game = new Phaser.Game(288, 505, Phaser.AUTO, 'flappy-bird-reborn');

		// Game States
		game.state.add('boot', Boot);
		game.state.add('gameover', GameOver);
		game.state.add('menu', Menu);
		game.state.add('play', Play);
		game.state.add('preload', Preload);

		game.state.start('boot');
	});
});