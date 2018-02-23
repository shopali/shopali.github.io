module.exports = function (grunt) {
	//описываем конфигурацию 
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'), //подгружаем package.json, чтобы использовать его данные
 
	    jshint: {     // описываем как будет проверять наш код - jsHint
	      options: {
	        curly: true,
	        eqeqeq: true,
	        immed: true,
	        latedef: true,
	        newcap: true,
	        noarg: true,
	        sub: true,
	        undef: true,
	        eqnull: true,
	        browser: true,
	        globals: {
	          jQuery: true,
	          $: true,
	          console: true
	        }
	      },
	      '<%= pkg.name %>': {  //вставляем название проекта из package.json
	        src: [
	    				
	    				'assets/web/assets/jquery/jquery.min.js',
	    				'assets/popper/popper.min.js',
						'assets/tether/tether.min.js',
						'assets/bootstrap/js/bootstrap.min.js',
						'assets/vimeoplayer/jquery.mb.vimeo_player.js',
						'assets/dropdown/js/script.min.js',
						'assets/touchswipe/jquery.touch-swipe.min.js',
						'assets/viewportchecker/jquery.viewportchecker.js',
						'assets/ytplayer/jquery.mb.ytplayer.min.js',
						'assets/mbr-switch-arrow/mbr-switch-arrow.js',
						'assets/smoothscroll/smooth-scroll.js',
						'assets/mbr-popup-btns/mbr-popup-btns.js',
						'assets/masonry/masonry.pkgd.min.js',
						'assets/imagesloaded/imagesloaded.pkgd.min.js',
						'assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js',
						'assets/sociallikes/social-likes.js',
						'assets/parallax/jarallax.min.js',
						'assets/theme/js/script.js',
						'assets/slidervideo/script.js',
						'assets/gallery/player.min.js',
						'assets/gallery/script.js',
						'assets/formoid/formoid.min.js',
						'assets/jquery.pjax.js'

	    			]  //какие файлы надо проверять
	      }
	    },
 
	    concat: {  //описываем работу плагина конкатенации
	    	dist: {
	    		src: [
	    				
	    				
	    				'assets/web/assets/jquery/jquery.min.js',
	    				'assets/popper/popper.min.js',
						'assets/tether/tether.min.js',
						'assets/bootstrap/js/bootstrap.min.js',
						'assets/vimeoplayer/jquery.mb.vimeo_player.js',
						'assets/dropdown/js/script.min.js',
						'assets/touchswipe/jquery.touch-swipe.min.js',
						'assets/viewportchecker/jquery.viewportchecker.js',
						'assets/ytplayer/jquery.mb.ytplayer.min.js',
						'assets/mbr-switch-arrow/mbr-switch-arrow.js',
						'assets/smoothscroll/smooth-scroll.js',
						'assets/mbr-popup-btns/mbr-popup-btns.js',
						'assets/masonry/masonry.pkgd.min.js',
						'assets/imagesloaded/imagesloaded.pkgd.min.js',
						'assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js',
						'assets/sociallikes/social-likes.js',
						'assets/parallax/jarallax.min.js',
						'assets/theme/js/script.js',
						'assets/slidervideo/script.js',
						'assets/gallery/player.min.js',
						'assets/gallery/script.js',
						'assets/formoid/formoid.min.js',
						'assets/owl/owl.js',
						'assets/lazyload.js',
						'assets/mouse.js'

	    			],  // какие файлы конкатенировать
	    		dest: 'dest/build.js'  // куда класть файл, который получиться после процесса конкатенации 
	    	}
	    },
 
	    uglify: {  //описываем работу плагина минификации js - uglify.
	    	options: {
	    		stripBanners: true,
	    		banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n' //комментарий который будет в минифицированном файле.
	    	},
 
	    	build: {
	    		src: 'dest/build.js',  // какой файл минифицировать
	    		dest: 'dest/build.min.js' // куда класть файл, который получиться после процесса минификации
	    	}
	    },
 
	    cssmin: { //описываем работу плагина минификации и конкатенации css.
	    	with_banner: {
	    		options: {
	    			banner: '/* My minified CSS */'  //комментарий который будет в output файле.
	    		},
 
	    		files: {
	    			'dest/style.min.css' : [

	    										  
												  'assets/tether/tether.min.css',
												  'assets/soundcloud-plugin/style.css',
												  'assets/bootstrap/css/bootstrap.min.css',
												  'assets/bootstrap/css/bootstrap-grid.min.css',
												  'assets/bootstrap/css/bootstrap-reboot.min.css',
												  'assets/dropdown/css/style.css',
												  'assets/animatecss/animate.min.css',
												  
												  'assets/theme/css/style.css',
												  'assets/gallery/style.css',
												  'assets/owl/owl.css'

	    									]   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
	    		}
	    	}
	    },
 
	    watch: { //описываем работу плагина слежки за файлами.
	    	scripts: {
		    	files: ['src/js/*.js'],  //следить за всеми js файлами в папке src
		    	tasks: ['jshint', 'concat', 'uglify', 'removelogging']  //при их изменении запускать следующие задачи
	    	},
	    	css: {
		    	files: ['src/css/*.css'], //следить за всеми css файлами в папке src
		    	tasks: ['cssmin'] //при их изменении запускать следующую задачу
	    	}
	    },
 
 
	    removelogging: { //описываем работу плагина удаления логов
	    	dist: {
     		  src: "dest/build.min.js", // файл который надо отчистить от console.log
		  dest: "dest/build.clean.js" // выходной файл, который получим после очистки
	    	}
	    }
 
 
	});
 
	//подгружаем необходимые плагины
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-remove-logging');
 
 
	//регистрируем задачу 
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'removelogging', 'watch']); //задача по умолчанию, просто grunt
	grunt.registerTask('test', ['']); //пока пусто, но кто знает, возможно в следующих уроках мы этим воспользуемся :)
};