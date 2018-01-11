var gulp = require('gulp');
var webserver = require('gulp-webserver');
var fs = require('fs');
var path = require('path');
var mock = require('mockjs');

gulp.task('server', function() {
    gulp.src('.')
        .pipe(webserver({
            host: 'localhost',
            port: 8080,
            open:true
        }))
})

gulp.task('endserver', function() {
    gulp.src('.')
        .pipe(webserver({
            host: 'localhost',
            port: 8090,
            middleware: function(req, res, next) {
                res.writeHead(200, {
                    "content-type": "text/json;charset=utf-8",
                    "access-control-allow-origin": "*"
                })
                if(req.url === '/data'){
                    res.end(fs.readFileSync(path.join(__dirname,'Data/data.json')));
                }
            }
        }))
})

gulp.task('default', ['endserver', 'server']);