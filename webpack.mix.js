const { mix } = require('laravel-mix');

mix.options({
  processCssUrls: false
}).sass(
  'resources/assets/sass/app.scss',
  'publishable/assets/css'
);
