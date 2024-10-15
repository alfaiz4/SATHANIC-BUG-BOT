// Base by : Sathan v2

const fs = require('fs')
const { color } = require('./lib/myfunc')

global.owner = '919778158839'
global.nomerowner = ["919778158839"]
global.packname = 'Sathanic-v5'
global.author = 'Sathan'
global.urldb = ''; // poda pundachi mone
global.linkfoto = 'https://iili.io/2J0mkMP.md.jpg'
global.namaowner = 'sathan'
global.idsaluran = '120363301756685796@newsletter'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
