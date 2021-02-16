import { fileURLToPath } from 'url'
import { dirname } from 'path'
import  path from 'path'
import * as fs from 'fs/promises'

const createDirnameAndFileName = (importUrl) => {
  const __filename = fileURLToPath(importUrl)
  const __dirname = dirname(__filename)

  return { __filename, __dirname }
}

export default createDirnameAndFileName

console.log(createDirnameAndFileName(import.meta.url).__dirname);
const folder = createDirnameAndFileName(import.meta.url).__dirname

const pathNew = path.join(folder, 'contacts.json' )
console.log( pathNew);

fs.readFile(pathNew,  (err, data) => {
    console.log(data);
    if (err) {
      console.error(err.message)
      return
    }
    return data
})

// console.log(
//     fs.readFile(pathNew,  async (err, data) => {
//         console.log(data);
//         if (err) {
//           console.error(err.message)
//           return
//         }
//        await data
//     }));

// var obj;
// fs.readFile(pathNew, 'utf8', function (err, data) {
//   if (err) throw err;
//   obj = JSON.parse(data);
//   console.log(obj);
// });


// fs.readFile(pathNew, 'utf8' ,  (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     return data
//   }).then(data => {
//       const parseData = JSON.parse(data)
//       console.table(parseData);
//     console.log(typeof parseData)})

     async function listContacts () {

      const data =  await fs.readFile(pathNew, 'utf8' ,  (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            return data
      }
      
    )
    console.table(JSON.parse(data))
}
      
     async function getContactById(contactId) {
        const data =  await fs.readFile(pathNew, 'utf8' ,  (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            return data
      } 
    )

    const parseData = JSON.parse(data)
    console.log(parseData.find(({id}) => id === contactId ));
    //  return  parseData.find(({id}) => id === contactId )

      }
      
 async function removeContact(contactId) {
      const data =  await fs.readFile(pathNew, 'utf8' ,  (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        return data
  })
  const parseData = JSON.parse(data)
  await fs.mkdir('./temp1')
  // if (!(await fs.access('./temp1'))) {
  //   await fs.mkdir('./temp1')
  // }

  await fs.writeFile(
    './temp1/path.json',
    `${parseData}`,
    (err) => {
      if (err) {
        console.log(err)
        return
      }
    },
  )

}
      
      function addContact(name, email, phone) {
        // ...твой код
      }

    //  listContacts()
    getContactById(9);
    //  .then(data =>console.table(data)); 

    removeContact(1)