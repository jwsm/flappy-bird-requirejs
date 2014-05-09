require.config({
	deps: ['main'],
	shim: {
		'main': {
			deps: ['jquery', 'phaser']
		},
		'phaser': {
			deps: ['jquery'],
			exports: 'Phaser'
		}
	},
    paths: {
    	'phaser': './vendor/phaser.min',
    	'jquery': './vendor/jquery.min',
    	'main': './game/main'
    }
});