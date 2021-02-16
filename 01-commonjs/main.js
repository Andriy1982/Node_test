// const {info, logger} = require('./module')
// info('Test')
// logger('Test-2')

const My = require('./moduleClass')
const instanceClass = new My;

instanceClass.info("Class")

const my = require('./module')

my.info('Test')
my.logger('Test-2')