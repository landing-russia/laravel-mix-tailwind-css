const mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js')
    .postCss('src/css/app.css', 'public/css', [
        require('tailwindcss')('./tailwind.config.js')
    ])
    .options({
        processCssUrls: false
    });
