const icons = [
  {
    width: 165,
    height: 132,
    path: `<path d="M63.398 77.8212C68.8994 70.0399 73.8184 61.8437 78.1096 53.3241C81.0133 47.5488 83.6719 41.4905 84.2581 35.0528C84.5661 31.7397 84.6675 27.7293 87.5482 26.0579C89.9513 24.6623 93.1816 25.8592 94.9724 27.9851C96.7632 30.111 97.4704 32.9198 98.1454 35.6164C101.673 49.689 105.825 63.5974 110.579 77.305C117.662 65.4751 124.76 53.6286 130.692 41.1899C132.346 37.7199 134.105 33.9775 137.457 32.0909C140.8 30.2018 146.143 31.5506 146.688 35.3511C146.818 36.2969 146.644 37.2545 146.488 38.1858C144.934 47.1905 144.421 56.3705 144.949 65.4878C145.512 75.1322 148.157 83.999 149.821 93.3998C147.23 94.7244 142.399 94.517 140.565 91.893C139.831 90.8473 139.591 89.5407 139.382 88.2734C137.429 76.4759 136.103 64.5774 135.419 52.6435C127.604 64.4223 119.749 76.2731 114.001 89.1854C113.058 91.3139 111.948 93.6772 109.759 94.4676C107.158 95.4062 104.245 93.487 103.013 91.0139C101.781 88.5408 101.767 85.6588 101.595 82.9003C100.807 69.8829 96.1237 57.4573 91.499 45.2753C85.1951 59.9539 77.0705 73.8547 67.3653 86.5452C66.3607 87.86 65.2731 89.2147 63.7347 89.8171C61.3393 90.7592 58.5219 89.528 56.8495 87.5788C55.1673 85.6269 54.3684 83.0834 53.597 80.6302C49.6748 68.2223 45.3086 55.9645 40.5054 43.8692C31.2271 59.8732 21.9514 75.8674 12.6828 91.8739C11.8385 93.3248 10.9227 94.8498 9.43244 95.6203C6.58933 97.074 3.02706 94.9911 1.49023 92.1878C1.255 91.752 1.03718 91.2899 1.02618 90.79C0.99384 89.8289 1.67695 89.0181 2.31229 88.3083C15.1322 73.8849 25.0217 56.8749 31.2114 38.6044C32.4926 34.8273 34.3976 30.3063 38.3617 29.8466C42.2284 29.4022 45.1335 33.2037 46.8821 36.6848C53.5076 49.8999 56.0069 64.991 63.398 77.8212Z" fill="#8C153D"/>`
  },

  {
    width: '232',
    height: '219',
    path: `<path d="M130.075 72.6978C129.556 61.0716 128.632 48.3956 120.769 39.8243C116.526 35.1927 110.695 32.3228 104.737 30.3471C91.2876 25.8746 75.9309 25.655 63.4361 32.3291C61.8805 33.1615 60.3166 34.1147 58.5612 34.3258C56.8058 34.5369 54.7882 33.7455 54.2285 32.0698C52.5549 27.0319 64.8258 20.2809 68.5788 19.1655C75.6415 17.0616 83.3181 17.8181 90.5046 18.816C103.122 20.5496 116.457 23.137 125.738 31.8469C135.836 41.3249 138.968 56.0354 139.847 69.8443C139.963 71.6744 140.119 73.6651 141.358 75.0323C142.506 76.2818 144.274 76.6764 145.921 77.0902C168.958 82.943 189.55 103.78 202.941 122.622C205.119 125.685 207.171 129.197 206.866 132.949C206.551 136.695 202.76 140.297 199.224 139.007C192.949 136.737 193.947 125.192 190.296 120.415C181.288 108.618 169.145 99.2396 156.401 91.7842C155.125 91.0381 139.299 83.0905 139.035 84.6914C135.99 103.536 126.406 121.266 112.31 134.138C98.2027 147.004 79.6783 154.937 60.6303 156.242C51.1917 156.891 40.5843 156.014 33.7709 148.641C27.6069 141.959 26.2969 132.087 29.0209 123.615C31.8591 114.745 38.4625 107.23 45.425 101.271C68.6057 81.4066 99.6077 70.9545 130.075 72.6978ZM128.413 83.7101C125.316 78.8363 115.879 81.0044 111.368 81.8429C103.893 83.2269 96.3764 84.9786 89.1791 87.415C70.0839 93.9033 42.3413 109.134 38.7508 131.477C35.2181 153.475 69.5946 148.057 81.275 143.208C98.698 135.986 113.421 121.302 122.5 104.919C125.163 100.134 131.85 89.126 128.413 83.7101Z" fill="#8C153D"/>`
  },
  {
    width: '175',
    height: '140',
    path: `<path d="M88.1383 81.7256C88.0685 80.8071 88.5213 79.9266 88.9461 79.0992C92.8837 71.3288 94.7102 62.5022 94.1855 53.804C81.3202 59.8755 68.9465 67.0087 57.2587 75.1139C55.942 76.025 54.4943 76.9915 52.8955 76.8722C51.5914 76.7727 50.4327 75.9471 49.5954 74.9406C46.5429 71.2742 47.175 65.7858 48.8186 61.3165C50.4668 56.8385 52.9789 52.5444 53.2198 47.7767C39.4669 51.436 24.9531 55.5308 15.2205 65.91C13.2566 68.0061 10.8578 70.5625 8.06746 69.8943C6.51443 69.5165 5.38812 68.222 4.37682 66.9881C3.5135 65.9452 2.62459 64.8436 2.30404 63.5216C0.816503 57.3794 21.0149 49.9846 25.4696 47.9241C35.1017 43.483 45.0891 39.7833 55.3052 36.8935C57.8299 36.1783 60.4791 35.506 63.0581 36.0176C65.6371 36.5292 68.0935 38.5814 68.1892 41.2092C68.2588 43.1788 67.0538 44.9288 66.0291 46.6156C63.5716 50.6559 61.9354 55.1968 61.24 59.8832C70.8279 56.0406 80.0377 51.264 88.6892 45.6166C91.0482 44.0792 93.4361 42.444 96.1863 41.8589C98.9364 41.2737 102.186 41.9921 103.719 44.3599C104.906 46.1836 104.829 48.5169 104.715 50.684C104.374 57.2075 104.042 63.7356 103.7 70.2591C112.271 67.3386 120.505 63.4044 128.177 58.5858C131.846 56.2803 136.281 53.6781 140.205 55.4979C144.417 57.458 145.044 63.0674 145.253 67.7106C145.892 81.7029 148.192 95.6101 152.077 109.064C152.789 111.53 153.269 114.824 151.049 116.118C149.971 116.748 148.583 116.616 147.439 116.126C143.894 114.596 142.453 110.423 141.509 106.681C138.222 93.7009 136.24 80.391 135.614 67.0162C123.19 71.9073 110.422 77.0236 100.794 86.2823C99.8802 87.1573 98.9565 88.0948 97.7709 88.5211C94.6744 89.6133 91.6697 86.8426 89.554 84.3369C88.9038 83.576 88.2197 82.7293 88.1383 81.7256Z" fill="#8C153D"/>`
  },
  {
    width: '160',
    height: '126',
    path: `<path d="M66.8813 49.7699C66.9213 49.8099 66.9513 49.8499 66.9913 49.8899C78.6313 36.4299 90.4612 22.7999 105.281 12.9399C120.101 3.07986 138.521 -2.70015 155.871 1.25985C156.991 1.51985 158.181 1.85986 158.941 2.72986C160.771 4.85986 158.451 8.36985 155.691 8.86985C152.931 9.37986 150.201 8.09986 147.501 7.30986C135.701 3.85986 123.281 9.80987 113.101 16.7099C98.8613 26.3499 86.1212 38.2099 75.4712 51.7199C74.0112 53.5699 72.5312 55.5899 72.2812 57.9299C72.0512 60.0199 72.8213 62.0699 73.5213 64.0499C78.5513 78.2999 80.9013 94.4699 79.0513 109.55C77.8613 119.25 63.4413 121.36 56.7713 116C49.9813 110.53 50.1813 97.5699 51.0813 89.7799C52.2313 79.9099 55.8112 70.4299 60.2212 61.5899C60.6912 60.6599 61.1713 59.6999 61.2613 58.6599C61.3613 57.5699 61.0112 56.4799 60.5312 55.4899C57.4712 49.0699 49.5113 46.2399 42.4313 46.8999C27.7013 48.2699 16.4913 61.6499 12.2913 75.8299C8.09126 90.0099 9.25126 105.13 9.23126 119.92C9.23126 122.07 8.78128 124.79 6.69128 125.32C4.19128 125.95 2.5513 122.79 2.0213 120.27C-3.6587 92.9499 3.2213 52.7199 33.4613 42.7599C44.8213 39.0099 58.4413 40.7399 66.8813 49.7699ZM66.6612 68.6899C63.2012 72.9999 61.6712 80.3699 60.7812 85.7399C59.7512 91.9299 59.7812 98.2999 61.0312 104.46C61.5112 106.8 62.2312 109.24 63.9712 110.87C65.7213 112.5 68.7713 112.94 70.4213 111.21C71.4513 110.12 71.6813 108.53 71.8313 107.04C72.4513 100.6 72.3413 94.0899 71.5113 87.6699C70.7713 81.9899 69.9412 73.4799 66.6612 68.6899Z" fill="#8C153D"/>`
  },
  {
    width: '127',
    height: '120',
    path: `<path d="M62.2032 59.5928C61.493 50.0835 58.6314 40.7355 53.8998 32.4463C53.4903 31.7277 53.0589 31.0046 52.9121 30.1847C52.6212 28.5545 53.6005 26.8745 54.9978 25.9834C57.0936 24.6467 59.892 24.8923 62.1504 25.9446C64.4089 26.997 66.2349 28.755 68.0719 30.4376C72.8318 34.8064 77.8441 38.8801 83.0964 42.6514C81.843 33.0079 79.0091 23.5696 74.7481 14.8338C74.0076 13.3031 73.1975 11.6668 73.4637 9.9912C73.9507 6.97301 77.8598 5.56556 80.7598 6.53957C83.6598 7.51359 85.7311 10.0341 87.6258 12.4362C91.8163 17.7336 96.0067 23.0311 100.197 28.3285C102.508 31.2405 104.838 34.1886 107.736 36.5089C109.038 37.5477 110.456 38.4731 111.479 39.7833C114.253 43.3475 111.133 48.5189 106.625 47.2193C104.37 46.5696 102.688 44.7316 101.129 42.9644C97.2691 38.5931 93.409 34.2217 89.549 29.8504C90.5833 35.5776 91.6055 41.2977 92.6398 47.0248C93.0768 49.4337 93.4413 52.1518 91.979 54.1162C90.7613 55.7563 88.5085 56.3897 86.4953 56.0999C84.4821 55.81 82.6501 54.7264 81.0241 53.4843C76.603 50.1118 73.0731 45.3106 67.8439 43.4066C69.5471 50.4352 70.8639 57.5671 71.7787 64.7443C71.9626 66.2064 72.1285 67.7562 71.5297 69.117C70.5192 71.416 67.5895 72.3442 65.1247 71.8749C62.6598 71.4057 60.537 69.8926 58.4902 68.4317C50.78 62.9781 42.7782 57.9441 34.5242 53.3605C36.6612 62.747 39.3257 72.0546 40.5435 81.6041C41.7614 91.1536 41.4677 101.128 37.8604 110.052C36.2699 113.976 33.5149 118.036 29.3257 118.628C26.6347 119.016 23.383 116.997 23.8147 114.315C24.0393 112.909 25.1717 111.84 26.1198 110.78C31.2893 104.988 32.3686 96.6357 32.1987 88.8763C31.949 77.4117 29.488 66.0001 24.9985 55.4415C23.9089 52.8759 22.6779 49.9754 23.7372 47.3942C24.8267 44.7325 28.0331 43.5233 30.9068 43.6245C34.8994 43.7681 38.5376 45.8386 41.9832 47.8468C48.7198 51.7493 55.4615 55.671 62.2032 59.5928Z" fill="#8C153D"/>`
  },
  {
    width: '88',
    height: '86',
    path: `<path d="M29.6535 55.7927C27.2335 57.9227 25.9635 61.0427 24.4335 63.8827C22.8835 66.7527 20.7135 69.6427 17.5435 70.4127C14.3735 71.1827 10.4135 68.4927 11.1635 65.3127C11.4035 64.2827 12.0735 63.4127 12.7135 62.5827C17.6435 56.2227 22.5635 49.8627 27.4935 43.5027C19.6135 41.6127 11.5135 40.6227 3.41348 40.5827C2.68348 40.5827 1.91348 40.5727 1.27348 40.2027C-0.926516 38.9127 0.723483 34.8327 2.16348 33.5227C4.29348 31.5827 7.82349 32.0527 10.4035 32.4627C16.7035 33.4627 23.0035 34.4627 29.3035 35.4627C29.3635 26.4627 28.6935 17.4627 27.3035 8.57266C27.0635 7.05266 26.8135 5.46266 27.2435 3.98266C27.7935 2.11266 29.4935 0.642665 31.4235 0.372665C33.3535 0.102665 35.3935 1.05266 36.4335 2.70266C37.4035 4.24266 37.4835 6.16266 37.5335 7.98266C37.7535 15.8327 37.9635 23.6927 38.1835 31.5427C46.9135 23.7127 55.0335 15.1927 62.4335 6.09266C64.4535 3.61266 66.6335 0.942664 69.7335 0.152664C72.8335 -0.637336 76.8235 1.74266 76.2435 4.89266C75.9435 6.54267 74.5635 7.74266 73.2835 8.82266C63.1735 17.3727 53.9635 26.9727 45.8435 37.4427C57.7235 39.9327 69.6135 42.4327 81.4935 44.9227C84.0535 45.4627 87.1235 46.5127 87.5335 49.0927C87.8935 51.3527 85.6935 53.3727 83.4335 53.7127C81.1635 54.0627 78.9135 53.2227 76.7535 52.4527C64.7235 48.1727 52.1035 45.5227 39.3635 44.6127C38.1935 55.7227 40.6035 66.8627 43.0635 77.7527C43.4835 79.6227 43.8835 81.7127 42.8935 83.3627C41.5635 85.5627 38.4535 85.8327 35.9335 85.3227C34.3935 85.0127 32.5835 84.1027 32.6235 82.5327C32.6435 81.9227 32.9635 81.3627 33.1535 80.7727C33.5435 79.5927 33.4235 78.3027 33.2835 77.0727C32.4835 69.9027 31.2835 62.7727 29.6935 55.7227C29.7035 55.7527 29.6835 55.7727 29.6535 55.7927Z" fill="#8C153D"/>`
  },
  {
    width: '153',
    height: '111',
    path: `<path d="M68.3732 38.209C59.2132 33.419 48.1732 31.339 38.4432 34.819C26.7232 39.009 18.9232 50.119 14.2032 61.129C8.89321 73.519 4.27319 88.769 8.03319 102.139C8.46319 103.659 8.9732 105.359 8.1932 106.729C7.0732 108.689 3.90319 108.429 2.37319 106.759C0.843188 105.099 0.533188 102.679 0.373188 100.419C-2.10681 64.389 22.8632 14.239 66.0632 29.609C68.1832 30.359 70.6832 31.209 72.5332 29.929C73.3132 29.389 73.8132 28.549 74.3132 27.739C80.4232 17.779 88.8632 8.93898 99.5232 4.14898C114.373 -2.53102 132.013 -0.571016 146.923 5.94898C148.503 6.63898 150.123 7.42898 151.173 8.78898C152.223 10.149 152.523 12.249 151.393 13.549C149.713 15.479 146.603 14.409 144.293 13.309C130.953 6.94898 114.743 4.31898 101.563 11.009C92.7432 15.489 86.3232 23.549 80.7732 31.739C80.1632 32.629 79.5432 33.629 79.6732 34.699C79.7932 35.759 80.6132 36.579 81.3832 37.309C91.2632 46.779 100.583 57.639 105.393 70.639C110.973 85.729 110.093 114.039 86.6032 109.619C73.4632 107.149 67.1532 93.029 64.9932 81.239C62.3732 66.939 63.5732 51.959 68.4332 38.259C68.4232 38.239 68.3932 38.229 68.3732 38.209ZM75.5832 43.329C69.4932 56.739 70.3132 76.079 76.2632 89.319C78.7632 94.859 82.6432 100.169 88.2832 102.419C95.0332 105.099 99.9432 99.929 100.793 93.539C101.333 89.459 100.683 85.139 99.9332 81.119C98.7832 74.949 96.6532 68.979 93.6832 63.459C90.5132 57.559 82.6832 44.589 75.5832 43.329Z" fill="#8C153D"/>`
  },
  {
    width: '168',
    height: '184',
    path: `<path d="M40.846 33.3123C40.9661 33.5125 41.0524 33.7364 41.0921 33.9783C41.4995 36.147 38.6536 37.2442 36.5268 37.8712C29.9785 39.8171 24.8962 45.3991 22.4855 51.7944C20.0747 58.1898 20.0991 65.2861 21.3911 72.0008C24.6615 89.0454 36.2947 104.291 51.8726 111.95C49.8655 95.3187 47.966 77.7991 54.4697 62.3664C61.4099 45.8973 78.1165 34.0224 95.9425 32.8622C103.356 32.3831 111.684 34.4671 115.994 41.0042C121.098 48.7677 119.777 59.8232 117.922 68.3834C115.549 79.3514 110.561 89.5699 105.419 99.4725C101.776 106.482 97.8176 113.699 91.3611 118.246C83.9753 123.441 74.5041 124.338 65.5029 125.065C71.1434 139.556 82.9932 152.917 98.4209 154.933C116.151 157.249 131.166 145.073 140.618 131.365C143.899 126.617 146.81 120.768 145.059 115.281C144.416 113.278 161.945 106.177 156.799 118.182C150.819 132.137 141.616 145.074 128.85 153.297C116.083 161.52 99.4768 164.482 85.3451 158.934C72.9154 154.048 63.4921 143.117 58.3294 130.81C57.0022 127.645 55.8248 124.23 53.242 121.979C51.6383 120.571 49.6152 119.744 47.6767 118.83C21.8843 106.75 -0.879701 66.9973 18.7352 40.5937C23.0985 34.7316 30.3789 30.6815 37.6167 31.6636C38.861 31.8055 40.2514 32.2983 40.846 33.3123ZM85.0262 42.0759C73.279 47.4945 64.733 57.9915 60.8709 70.2409C56.3937 84.4529 58.8932 99.8869 62.3242 114.04C62.5151 114.813 62.7168 115.614 63.2349 116.208C64.0972 117.193 65.5419 117.355 66.8429 117.421C82.4124 118.192 91.492 110.468 98.6223 97.495C105.093 85.7296 110.128 71.7957 110.721 58.2668C110.969 52.4906 109.956 45.497 104.994 41.6334C99.1674 37.0848 91.1137 39.2681 85.0262 42.0759Z" fill="#8C153D"/>`
  }
]

const mixinMethods = {
  data() {
    return {}
  },
  methods: {
    randomIcons(element, num = 5) {
      // const vh = window.innerHeight
      element.style.position = 'relative'
      const width = element.getBoundingClientRect().width
      const scale = width < 900 ? 0.5 : 1
      const marg = 0
      const step = 100 / num
      for (const dir of ['left', 'right']) {
        for (let i = 0; i < num; i++) {
          const ico = icons[~~(Math.random() * icons.length)]
          const svg = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
          )
          const randx = Math.random() * 10
          const randy = Math.random() * 0

          svg.setAttribute('width', ico.width * scale)
          svg.setAttribute('height', ico.height * scale)
          svg.setAttribute('viewBox', `0 0 ${ico.width} ${ico.height}`)
          svg.innerHTML = ico.path
          svg.style.cssText = `
          position:absolute;
          z-index:0;
          opacity: 0.8;
          top:${-marg + randy + i * step}%;
          ${dir}: ${randx}%;
        `
          element.appendChild(svg)
        }
      }
    }
  }
}

export default mixinMethods
