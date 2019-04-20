let mix = require("laravel-mix");

mix.js("demo/app.js", "demo/bulid/app.js");
mix.js("src/index.js", "dist/vue-bootstrap-toasts.js");
