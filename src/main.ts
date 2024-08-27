interface IItem {
  src: string
  description: string
}
interface IOffsets {
  [key: number]: string
}

const data: IItem[] = [
  {
    src: '/public/photo_10_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_11_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_12_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_13_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_14_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_15_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_16_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_17_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_18_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_1_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_2_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_3_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_4_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_5_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_6_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_7_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_8_2024-08-23_17-23-59.jpg',
    description: ''
  },
  {
    src: '/public/photo_9_2024-08-23_17-23-59.jpg',
    description: ''
  },
]
console.log(data);


const cardWidth: number = 350
const slider: HTMLElement | null = document.querySelector('.slider')
const btn: NodeListOf<Element> = document.querySelectorAll('.btn')
const center: HTMLElement | null = document.querySelector('.center')
const offsets: IOffsets = {}
const item = (el: IItem) => {
  return (`
    <div class='item' style=min-width:${cardWidth}px>
    <div class='item-inner'>
      <img src=${el.src} alt='image'/>
    </div>
    ${el.description}</div>
    `)
}

if (center) center.style.width = cardWidth + 'px'

data.forEach(el => {
  slider?.insertAdjacentHTML('beforeend', item(el))
})
const itemList = document.querySelectorAll('.item')

let index: number = 0

data.forEach((_, i) => {
  offsets[i] = i * cardWidth + 'px'
})

btn.forEach(el => el.addEventListener('click', e => {
  controlsHandler(e.currentTarget?.role)
  
}));
document.addEventListener('keydown', (e) => controlsHandler(e.key))

window.onload = () => controlsHandler('random')

function controlsHandler(role: string) {
  switch (role) {
    case 'ArrowRight':
      if (index === data.length - 1) index = -1;
      index++;
      if (slider) slider.style.transform = `translateX(-${offsets[index]})`
      centerStyle(index)
      break;
    case 'ArrowLeft':
      if (index === 0) index = data.length
      index--
      if (slider) slider.style.transform = `translateX(-${offsets[index]})`
      centerStyle(index)
      break;

    case 'random':
      index = Math.floor(Math.random() * (data.length - 1))
      if (slider) slider.style.transform = `translateX(-${offsets[index]})`
      centerStyle(index)
      break;
  }
}

function centerStyle(index: number) {
  itemList.forEach(el => el.classList.remove('item-bg', 'item-center'))
  itemList.forEach((item, i) => i != index && item.classList.add('item-bg'))
  itemList[index].classList.add('item-center')
}

