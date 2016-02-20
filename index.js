var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-dev-middleware');
var app = express();

if ( process.env.NODE_ENV !== 'production' ) {
  var compiler = webpack(config);
  var middleware = webpackDevMiddleware(compiler,{ stats: { colors: true }, noInfo: true, publicPath: config.output.publicPath });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    debugger
    // see if we can output direct contents to the console...
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));

  app.get('/', function(request, response) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


