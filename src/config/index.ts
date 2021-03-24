const env = process.env.NODE_ENV || 'development';
console.log('environment is ', env);
const config = require(__dirname + '/config.js')[env];

console.log('config file is', config)
export default config;