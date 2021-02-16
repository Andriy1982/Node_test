const fs = require('fs')
const file = '../03-internal/path.js'

console.log(__dirname)
console.log(__filename)
console.log(fs.existsSync('./temp'));

fs.readFile(file, (err, data) => {
  if (err) {
    console.error(err.message)
    return
  }

  if (!fs.existsSync('./temp1')) {
    fs.mkdirSync('./temp1')
  }

  fs.writeFile(
    './temp1/path.js',
    `${data} console.log('Successfully updated')`,
    (err) => {
      if (err) {
        console.log(err)
        return
      }
    },
  )
})