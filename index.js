require('babel-core/register'); // excluding node_modules, all js 'required' after this is transformed by Babel
require('babel-polyfill');
require('css-modules-require-hook');
require('./server/server');
