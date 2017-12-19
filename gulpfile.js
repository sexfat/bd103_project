//引入模組

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// 路徑

var web = {
  sass: [
      'sass/*.scss',
      'sass/**/*.scss'
  ],
  html: [
      'html/*.html',
      'html/**/*.html'
  ],
  js : [
     'js/*.js',
     'js/**/*.js',
  ],
  compress : [
    'assets/js/*.js'
  ],
  assets: [
      'assets/fonts/*',
      'assets/images/*',
      'assets/css/*'
  ],
  css: [
      'assets/css/*.css'
  ],
  index : [
      'index.html'
  ]
  // tmp: 'resources/assets/tmp/css/*.css'
};



//================================
//驗證js模組
//================================
var jshint = require('gulp-jshint');

gulp.task('jslint', function () {
return gulp.src(web.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('./assets/js'));
});



//================================
// sass轉譯模組
//================================
var  sass = require('gulp-sass'),
     notify = require("gulp-notify"),
     sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
return gulp.src(web.sass) //要處理的scss檔案
   //  .pipe(gulpPlumber())
   .pipe(sourcemaps.init())
   .pipe(sass())
   .on('error', notify.onError(function (error) {
        return ' sass編譯錯了~~>\n watch consloe \n ' + error; 
    }))
   .pipe(sass({
       outputStyle: 'expanded' // compact , expanded, nested
   }))
   .pipe(sourcemaps.write('.'))
   .pipe(gulp.dest('./assets/css/')) //指定編譯後的路徑
//    .pipe(notify("sass finish")) // sass 編譯提示訊息
});



//================================
//watch監看模組
//================================
var watch = require('gulp-watch');

gulp.task('watch', function () {
  // Endless stream mode 
  gulp.watch(web.assets);
  gulp.watch(web.js ,['jslint']);
  gulp.watch(web.css);  
  gulp.watch(web.sass , ['sass']);  
  gulp.watch(web.html); 
});


//================================
//  壓縮 js模組
//================================
gulp.task('uglify', function() {
    // 將你的默認的任務代碼放在這
    return gulp.src(web.compress)
    .pipe(uglify())
    .pipe(notify("js 壓縮完成都在assets/js/mini裡")) // 壓縮js 完後提示訊息
    .pipe(gulp.dest('assets/js/mini/'));
  });


//================================
// 壓縮 css
//================================
gulp.task('minify', function() {
    // 将妳的任務代碼放在這
    return gulp.src(web.css)
    .pipe(cleanCSS())
    .pipe(notify("css壓縮完成都在assets/css/mini裡")) // sass 編譯提示訊息
    .pipe(gulp.dest('assets/css/mini/'));
  });



//  browserSync 瀏覽器同步

gulp.task('all', ['sass'], function() {
    
        browserSync.init({
            server: {
                baseDir: "./",
                index: web.index
            }
        });
        gulp.watch(["sass/*.scss","sass/**/*.scss"] , ['sass']).on('change', reload);
        gulp.watch("*.html").on('change', reload);
        gulp.watch("js/*.js" , ['jslint']).on('change', reload);
        // gulp.watch("images/*").on('change', reload);
    });


// 一般sass開發專案
gulp.task('dev', ['sass','watch']);

//有跑瀏覽器
gulp.task('default', ['all']);
    
//壓縮css js
gulp.task('compress', ['minify' , 'uglify']);


  

// js move
// gulp.task('default', function() {
//     // 将妳的任務代碼放在這
//     return gulp.src('*.html')
//     .pipe(gulp.dest('build/'));
   
//   });

  console.log('no error');

