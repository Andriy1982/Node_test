const fs = require('fs')

fs.unlink('temp1/path.js', (err) => {
  if (err) {
    console.log(err)
    return
  }

  fs.rmdir('temp1', (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Delete done!')
  })
})