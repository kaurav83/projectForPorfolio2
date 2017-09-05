'use strict';

global.objGulp = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create()
};

objGulp.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

objGulp.gulp.task('default', objGulp.gulp.series(
    'clean',
    objGulp.gulp.parallel(
        'sass',
        'pug'
    ),
    objGulp.gulp.parallel(
        'watch',
        'serve'
    )
));

// на 1:27:16 остановился