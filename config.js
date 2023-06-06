 import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6289653898291', 'KSR CLOUD', true],
  ['6289653898291'], 
  ['6289653898291'] 
] //Numeros de owner 

global.mods = ['6289653898291'] 
global.prems = ['6289653898291']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'ZENI CAT' 
global.author = '@KSR CLOUD' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/ksr.cloud\n' 
global.dygp = 'https://wa.me/ksrcloud'
global.fgsc = 'https://github.com/Rencai000' 
global.fgyt = 'http://zeni.masuk.id/'
global.fgpyp = '-'
global.fglog = 'https://i.ibb.co/3sF5PcH/Monochrome-Wolf-Mascot-e-Sports-Gaming-Logo-2.png' 

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})