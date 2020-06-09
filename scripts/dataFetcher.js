// import { csvParse } from 'd3-dsv'
// import { group } from 'd3-array'
// import fetch from 'node-fetch'
const Gootenberg = require('gootenberg')
const marked = require('marked')
const createDOMPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const { makeSlug } = require('./utils.js')
const credentials = require('./credentials.json')

const DOMPurify = createDOMPurify(new JSDOM('').window)

marked.setOptions({
  renderer: new marked.Renderer(),
  baseUrl: null,
  breaks: false,
  gfm: false,
  headerIds: false,
  headerPrefix: '',
  highlight: null,
  mangle: true,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  xhtml: false
})

function markdown2html(data) {
  const copy = Object.assign(data, {})
  const interate = (obj) => {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object' || obj[key] instanceof Object) {
        interate(obj[key])
        return
      }
      if (typeof obj[key] === 'string' || obj[key] instanceof String) {
        let configDom = {
          ALLOWED_TAGS: ['a'],
          KEEP_CONTENT: true
        }
        if (key === 'text') {
          configDom = {
            ALLOWED_TAGS: [
              'a',
              'p',
              'img',
              'div',
              'iframe',
              'style',
              'strong',
              'i'
            ],
            KEEP_CONTENT: true
          }
        }
        obj[key] = DOMPurify.sanitize(marked(obj[key]), configDom).trim()
        // make slugs from titles
        if (key === 'title') {
          obj.slug = makeSlug(obj[key])
        }
        if (key === 'name' || key === 'author') {
          obj.authorslug = makeSlug(obj[key])
        }
      }
    })
  }
  interate(copy)
  return copy
}

async function customFetcher(DOC_ID) {
  let convertedData = null
  try {
    const goot = new Gootenberg()
    await goot.auth.jwt(credentials)
    const data = await goot.parse.archie(DOC_ID)
    convertedData = markdown2html(data)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Error fetching data', e)
  }
  // convertedData

  // return some JSON Object
  console.log(convertedData)
  return convertedData
}
module.exports = customFetcher