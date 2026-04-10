// Import required modules
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

// File paths
const paths = {
    scss: "./src/scss/*", // SCSS source file
    css: "./css", // Output folder for compiled CSS
    html: "./*.html" // Watch HTML files for changes
};

// Compile SCSS & Tailwind to CSS
function compileStyles() {
    return gulp
        .src(paths.scss) // Source SCSS file
        .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError)) // Compile SCSS
        .pipe(postcss([tailwindcss("./tailwind.config.js"), autoprefixer()])) // Process with Tailwind & Autoprefixer
        .pipe(gulp.dest(paths.css)); // Save output CSS
}

// Watch for changes in SCSS & HTML
function watchFiles() {
    gulp.watch([paths.scss, paths.html], compileStyles); // Watch SCSS & HTML files
}

// Default Gulp task
exports.default = gulp.series(compileStyles, watchFiles);
