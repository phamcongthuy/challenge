
// https://github.com/gulpjs/gulp
let gulp = require('gulp');

// https://www.npmjs.com/package/gulp-image-resize
let imageResize = require('gulp-image-resize');

let parallel = require("concurrent-transform");
let os = require("os");

const SIZES = [384, 512, 768, 1024, 1536, 2048];  // These can be any numbers you like! These particular sizes were chosen since they’re
                                                  // device-agnostic and multiples of 256, which may make the maths easier for your processor.
let sizesCursor;
let sourceImagePath;
let generatedImagePath;

// Create a copy of each image, at the requested size
function generateImages(size) {
  let folder = generatedImagePath + "/" + size + "-wide";

  console.log('Generating images at size: ' + size + ' pixels, in the folder: ' + folder);

  gulp.src(sourceImagePath + "/*.{jpg,png}")
    .pipe(parallel(
      imageResize({ width : size }),
      os.cpus().length
    ))
    .pipe(gulp.dest(folder))
    .on('end', generateNext);
}

function generateNext() {
  if (sizesCursor < SIZES.length) {
    generateImages(SIZES[sizesCursor]);
    sizesCursor++;
  }
}
  
gulp.task("default", function() {
  // sizesCursor = 0;
  // sourceImagePath     = 'assets/images/home/original';
  // generatedImagePath  = 'assets/images/home';
  // generateNext();

  // sizesCursor = 0;
  // sourceImagePath     = 'assets/images/goals/original';
  // generatedImagePath  = 'assets/images/goals';
  // generateNext();

  // sizesCursor = 0;
  // sourceImagePath     = 'assets/images/learn/original';
  // generatedImagePath  = 'assets/images/learn';
  // generateNext();

  // sizesCursor = 0;
  // sourceImagePath     = 'assets/images/create/original';
  // generatedImagePath  = 'assets/images/create';
  // generateNext();

  // sizesCursor = 0;
  // sourceImagePath     = 'assets/images/play/original';
  // generatedImagePath  = 'assets/images/play';
  // generateNext();

  // sizesCursor = 0;
  // sourceImagePath     = 'assets/images/connect/original';
  // generatedImagePath  = 'assets/images/connect';
  // generateNext();

  // sizesCursor = 0;
  // sourceImagePath     = 'assets/images/live/original';
  // generatedImagePath  = 'assets/images/live';
  // generateNext();
});
