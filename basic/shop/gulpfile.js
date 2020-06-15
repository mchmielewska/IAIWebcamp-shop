const { src, dest, watch } = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const glob = require('glob');

// Konfiguracja pod browser-sync
const config = {
    // Link do strony która ma wyświetlać się lokalnie
    proxy: "https://demo96-pl-shop7.yourtechnicaldomain.com",

    // Linki do folderu z plikami źródłowymi
    src: "./src",

    // Link do katalogu wynikowego - do niego zapiszą się wszystkie pliki wynikowe css, js
    build: "./build",

    // Linki do assetów
    assets: {
        css: [
            "css/**/*.css"
        ],
        less: [
            "less/**/*.less"
        ],
        js: [
            "js/**/*.js"
        ]
    },

    concat_css: 'style.css',
    concat_js: 'app.js',
}

// funkcja kompilująca kod less na CSS i łącząca pliki w jeden wspólny plik
function lessCompiler() {
    if ( config.concat_css !== undefined ) {
        return src(config.src + "/" + config.assets.less)
            .pipe(less())
            .pipe(concat(config.concat_css))
            .pipe(dest(config.build + '/css'))
            .pipe(browserSync.stream());
    }
    return src(config.src + "/" + config.assets.less)
            .pipe(less())
            .pipe(dest(config.build + '/css'))
            .pipe(browserSync.stream());
}

// funkcja łącząca pliki js w jeden
function jsConcat() {
    if ( config.concat_js !== undefined ) {
        return src(config.src + "/" + config.assets.js)
            .pipe(concat( config.concat_js ))
            .pipe(dest(config.build + '/js'))
            .pipe(browserSync.stream());
    }
    return src(config.src + "/" + config.assets.js)
        .pipe(dest(config.build + '/js'))
        .pipe(browserSync.stream());
}

// Exporty gulp - wywoływane z konsolo, np. gulp less
exports.less = lessCompiler;
exports.js = jsConcat;

exports.default = function() {
    // Pierwsze wywołanie funkcji dla less i js.
    lessCompiler();
    jsConcat();

    // Inicjalizacja browser-sync
    browserSync.init({
        proxy: config.proxy,
        ghostMode: false,

        rewriteRules: [
        // CSS inject at the end of <head>
        // {
        //     match: /<\/head>/i,
        //     fn: function(req, res, match) {
        //         let localCssAssets = ``

        //         if (req.originalUrl.match( config.reg )) {
        //             for (let index = 0; index < config.assets.css.length; index++) {
        //                 const files = glob.sync(config.assets.css[index], {
        //                     cwd: config.build
        //                 });

        //                 console.log("CSS Files:", files);

        //                 for (const file in files) {
        //                     localCssAssets += '<link rel="stylesheet" type="text/css" href="' + config.build.replace('.','') + "/" + files[file] + '"/>';
        //                 }
        //             }
        //         }

        //         return localCssAssets + match;
        //     }
        // }, 
        // Podmiana pliku css na stronie
        {
            match: /((\/data\/designs)|(\/gfx))(.{0,40})(\/style\.css\.gzip)/i,
            fn: function(req, res, match) {
                if ( req.originalUrl.match( config.reg ) && config.concat_js !== undefined ) {
                    return config.build.replace('.','') + "/css/" + config.concat_css;
                }
                return match;
            }
        },
        // Dokleja skrypty przed app_shop.runApp() <- Może podmieniać pliki js
        // {
        //     match: /<script>\W*(.*)(\brunApp)(.*)\W*script>/i,
        //     fn: function(req, res, match) {
        //         let localJSAssets = ``

        //         if (req.originalUrl.match( config.reg )) {
        //             for (let index = 0; index < config.assets.js.length; index++) {
        //                 const files = glob.sync(config.assets.js[index], {
        //                     cwd: config.build
        //                 });

        //                 console.log("JS Files:", files);

        //                 for (const file in files) {
        //                     localJSAssets += '<script src="' + config.build.replace('.','') + "/" + files[file] + '"></script>';
        //                 }
        //             }
        //         }

        //         return localJSAssets + match;
        //     }
        // }
        ],
        snippetOptions: {
        // Doklejenie skryptów przed runnApp();
            rule: {
                match: /<script>\W*(.*)(\brunApp)(.*)\W*script>/i,
                fn: function (snippet, match) {
                    let localJSAssets = ``
                    for (let index = 0; index < config.assets.js.length; index++) {
                        const files = glob.sync(config.assets.js[index], {
                            cwd: config.build
                        });

                        console.log("JS Files:", files);

                        for (const file in files) {
                            localJSAssets += '<script src="' + config.build.replace('.','') + "/" + files[file] + '"></script>';
                        }
                    }

                    return localJSAssets + snippet + match;
                }
            }
        },
        serveStatic: [{
            route: ['/build','/assets'],
            dir: ['./build','./assets']
        }],
		watchTask: true
    });

    // Śledzenie zmian w pliku, przy zapisie wywołujemy funkcje podaną w drugim parametrze
    watch('src/less/*less', lessCompiler);
    watch('src/js/*.js', jsConcat);
    watch('src/html/*.html').on('change', browserSync.reload);
}