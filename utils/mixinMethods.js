import Modal from '~/components/Modal.vue'
import icons from '~/utils/icons'

const mixinMethods = {
  components: {
    Modal
  },
  data() {
    return {
      modelBioData: null
    }
  },
  computed: {
    biosData() {
      // bios data sorted by last name
      const bios = this.articleData.bios
      return bios.sort((a, b) =>
        a.name.split(' ')[1] > b.name.split(' ')[1] ? 1 : -1
      )
    }
  },
  methods: {
    toggleBioModal(authordata) {
      if (authordata) {
        this.modelBioData = authordata
        return
      }
      this.modelBioData = null
    },
    toggleBioModalSlug(slug) {
      if (slug) {
        this.modelBioData = this.biosData.find((e) => e.authorslug === slug)
        return
      }
      this.modelBioData = null
    },
    randomImage(element) {
      // const height = element.getBoundingClientRect().width

      const randomImgs = Array(19)
        .fill()
        .map((_, i) => i + 1)
        .sort(() => Math.random() - 0.5) // array possible images

      for (let i = 0; i < 3; i++) {
        const img = new Image()
        const r = randomImgs.pop()
        img.setAttribute('data-src', `images/grid/${r}.jpg`)
        img.style.cssText = `
        width: 150px;
        height: 300px;
        top:${10 + (i * 100) / 3}%;
        right: ${i % 2 === 0 ? '0px' : 'unset'};
        left: ${i % 2 ? '0px' : 'unset'};
        object-position: left;
        object-fit: cover;
        position: absolute;
        display: block;
        z-index: -1;
        `
        img.classList.add('lazyload')
        element.appendChild(img)
      }
    },
    randomIcons(element, num = 5) {
      // const vh = window.innerHeight
      const width = element.getBoundingClientRect().width
      const scale = width < 900 ? 0.5 : 1
      // const marg = 0
      // const step = 100 / num
      for (let i = 0; i < num; i++) {
        const div = document.createElement('div')
        div.style.cssText = `
          display:flex;
          justify-content: space-between;
        `
        for (let l = 0; l < 2; l++) {
          const ico = icons[~~(Math.random() * icons.length)]

          const svg = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
          )
          const randx = 60 - 2 * (Math.random() * 60)

          svg.setAttribute('width', ico.width * scale)
          svg.setAttribute('height', ico.height * scale)
          svg.setAttribute('viewBox', `0 0 ${ico.width} ${ico.height}`)
          svg.innerHTML = ico.path
          svg.style.cssText = `
          pointer-events: none;
          margin-left: ${randx}px
          z-index: 0;
        `
          div.appendChild(svg)
        }
        element.appendChild(div)
      }
    }
  }
}

export default mixinMethods
