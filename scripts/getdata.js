/* eslint-disable no-console */
const fse = require('fs-extra')
const POSTCONFIG = require('../post.config')
const customFetcher = require('./dataFetcher')

const getData = async () => {
  const dataToWrite = {
    bios: null,
    stories: []
  }
  for (const docId of POSTCONFIG.docs) {
    const data = await customFetcher(docId)
    if (data) {
      const key = data.type.trim()
      if (key === 'bio') {
        dataToWrite.bios = data.bios
      } else if (key === 'story') {
        dataToWrite.stories.push(data)
      }
    }
  }
  console.log('DATTT___-->', dataToWrite)

  if (dataToWrite) {
    fse.outputFile(POSTCONFIG.dataPath, JSON.stringify(dataToWrite))
  }
}

getData()
