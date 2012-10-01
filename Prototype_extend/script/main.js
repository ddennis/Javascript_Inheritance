(function( window, Modernizr ) {

	"use strict";

	Modernizr.load( [
		/*
		{
			test: Modernizr[testSomething],
			yep: filesToLoad
		},
		*/
		{
			load: ['lib/require.js'],
			callback: function( file ) {
				/* handler on async loaded file. */
			},

			complete: function() {

				define.amd.jQuery = true;
				require.config({
					
					paths: {

						jquery: './lib/jquery'

					}
				});

				require( ['jquery', 'app/MainView'], function( $ , mainView) {

							
							
					mainView.init();


				});
			}
		}
	]);


})( this, Modernizr );